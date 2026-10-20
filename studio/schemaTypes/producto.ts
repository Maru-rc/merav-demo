import {defineArrayMember, defineField, defineType} from 'sanity'

// Las categorías deben coincidir con las páginas de la web (/tiaras, /diademas, /tocados, /accesorios)
export const CATEGORIAS = [
  {title: 'Tiaras', value: 'Tiaras'},
  {title: 'Diademas', value: 'Diademas'},
  {title: 'Tocados', value: 'Tocados'},
  {title: 'Accesorios', value: 'Accesorios'},
]

const formatoPrecio = (valor?: number) =>
  typeof valor === 'number' ? `$${new Intl.NumberFormat('es-CO').format(valor)}` : 'Sin precio'

export const productoType = defineType({
  name: 'producto',
  title: 'Producto',
  type: 'document',
  groups: [
    {name: 'principal', title: 'Principal', default: true},
    {name: 'detalles', title: 'Detalles'},
    {name: 'fotos', title: 'Fotos'},
  ],
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
      group: 'principal',
      description: 'Ej: Tiara Perla Real',
      validation: (r) => r.required().max(40),
    }),
    defineField({
      name: 'slug',
      title: 'Dirección en la web',
      type: 'slug',
      group: 'principal',
      description: 'Dale a "Generate" para crearla a partir del nombre. Ej: tiara-perla-real',
      options: {source: 'nombre', maxLength: 60},
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      group: 'principal',
      options: {list: CATEGORIAS, layout: 'radio', direction: 'horizontal'},
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'precio',
      title: 'Precio (pesos colombianos)',
      type: 'number',
      group: 'principal',
      description: 'Solo el número, sin puntos ni signo $. Ej: 320000',
      validation: (r) => r.required().min(0).integer(),
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción corta',
      type: 'text',
      rows: 3,
      group: 'principal',
      description: 'Una o dos frases. También es lo que Google muestra en los resultados.',
      validation: (r) =>
        r.required().max(110).warning('Mejor si es corta (máximo unos 110 caracteres) para que Google no la corte.'),
    }),
    defineField({
      name: 'masVendido',
      title: 'Más vendido',
      type: 'boolean',
      group: 'principal',
      description: 'Aparece en la pestaña "Más vendidos" del inicio.',
      initialValue: false,
    }),
    defineField({
      name: 'nuevo',
      title: 'Novedad',
      type: 'boolean',
      group: 'principal',
      description: 'Aparece en la pestaña "Novedades" del inicio.',
      initialValue: false,
    }),
    defineField({
      name: 'materiales',
      title: 'Materiales',
      type: 'text',
      rows: 2,
      group: 'detalles',
      description: 'Ej: Perlas nacaradas, cristales tallados y base metálica forrada.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'medidas',
      title: 'Medidas aproximadas',
      type: 'string',
      group: 'detalles',
      description: 'Ej: 6 cm de alto en el centro · base metálica ajustable.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'orden',
      title: 'Orden',
      type: 'number',
      group: 'detalles',
      description: 'Opcional. Los números más bajos aparecen primero (1, 2, 3…).',
    }),
    defineField({
      name: 'imagenes',
      title: 'Fotos',
      type: 'array',
      group: 'fotos',
      description: 'La primera foto es la principal. Arrástralas para cambiar el orden.',
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Descripción de la foto',
              type: 'string',
              description: 'Qué se ve en la foto. Ayuda a Google y a personas con discapacidad visual. Ej: Novia con tiara de cristales',
              validation: (r) => r.required(),
            }),
          ],
        }),
      ],
      validation: (r) => r.required().min(1),
    }),
  ],
  orderings: [
    {title: 'Orden', name: 'orden', by: [{field: 'orden', direction: 'asc'}]},
    {title: 'Nombre', name: 'nombre', by: [{field: 'nombre', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'nombre', categoria: 'categoria', precio: 'precio', media: 'imagenes.0'},
    prepare: ({title, categoria, precio, media}) => ({
      title,
      subtitle: `${categoria ?? 'Sin categoría'} · ${formatoPrecio(precio)}`,
      media,
    }),
  },
})
