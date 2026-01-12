# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Despliegue (GitHub / Netlify) ✅

- Build local: `npm run build` (genera `dist/`).
- Para Netlify: asegúrate de que `vite.config.js` tiene `base: '/'` (o quita `base`) y en Netlify configura `Build command: npm run build` y `Publish directory: dist`.
- Para GitHub Pages (si quieres publicar en `username.github.io/repo`): establece `base: '/NOMBRE_REPO/'` en `vite.config.js` y puedes usar `npm run deploy` (usa `gh-pages`) o desplegar desde la interfaz de GitHub Pages.
- Añade variables de entorno en Netlify si tu app las necesita (`Settings > Environment > Environment variables`).

> Nota: `dist/` ya está en `.gitignore`, pero es la carpeta que Netlify usará como `Publish directory`.
