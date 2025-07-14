# Spidr Full Stack Software Engineer 2025 Interview Challenge: Air Fryer Interest Form

## Project Overview

I began this project by designing the Air Fryer interest form in Figma to match the style and layout requirements. Once the design was finalized, I scaffolded the React form and, with the help of GitHub Copilot, replicated the Figma design in code. The form uses React (TypeScript, Vite) and custom CSS for styling.

## Validation & User Feedback

Currently, the form provides basic validation for required fields and input formats. However, more robust feedback could be added to help users correct invalid inputs in real time. For example, highlighting fields and providing specific error messages as the user types.

## Production Considerations

If this form were to be used in a production environment, it is highly recommended to use a validation and sanitization library such as [Zod](https://zod.dev/) to ensure user input is properly sanitized. This helps prevent security vulnerabilities like SQL injection and unauthorized backend operations.

## Deployment: GitHub Pages

To deploy this Vite React project to GitHub Pages:

1. **Set the homepage field in `package.json`:**

   ```json
   "homepage": "https://<your-github-username>.github.io/<your-repo-name>"
   ```

   Example:

   ```json
   "homepage": "https://arod1104.github.io/spidr-interview-challenge-2025"
   ```

2. **Install the `gh-pages` package:**

   ```powershell
   npm install --save-dev gh-pages
   ```

3. **Add deploy scripts to `package.json`:**

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

   (Add these alongside your existing scripts.)

4. **Build and deploy:**

   ```powershell
   npm run deploy
   ```

5. **Push your changes to GitHub.**

Your site will be live at the URL you set in the `homepage` field after a few minutes.

<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]); -->
