// @ts-check
import { defineConfig } from 'astro/config';

// Dominio propio: https://juanjosegui.es (ver public/CNAME).
// Para volver a la URL de GitHub: SITE_URL=https://juanjosegui.github.io BASE_PATH=/webs npm run build
export default defineConfig({
	site: process.env.SITE_URL ?? 'https://juanjosegui.es',
	base: process.env.BASE_PATH ?? '/',
});
