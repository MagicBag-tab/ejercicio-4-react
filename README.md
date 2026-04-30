# Epic: The Musical — Blog

Mini-blog sobre el musical **Epic: The Musical**, construido con Vite + React + React Router.

## Nivel apuntado: Senior

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

## Rutas
- `/` — Home con listado de sagas
- `/sagas/:id` — Detalle de una saga y sus canciones
- `/sagas/:id/songs/:songId` — Detalle de una canción
- `/favorites` — Mis favoritos
- `*` — Página 404

## Componentes reutilizables
- `Card` — Tarjeta con `to`, `title`, `description`, `imageUrl`
- `Navbar` — Barra de navegación con `title`
- `Hero` — Carrusel de sagas con `sagas[]`

## Tecnologías
- React 19 + Vite
- React Router DOM v7
- Context API (favoritos)
- PropTypes
- API propia en Go + SQLite deployada en Render

## API
https://epic-api.onrender.com