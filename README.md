<h1 align='center'>Vite typescript react library template⚡</h1>

Create a new react library project with Vite, React JS, TypeScript, Eslint, Prettier in just 1 second and you don't need to setup anything.

**Netlify Deploy**: https://typescript-react-library-template.netlify.app/


## Features 📋

- ⚛️ [React 17](https://reactjs.org/)
- 📚 [Jest](https://jestjs.io/) - Test framework
- ⏩ [Vite](https://vitejs.dev/) - Run and build the project blazingly fast!
- 📐 [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) - Formatting and Linting
- 🌟 [Typescript](https://www.typescriptlang.org/)
- 🐶 [Husky](https://typicode.github.io/husky) & [Lint Staged](https://www.npmjs.com/package/lint-staged) - Pre-commit Hooks
- ⏰ [Release Please](https://github.com/googleapis/release-please) — Generate the changelog with the release-please workflow
- 👷 [Github Actions](https://github.com/features/actions) — Releasing versions to NPM

## **Using 📦**

1. Clone Template

```
git clone https://github.com/kothing/vite-typescript-react-library-template.git
```

2. Install Packages

```
yarn install
```

3. Start Project

```
yarn dev
```

4. If you using git, delete the existing folder .git after cloning (open `git bash` or other terminal)

```
rm -rf .git
```

## Options ✍️

The starter contains the following scripts:

- `dev` - starts dev server
- `build` - generates the following bundles: CommonJS (`.cjs`) ES (`.es`) UMD (`.umd.js`) and IIFE (`.iife.js`). The name of bundle is automatically taked from `package.json` name property
- `eslint` - lint `.js`, `.jsx`, `.ts`, `.tsx` files with eslint
- `prettier` - format `.js`, `.ts`, `.html` and `.json` files with prettier
- `stylelint` - format `.css` `less` and `.scss` files with stylelint
- `prepare` - script for setting up husky pre-commit hook


# 📋 License
Licensed under the MIT License.
