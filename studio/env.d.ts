// El script de importación reutiliza src/data/tienda.ts, que lee import.meta.env.
// Esa variable solo existe dentro de Astro; aquí se declara como opcional para que TypeScript no se queje.
interface ImportMeta {
  readonly env?: {readonly BASE_URL?: string}
}
