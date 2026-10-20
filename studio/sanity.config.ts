import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {esESLocale} from '@sanity/locale-es-es'
import {schemaTypes} from './schemaTypes'
import {estructura} from './estructura'

export default defineConfig({
  name: 'default',
  title: 'MERAV',

  projectId: 'mcwquy4y',
  dataset: 'production',

  plugins: [
    // Panel en español
    esESLocale(),
    structureTool({title: 'Productos', structure: estructura}),
    // "Vision" sirve para probar consultas; solo lo necesita quien programa
    visionTool({title: 'Consultas'}),
  ],

  schema: {
    types: schemaTypes,
  },
})
