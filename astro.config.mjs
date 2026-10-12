import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Demo en GitHub Pages: https://maru-rc.github.io/merav-demo/
// TODO: cuando haya dominio propio, cambiar `site` por el dominio y quitar `base`
export default defineConfig({
  site: 'https://maru-rc.github.io',
  base: '/merav-demo',
  integrations: [sitemap()],
});
