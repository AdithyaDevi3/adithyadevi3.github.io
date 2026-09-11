# Adithya Devi — Personal Portfolio

An interactive portfolio built with React, React Three Fiber, and Framer Motion. The home experience uses a 3D campaign map to organize professional experience, education, and selected GitHub projects.

## Status

The portfolio is actively maintained. The campaign map and project directory are functional, while content, accessibility, mobile polish, and loading performance continue to improve.

## Run locally

Requirements: a current Node.js LTS release and npm.

```bash
npm ci
npm run dev
```

Before submitting a change:

```bash
npm run lint
npm test
npm run build
```

Use `npm run preview` to inspect the production build locally. `npm run deploy` publishes the generated `dist` directory to GitHub Pages and should only be run by a repository maintainer.

## Architecture

- Vite builds and serves the React application.
- React Three Fiber and Three.js render the crystal background and campaign-map scene.
- Portfolio content lives in `src/data/landingCampaignData.js`.
- Project cards request public GitHub README files in the browser and fall back to the summaries stored with the portfolio data when a request fails.

This is a personal, client-side website. It has no private API, authentication system, or persistent user-data store. Repository links and displayed résumé content remain the responsibility of the site owner.

## Conventions

Changes are developed on focused feature branches and merged into `main` through pull requests. Keep portfolio content in the data modules, reusable presentation behavior in components, and shared visual rules in the existing stylesheets.

## Next improvements

- Expand automated browser interaction and accessibility coverage for the campaign map and project cards.
- Continue responsive testing and mobile layout refinement.
- Split the large production JavaScript bundle and defer noncritical 3D code.
- Keep project descriptions and résumé content current.

## Motion acceptance checks

- Route, page, card, and modal transitions preserve context instead of flashing between states.
- Hover motion is subtle, directional, and paired with an equivalent keyboard focus state.
- `prefers-reduced-motion` removes continuous decorative movement and shortens state transitions.
- Signal animation math remains bounded and deterministic under `npm test`.
- Desktop and mobile review must confirm legibility, stable layout, and smooth interaction before deployment.
