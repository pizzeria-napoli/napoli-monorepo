// eslint.config.mjs

import nxPlugin from "@nx/eslint-plugin";

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 * @description
 * Configuración ESLint raíz para el monorepo.
 * Su única responsabilidad es gestionar las reglas de todo el espacio de trabajo,
 * como las fronteras entre módulos de Nx.
 * Las configuraciones específicas de proyectos (React, Next.js) se gestionan
 * en los archivos eslint.config.mjs de cada proyecto.
 */
const rootConfig = [
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
