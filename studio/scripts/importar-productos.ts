/**
 * Sube a Sanity los productos que hoy están en la web (src/data/tienda.ts), con sus fotos.
 *
 * Uso (desde la carpeta studio/):
 *   npx sanity exec scripts/importar-productos.ts --with-user-token
 *
 * Se puede ejecutar varias veces sin duplicar nada: cada producto tiene un ID fijo
 * ("producto-<slug>") y Sanity reconoce las fotos que ya se subieron.
 * OJO: si la dueña ya editó un producto en el panel, volver a ejecutarlo lo sobrescribe.
 */
import {createReadStream, existsSync} from 'node:fs'
import {basename, join} from 'node:path'
import {getCliClient} from 'sanity/cli'
import {PRODUCTOS} from '../../src/data/tienda'

const client = getCliClient({apiVersion: '2025-01-01'})
const carpetaPublica = join(process.cwd(), '..', 'public')

const subidas = new Map<string, string>() // ruta local → id del archivo en Sanity

async function subirFoto(ruta: string): Promise<string> {
  const yaSubida = subidas.get(ruta)
  if (yaSubida) return yaSubida
  const archivo = join(carpetaPublica, ruta)
  if (!existsSync(archivo)) throw new Error(`No encuentro la foto ${archivo}`)
  const asset = await client.assets.upload('image', createReadStream(archivo), {filename: basename(archivo)})
  subidas.set(ruta, asset._id)
  return asset._id
}

async function main() {
  console.log(`Importando ${PRODUCTOS.length} productos a Sanity (proyecto ${client.config().projectId})…`)
  let i = 0
  for (const p of PRODUCTOS) {
    i++
    const imagenes = []
    for (const [n, img] of p.imagenes.entries()) {
      const ref = await subirFoto(img.src)
      imagenes.push({_type: 'image', _key: `foto${n + 1}`, alt: img.alt, asset: {_type: 'reference', _ref: ref}})
    }
    await client.createOrReplace({
      _id: `producto-${p.slug}`,
      _type: 'producto',
      nombre: p.nombre,
      slug: {_type: 'slug', current: p.slug},
      categoria: p.categoria,
      precio: p.precio,
      descripcion: p.descripcion,
      materiales: p.materiales,
      medidas: p.medidas,
      masVendido: Boolean(p.masVendido),
      nuevo: Boolean(p.nuevo),
      orden: i,
      imagenes,
    })
    console.log(`  ✓ ${i}/${PRODUCTOS.length} ${p.nombre} (${imagenes.length} foto${imagenes.length > 1 ? 's' : ''})`)
  }
  console.log(`Listo: ${PRODUCTOS.length} productos y ${subidas.size} fotos.`)
}

main().catch((error) => {
  console.error('Error al importar:', error.message)
  process.exit(1)
})
