import { composePlugins, withNx } from "@nx/next";

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {},
  // Añada aquí cualquier otra configuración de Next.js que necesite
};

const plugins = [
  // Agregue más plugins de Next.js a esta lista si es necesario.
  withNx,
];

// Se exporta la composición de plugins
export default composePlugins(...plugins)(nextConfig);
