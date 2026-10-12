import { R } from '../utils/ruta';

export const WHATSAPP = '573330399107';
export const INSTAGRAM = 'https://www.instagram.com/meravcol/';

export const waLink = (texto: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;

export type Categoria = 'Tiaras' | 'Diademas' | 'Tocados' | 'Accesorios';

export interface Color {
  id: string;
  nombre: string;
  hex: string;
}

export const COLORES: Color[] = [
  { id: 'dorado', nombre: 'Dorado', hex: '#C9A866' },
  { id: 'plata', nombre: 'Plata', hex: '#C9C9C6' },
  { id: 'champan', nombre: 'Champán', hex: '#E3D2B4' },
  { id: 'rosa', nombre: 'Oro rosa', hex: '#D8AE9F' },
];

export interface Producto {
  slug: string;
  nombre: string;
  categoria: Categoria;
  descripcion: string;
  precio: number; // en pesos colombianos
  materiales: string;
  medidas: string;
  imagenes: { src: string; alt: string }[];
  masVendido?: boolean;
  nuevo?: boolean;
}

export const formatoPrecio = (valor: number) => `$${new Intl.NumberFormat('es-CO').format(valor)}`;

// Para qué peinado u ocasión va mejor cada tipo de pieza
export const IDEAL_PARA: Record<Categoria, string> = {
  Tiaras: 'Ideal para novias y quinceañeras que sueñan con un look de princesa; luce perfecta con recogidos altos o semirecogidos.',
  Diademas: 'Cómoda de llevar todo el día, ideal para peinados sueltos, ondas o semirecogidos.',
  Tocados: 'Flexible y liviano, se adapta a recogidos bajos, trenzas y peinados semirecogidos.',
  Accesorios: 'El complemento perfecto para tu tiara, diadema o tocado MERAV.',
};

// Textos comunes de la ficha de producto
export const TIEMPO_ELABORACION =
  'Cada pieza se elabora a mano por encargo. El tiempo de elaboración es de 8 a 12 días hábiles después de confirmar tu pedido. Te recomendamos pedirla con al menos un mes de anticipación; si tu fecha está cerca, escríbenos y hacemos lo posible por ayudarte.';
export const ENVIOS = [
  'Colombia: de 2 a 4 días hábiles por transportadora, con número de guía para seguir tu pedido.',
  'Internacional: de 7 a 15 días hábiles según el país de destino.',
  'Tu pieza viaja protegida en su caja MERAV, lista para regalar o guardar.',
];

// TODO: precios de ejemplo para mostrar la propuesta; reemplazar por los reales del catálogo
export const PRODUCTOS: Producto[] = [
  {
    slug: 'diadema-zafiro',
    nombre: 'Diadema Zafiro',
    categoria: 'Diademas',
    descripcion: 'Diadema de racimos de perlas con cristales azul zafiro en forma de gota.',
    precio: 245000,
    materiales: 'Perlas nacaradas, cristales azul zafiro en forma de gota y base metálica forrada.',
    medidas: '4 cm de ancho en la parte central · base flexible de talla única.',
    masVendido: true,
    imagenes: [{ src: R('/img/diadema-zafiro.jpg'), alt: 'Modelo con diadema de perlas y cristales azul zafiro' }],
  },
  {
    slug: 'tiara-perla-real',
    nombre: 'Tiara Perla Real',
    categoria: 'Tiaras',
    descripcion: 'Tiara tejida con perlas y una gota de cristal central rodeada de brillantes.',
    precio: 320000,
    materiales: 'Perlas en tonos plata y marfil, gota de cristal tallado con borde de brillantes y alambre plateado.',
    medidas: '6 cm de alto en el centro · base metálica ajustable.',
    masVendido: true,
    imagenes: [{ src: R('/img/tiara-perla-real.webp'), alt: 'Tiara de perlas con gota de cristal sobre tarjeta MERAV' }],
  },
  {
    slug: 'diadema-rubi',
    nombre: 'Diadema Rubí',
    categoria: 'Diademas',
    descripcion: 'Diadema de cristales rojos facetados con gotas color rubí y detalles dorados.',
    precio: 235000,
    materiales: 'Cristales facetados rojos, gotas color rubí con engaste dorado y cuentas metalizadas.',
    medidas: '4,5 cm de ancho en la parte central · base flexible de talla única.',
    masVendido: true,
    imagenes: [
      { src: R('/img/diadema-rubi.jpg'), alt: 'Diadema de cristales rojos sobre caja MERAV' },
      { src: R('/img/diadema-rubi-modelo.jpg'), alt: 'Modelo con diadema roja de cristales' },
    ],
  },
  {
    slug: 'tocado-cristal',
    nombre: 'Tocado Cristal',
    categoria: 'Tocados',
    descripcion: 'Tocado de cristales tallados y gotas brillantes para peinados sueltos.',
    precio: 210000,
    materiales: 'Cristales tallados, cuentas opalinas, gotas de cristal y alambre plateado moldeable.',
    medidas: '22 cm de largo · se fija con ganchos o peinetas.',
    masVendido: true,
    imagenes: [{ src: R('/img/tocado-cristal.webp'), alt: 'Modelo con tocado de cristales y aretes de gota' }],
  },
  {
    slug: 'tiara-flor-de-perla',
    nombre: 'Tiara Flor de Perla',
    categoria: 'Tiaras',
    descripcion: 'Tiara nupcial de flores y perlas, ideal para semirecogidos.',
    precio: 290000,
    materiales: 'Flores metálicas plateadas, perlas de varios tamaños y cristales sobre base metálica.',
    medidas: '5 cm de alto en el centro · base metálica ajustable.',
    nuevo: true,
    imagenes: [{ src: R('/img/tiara-flor-de-perla.jpg'), alt: 'Novia recibiendo su tiara de flores y perlas' }],
  },
  {
    slug: 'tocado-dorado',
    nombre: 'Tocado Dorado',
    categoria: 'Tocados',
    descripcion: 'Tocado delicado de ramas doradas con perlas, perfecto para quinceañeras.',
    precio: 185000,
    materiales: 'Ramas de alambre dorado, perlas marfil y pequeños cristales.',
    medidas: '28 cm de largo · flexible, se adapta a la forma del peinado.',
    nuevo: true,
    imagenes: [{ src: R('/img/tocado-dorado.webp'), alt: 'Quinceañera con tocado dorado de perlas' }],
  },
  {
    slug: 'diadema-perla',
    nombre: 'Diadema Perla',
    categoria: 'Diademas',
    descripcion: 'Diadema de perlas con flores metálicas, hecha a mano pieza por pieza.',
    precio: 220000,
    materiales: 'Perlas nacaradas, flores metálicas doradas y cristales sobre base de diadema forrada.',
    medidas: '5 cm de ancho en la parte central · base flexible de talla única.',
    imagenes: [
      { src: R('/img/diadema-perla.jpg'), alt: 'Diadema de perlas y flores sobre tarjeta MERAV' },
      { src: R('/img/tocado-aurora.jpg'), alt: 'Pieza MERAV de perlas y flores en su caja' },
    ],
  },
  {
    slug: 'tiara-cristal',
    nombre: 'Tiara Cristal',
    categoria: 'Tiaras',
    descripcion: 'Tiara de cristales tallados para novias y quinceañeras.',
    precio: 340000,
    materiales: 'Cristales tallados de alto brillo y perlas pequeñas sobre base metálica plateada.',
    medidas: '5,5 cm de alto en el centro · base metálica ajustable.',
    masVendido: true,
    imagenes: [{ src: R('/img/tiara-cristal.jpg'), alt: 'Novia con tiara de cristales y bata de satín' }],
  },
  {
    slug: 'tocado-enredadera',
    nombre: 'Tocado Enredadera',
    categoria: 'Tocados',
    descripcion: 'Tocado de ramas doradas con flores, perlas y cristales, con peineta para fijarlo.',
    precio: 195000,
    materiales: 'Ramas de alambre dorado, flores metálicas, perlas y cristales con peineta incluida.',
    medidas: '25 cm de largo · peineta de 7 cm.',
    masVendido: true,
    imagenes: [{ src: R('/img/tocado-enredadera.jpg'), alt: 'Tocado dorado de enredadera con peineta en caja MERAV' }],
  },
  {
    slug: 'tocado-luna',
    nombre: 'Tocado Luna',
    categoria: 'Tocados',
    descripcion: 'Tocado de flores, hojas y perlas en tonos dorado y marfil.',
    precio: 205000,
    materiales: 'Flores y hojas metálicas, perlas marfil y cristales sobre alambre dorado.',
    medidas: '20 cm de largo · se fija con ganchos.',
    masVendido: true,
    imagenes: [{ src: R('/img/tocado-luna.jpg'), alt: 'Tocado de flores y perlas en caja MERAV' }],
  },
  {
    slug: 'tocado-rocio',
    nombre: 'Tocado Rocío',
    categoria: 'Tocados',
    descripcion: 'Tocado de ramas plateadas con cristales, ligero y con peineta.',
    precio: 190000,
    materiales: 'Ramas de alambre plateado, cristales en gota y cuentas transparentes con peineta incluida.',
    medidas: '26 cm de largo · peineta de 7 cm.',
    nuevo: true,
    imagenes: [{ src: R('/img/tocado-rocio.jpg'), alt: 'Tocado plateado de cristales con peineta en caja MERAV' }],
  },
  {
    slug: 'tocado-aurora',
    nombre: 'Tocado Aurora',
    categoria: 'Tocados',
    descripcion: 'Tocado dorado de perlas y cristales, entregado en su caja MERAV.',
    precio: 230000,
    materiales: 'Perlas, flores doradas, cristales y alambre dorado moldeable.',
    medidas: '24 cm de largo · se fija con ganchos o peinetas.',
    nuevo: true,
    imagenes: [{ src: R('/img/tocado-aurora.jpg'), alt: 'Tocado dorado de perlas en caja MERAV' }],
  },
  {
    slug: 'aretes-flor-cristal',
    nombre: 'Aretes Flor de Cristal',
    categoria: 'Accesorios',
    descripcion: 'Aretes de flor de cristales con perla colgante.',
    precio: 85000,
    materiales: 'Flor de cristales con engaste plateado y perla colgante.',
    medidas: '3 cm de largo · cierre de mariposa.',
    nuevo: true,
    imagenes: [{ src: R('/img/aretes-flor-cristal.jpg'), alt: 'Aretes de flor de cristal con perla frente a caja MERAV' }],
  },
  {
    slug: 'aretes-hojas',
    nombre: 'Aretes Hojas',
    categoria: 'Accesorios',
    descripcion: 'Aretes largos de hojas de cristal en tono champán.',
    precio: 95000,
    materiales: 'Hojas de cristal tallado en tono champán con engaste plateado.',
    medidas: '7 cm de largo · cierre de mariposa.',
    imagenes: [{ src: R('/img/aretes-hojas.jpg'), alt: 'Aretes largos de hojas de cristal sobre caja MERAV' }],
  },
  {
    slug: 'aretes-cascada',
    nombre: 'Aretes Cascada',
    categoria: 'Accesorios',
    descripcion: 'Aretes en cascada de cristales, ideales para novias.',
    precio: 110000,
    materiales: 'Cristales en cascada con engaste plateado.',
    medidas: '8 cm de largo · cierre de mariposa.',
    imagenes: [{ src: R('/img/aretes-cascada.jpg'), alt: 'Aretes de cascada de cristales en exhibidor' }],
  },
  {
    slug: 'aretes-flor-dorada',
    nombre: 'Aretes Flor Dorada',
    categoria: 'Accesorios',
    descripcion: 'Aretes de flores doradas con centro de cristal.',
    precio: 79000,
    materiales: 'Flores metálicas doradas con centro de cristal.',
    medidas: '4 cm de largo · cierre de presión.',
    imagenes: [{ src: R('/img/aretes-flor-dorada.jpg'), alt: 'Aretes de flores doradas en tarjeta' }],
  },
  {
    slug: 'set-flor-dorada',
    nombre: 'Set Flor Dorada',
    categoria: 'Accesorios',
    descripcion: 'Aretes de flor y gargantilla de perlas doradas a juego.',
    precio: 165000,
    materiales: 'Aretes de flor en alambre dorado con perlas y gargantilla de cuentas doradas con perlas.',
    medidas: 'Aretes de 5 cm · gargantilla de 38 cm con extensor.',
    imagenes: [{ src: R('/img/set-flor-dorada.jpg'), alt: 'Aretes de flor y gargantilla dorada' }],
  },
  {
    slug: 'tiara-princesa',
    nombre: 'Tiara Princesa',
    categoria: 'Tiaras',
    descripcion: 'Tiara alta de cristales para un look de princesa.',
    precio: 360000,
    materiales: 'Cristales tallados y perlas en varios tamaños sobre base metálica plateada.',
    medidas: '7 cm de alto en el centro · base metálica ajustable.',
    nuevo: true,
    imagenes: [{ src: R('/img/novia-tiara.jpg'), alt: 'Novia con tiara de cristales alta' }],
  },
  {
    slug: 'tocado-brillo',
    nombre: 'Tocado Brillo',
    categoria: 'Tocados',
    descripcion: 'Tocado de cristales plateados, perfecto para un recogido.',
    precio: 175000,
    materiales: 'Cristales plateados, perlas pequeñas y alambre plateado moldeable.',
    medidas: '18 cm de largo · se fija con ganchos.',
    imagenes: [{ src: R('/img/vitrina-tiaras.jpg'), alt: 'Tocado de cristales plateados en exhibidor junto a caja MERAV' }],
  },
];

export const COLECCIONES: { nombre: Categoria; img: string }[] = [
  { nombre: 'Tiaras', img: R('/img/tiara-flor-de-perla.jpg') },
  { nombre: 'Diademas', img: R('/img/diadema-rubi-modelo.jpg') },
  { nombre: 'Tocados', img: R('/img/tocado-dorado.webp') },
  { nombre: 'Accesorios', img: R('/img/aretes-flor-cristal.jpg') },
];
