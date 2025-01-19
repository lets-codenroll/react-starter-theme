import prettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: { prettier },
    rules: {
      "prettier/prettier": "error", // Treat Prettier issues as errors
    },
  },
  configPrettier, // Disables ESLint rules that conflict with Prettier
];
