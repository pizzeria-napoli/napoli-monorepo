// napoli-pwa/eslint.config.mjs

import { dirname } from "path";
import { fileURLToPath } from "url";
import js from "@eslint/js";
import nx from "@nx/eslint-plugin";
import typescriptEslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";
import prettierConfig from "eslint-config-prettier";

const baseDirectory = dirname(fileURLToPath(import.meta.url));

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
const config = [
  // Base configs
  js.configs.recommended,
  ...typescriptEslint.configs.recommended,

  // Configuración de Nx y sus reglas de boundaries
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

  // Configuración específica de React y TypeScript para el proyecto
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

  // LA NIVELACIÓN DEFINITIVA: Ignorar todos los archivos de configuración
  {
    ignores: [
      ".next/**/*",
      "**/*.config.js",
      "**/*.config.mjs",
      "jest.preset.js",
    ],
  },

  // Integración con Prettier (debe ser la última)
  prettierConfig,
];

export default config;
