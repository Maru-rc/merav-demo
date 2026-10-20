import type { APIRoute } from 'astro';

// robots.txt: indica a Google qué puede revisar y dónde está el mapa del sitio.
// En la demo de GitHub Pages (subcarpeta) se bloquea todo para que no compita con la web oficial.
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const esDemo = base !== '';
  const mapa = new URL(`${base}/sitemap-index.xml`, site).toString();
  const cuerpo = esDemo
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${mapa}\n`;
  return new Response(cuerpo, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
