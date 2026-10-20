import type {StructureResolver} from 'sanity/structure'
import {CATEGORIAS} from './schemaTypes/producto'

// Menú del panel: los productos agrupados por categoría, para que sea fácil encontrarlos
export const estructura: StructureResolver = (S) =>
  S.list()
    .title('MERAV')
    .items([
      S.listItem()
        .title('Todos los productos')
        .schemaType('producto')
        .child(S.documentTypeList('producto').title('Todos los productos')),
      S.divider(),
      ...CATEGORIAS.map((c) =>
        S.listItem()
          .title(c.title)
          .schemaType('producto')
          .child(
            S.documentList()
              .title(c.title)
              .schemaType('producto')
              .filter('_type == "producto" && categoria == $categoria')
              .params({categoria: c.value})
              .initialValueTemplates([]),
          ),
      ),
    ])
