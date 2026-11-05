// @ts-check
import { defineConfig } from 'astro/config';

// Sin dominio propio la web vive en https://juanjosegui.github.io/webs/.
// Con dominio propio: SITE_URL=https://tudominio.es BASE_PATH=/ npm run build
export default defineConfig({
	site: process.env.SITE_URL ?? 'https://juanjosegui.github.io',
	base: process.env.BASE_PATH ?? '/webs',
});
