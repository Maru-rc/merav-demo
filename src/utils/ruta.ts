// Antepone la ruta base del sitio (p. ej. "/merav-demo" en GitHub Pages) a las rutas internas.
// En un dominio propio la base es "/" y la ruta queda igual.
// (Fuera de Astro, por ejemplo en el script que importa productos a Sanity, no existe import.meta.env)
const BASE = (import.meta.env?.BASE_URL ?? '/').replace(/\/$/, '');

export const R = (ruta: string) => `${BASE}${ruta}`;
