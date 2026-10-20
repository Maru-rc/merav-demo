import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'mcwquy4y',
    dataset: 'production'
  },
  // Dirección del panel en internet: https://merav.sanity.studio
  studioHost: 'merav',
  deployment: {
    // Identificador del panel publicado (para que `sanity deploy` actualice siempre el mismo)
    appId: 'j4seb6uzb3r1dpzc95zfhk44',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
