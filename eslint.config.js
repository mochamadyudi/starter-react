import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tsEslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";

export default tsEslint.config(
  {ignores: ["dist"]},
  {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },

    extends:
      [
        js.configs.recommended,
        ...tsEslint.configs.recommended,
        "plugin:@typescript-eslint/recommended",
      ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@typescript-eslint": "@typescript-eslint/react",
      prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "prettier/prettier": "error",
      "no-multiple-empty-lines": {"max": 0},
      "react-refresh/only-export-components": ["error", {allowConstantExport: true}],
      "no-undef": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-namespace": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/no-empty-interface": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/no-unused-vars": "error",
      "prefer-const": "error",
      "no-unused-vars": "error",
      "no-console": "error",
      "no-global-assign": "error",
      "no-trailing-spaces": "error",
      "eol-last": ["error", "always"],
      "no-irregular-whitespace": "error",
      "import/extensions": ["error", "never"],
      "indent": ["error", "tab"],
      "linebreak-style": ["error", "unix"],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "max-len": ["error", {code: 120}],
      "comma-dangle": ["error", "always-multiline"],
      "object-curly-spacing": ["error", "never"],
    },
    overrides: [
      {
        files: ["*.d.ts"],  // Khusus untuk file deklarasi global (.d.ts)
        rules: {
          "@typescript-eslint/no-explicit-any": "off",  // Membolehkan penggunaan `any` dalam deklarasi global
          "@typescript-eslint/no-empty-interface": "off",  // Memungkinkan penggunaan interface kosong dalam deklarasi global
        },
      },
    ],
  },
);
