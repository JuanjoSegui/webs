# Webs

Web de presentación y páginas legales (privacidad, contacto) de los juegos para Android de Juanjo Seguí.
Hecha con [Astro](https://astro.build) y publicada con GitHub Pages.

## Editar

- Datos del autor y del correo de contacto: `src/data/site.ts`.
- Juegos (textos, enlaces a Google Play): `src/data/games.ts`. Pon `published: true` cuando el juego esté en Google Play.
- Política de privacidad: `src/pages/privacidad.astro`. Revísala si cambia lo que hace una app.

```bash
npm install
npm run dev      # http://localhost:4321/webs/
npm run build    # genera dist/
```

## Publicar

Cada push a `main` despliega la web con `.github/workflows/deploy.yml`.

Primera vez: en el repositorio, Settings → Pages → Source: **GitHub Actions**.

La web queda en `https://juanjosegui.es` (dominio propio, fichero `public/CNAME`).

## Dominio

- DNS: cuatro registros A del dominio raíz hacia 185.199.108.153–111.153 y un CNAME `www` hacia `juanjosegui.github.io`.
- Settings → Pages → Custom domain: `juanjosegui.es`. Activa "Enforce HTTPS" cuando GitHub lo permita.
- `astro.config.mjs` ya usa `https://juanjosegui.es` y base `/`. Si vuelves a la URL de GitHub, usa
  `SITE_URL=https://juanjosegui.github.io BASE_PATH=/webs npm run build`.
