# React + Vite

# personalweb

A small personal website built with React + Vite. It includes a 3D crystal background built with three.js and simple client-side navigation.

This repo is intentionally minimal. The goal is to provide a clean starting point for a portfolio or creative site.

Contents

- `src/` - React app source
- `public/` - static assets
- `index.html` - app entry
- `package.json` - scripts and deps

Getting started

Prerequisites: Node.js (16+) and npm.

1. Install dependencies

```bash
npm install
```

2. Start the dev server (Vite)

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

Notes and small fixes applied

- Wrapped the root render in `React.StrictMode` (`src/main.jsx`).
- Fixed a routing string mismatch so the Contact page route is `"contact"`.
- Updated sample contact email and GitHub link in `src/components/SocialLinks.jsx` and `src/pages/ContactPage.jsx` (please update to your real email/links).
- Improved README with setup instructions.

Suggested next improvements (I can implement these if you want):

- Add Tailwind CSS configuration and directives for styling.
- Add ESLint rules and run automatic fixes.
- Replace manual client-side routing with React Router for URL-based navigation.
- Add unit tests and a build CI workflow.

If you'd like, I can continue and add Tailwind + PostCSS config and wire up the styling. Just tell me which of the suggested improvements you'd like next.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
