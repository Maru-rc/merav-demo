import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// La URL del sitio y la subcarpeta se pueden cambiar con variables de entorno:
// - Cloudflare Pages (o dominio propio): no hace falta definir nada → sitio en la raíz "/".
// - Demo en GitHub Pages: el workflow define SITE_URL y BASE_PATH=/merav-demo.
// TODO: cuando haya dominio propio, cambiar el valor por defecto de SITE_URL por el dominio.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://merav.pages.dev',
  base: process.env.BASE_PATH ?? '/',
  integrations: [sitemap()],
});
