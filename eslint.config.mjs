// eslint.config.mjs (Archivo en la raíz del monorepo)

import nxPlugin from "@nx/eslint-plugin";

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 * @description
 * Configuración ESLint raíz para el monorepo.
 * Su única responsabilidad es gestionar las reglas de todo el espacio de trabajo
 * y definir qué archivos de configuración de la raíz deben ser ignorados.
 */
const rootConfig = [
  // NIVELACIÓN SOBERANA Y DEFINITIVA: Se ignora explícitamente a sí mismo y a otros
  // archivos de configuración de la raíz para evitar conflictos de análisis.
  {
    ignores: ["jest.config.ts", "jest.preset.js"],
  },
  {
    plugins: {
      "@nx": nxPlugin,
    },
  },
  {
    // Las reglas de boundaries de Nx se aplican a los archivos de código fuente
    // para asegurar que las dependencias entre proyectos son correctas.
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@nx/enforce-module-boundaries": [
        "error",
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            {
              sourceTag: "*",
              onlyDependOnLibsWithTags: ["*"],
            },
          ],
        },
      ],
    },
  },
];

export default rootConfig;
