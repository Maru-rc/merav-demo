import {createClient} from '@sanity/client';
import {createImageUrlBuilder} from '@sanity/image-url';
import {PRODUCTOS as PRODUCTOS_LOCALES, type Producto} from '../data/tienda';

// Conexión con Sanity (el panel donde la dueña edita los productos).
// El dataset es público: no hace falta ninguna clave para leer.
export const sanity = createClient({
  projectId: 'mcwquy4y',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: false, // la web se genera al publicar: siempre se piden los datos más recientes
});

const imagenes = createImageUrlBuilder(sanity);

// Consulta GROQ: productos publicados (sin borradores), en el orden elegido en el panel
const CONSULTA = `*[_type == "producto" && defined(slug.current) && !(_id in path("drafts.**"))]
  | order(coalesce(orden, 9999) asc, nombre asc) {
    nombre, "slug": slug.current, categoria, precio, descripcion, materiales, medidas, masVendido, nuevo,
    imagenes[defined(asset)]{ alt, asset, crop, hotspot }
  }`;

interface ProductoSanity extends Omit<Producto, 'imagenes'> {
  imagenes: { alt?: string; asset: unknown; crop?: unknown; hotspot?: unknown }[];
}

const aProducto = (p: ProductoSanity): Producto => ({
  ...p,
  masVendido: Boolean(p.masVendido),
  nuevo: Boolean(p.nuevo),
  imagenes: (p.imagenes ?? []).map((img) => ({
    alt: img.alt ?? p.nombre,
    // Foto grande (ficha de producto) y foto pequeña (tarjetas), recortadas en 4:5 respetando
    // el punto de interés marcado en el panel, y en el formato más liviano que soporte el navegador
    src: imagenes.image(img).width(1200).height(1500).fit('crop').auto('format').quality(82).url(),
    srcTarjeta: imagenes.image(img).width(600).height(750).fit('crop').auto('format').quality(80).url(),
  })),
});

let cache: Promise<Producto[]> | undefined;

/**
 * Productos para la web. Se leen de Sanity al compilar; si Sanity no responde o no hay
 * productos publicados, en el computador se usan los de src/data/tienda.ts (en Cloudflare, falla).
 */
export function obtenerProductos(): Promise<Producto[]> {
  cache ??= sanity
    .fetch<ProductoSanity[]>(CONSULTA)
    .then((lista) => {
      const validos = lista.filter((p) => p.nombre && p.slug && p.categoria && p.imagenes?.length);
      if (validos.length === 0) throw new Error('no hay productos publicados');
      console.log(`[sanity] ${validos.length} productos cargados desde Sanity`);
      return validos.map(aProducto);
    })
    .catch((error) => {
      // En Cloudflare (WORKERS_CI) o GitHub (CI) es mejor que la compilación falle: así sigue
      // en línea la versión anterior y no se publican los productos de ejemplo encima de los reales
      if (process.env.WORKERS_CI || process.env.CI) {
        throw new Error(`[sanity] No se pudo leer Sanity: ${error.message}`);
      }
      console.warn(`[sanity] No se pudo leer Sanity (${error.message}). Se usan los productos de respaldo.`);
      return PRODUCTOS_LOCALES;
    });
  return cache;
}
