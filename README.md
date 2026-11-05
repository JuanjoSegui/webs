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

La web queda en `https://juanjosegui.github.io/webs/`. Para un dominio propio, ver la sección siguiente.

## Dominio propio

1. En Settings → Pages → Custom domain, escribe el dominio y guarda (GitHub crea el fichero CNAME).
2. En `.github/workflows/deploy.yml` y en el build, usa `SITE_URL=https://tudominio.es` y `BASE_PATH=/`.
   Por ejemplo, en el paso de build del workflow: `run: npm run build` → `run: SITE_URL=https://tudominio.es BASE_PATH=/ npm run build`.
3. Marca "Enforce HTTPS" cuando esté disponible.
