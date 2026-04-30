# Epic: The Musical — Blog

> Mini-blog sobre el musical **Epic: The Musical**, construido con Vite + React + React Router.

[![Netlify Deploy](https://img.shields.io/badge/Deploy-Netlify-00AD9F?style=for-the-badge)](https://69f2e3f2a17b6cf84cf2329f--merry-rolypoly-cb9b07.netlify.app/)

## Demo

🔗 **Live URL**: [https://69f2dee818b56200093b9075--merry-rolypoly-cb9b07.netlify.app/](https://69f2e3f2a17b6cf84cf2329f--merry-rolypoly-cb9b07.netlify.app/)

## Tecnologías

| Categoría | Tecnología |
|-----------|------------|
| Frontend | React 19 + Vite |
| Routing | React Router DOM v7 |
| Estado | Context API (favoritos) |
| Validación | PropTypes |
| Backend | API propia en Go + SQLite (Render) |

## API Externa

- **Endpoint**: [https://epic-api.onrender.com](https://epic-api.onrender.com/sagas)
- Revisar repositorio para más información: https://github.com/MagicBag-tab/epic-api.git

## Cómo correr el proyecto

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Home con listado de sagas |
| `/sagas/:id` | Detalle de una saga y sus canciones |
| `/sagas/:id/songs/:songId` | Detalle de una canción |
| `/favorites` | Mis favoritos |
| `*` | Página 404 |

## Componentes reutilizables

- **`Card`** — Tarjeta con `to`, `title`, `description`, `imageUrl`
- **`Navbar`** — Barra de navegación con `title`
- **`Hero`** — Carrusel de sagas con `sagas[]`

## Nivel alcanzado

**Senior**
