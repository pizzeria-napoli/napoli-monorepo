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

  // NIVELACIÓN SOBERANA Y DEFINITIVA: Se establece el contexto de TS para todo el proyecto.
  // Esto elimina el error "No tsconfigRootDir was set" de forma permanente.
  {
    languageOptions: {
      parserOptions: {
        project: ["tsconfig.json"], // Apunta al tsconfig.json dentro de este directorio
        tsconfigRootDir: __dirname, // Le dice al parser que la raíz para encontrar tsconfig.json es el directorio actual
      },
    },
  },

  // Configuración de Nx (reglas del monorepo)
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

  // Configuración de React/TypeScript específica de Nx
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

  // Ignorar archivos de configuración y directorios de build
  {
    ignores: [
      ".next/**/*",
      "**/*.config.js",
      "**/*.config.mjs",
      "jest.config.ts",
      "jest.preset.js",
    ],
  },

  // Integración con Prettier (siempre debe ser la última para anular reglas de estilo)
  prettierConfig,
];

export default config;
