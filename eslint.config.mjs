// napoli-pwa/eslint.config.mjs

import { dirname } from "path";
import { fileURLToPath } from "url";
import js from "@eslint/js";
import nx from "@nx/eslint-plugin";
import typescriptEslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";
import prettierConfig from "eslint-config-prettier";

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
const config = [
  // Base configs
  js.configs.recommended,
  ...typescriptEslint.configs.recommended,

  // LA NIVELACIÓN DEFINITIVA: Se añade el contexto del parser de TypeScript.
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
  },

  // Configuración de Nx
  {
    plugins: { "@nx": nx },
    rules: {
      "@nx/enforce-module-boundaries": [
        "error",
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            { sourceTag: "*", onlyDependOnLibsWithTags: ["*"] },
          ],
        },
      ],
    },
  },

  // Configuración de React/TypeScript de Nx
  ...nx.configs["flat/react-typescript"],

  // Configuración de Next.js
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: { "@next/next": nextPlugin },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },

  // Ignorar archivos de configuración
  {
    ignores: [".next/**/*", "**/*.config.js", "**/*.config.mjs", "jest.preset.js"],
  },

  // Integración con Prettier (última)
  prettierConfig,
];

export default config;
