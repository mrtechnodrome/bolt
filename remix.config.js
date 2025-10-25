/** @type {import('@remix-run/dev').AppConfig} */
export default {
  serverBuildTarget: "vercel",
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  ignoredRouteFiles: ["**/.*"],
  publicPath: "/build/",
  // Use ESM server build format so `import.meta` and top-level await work correctly.
  serverModuleFormat: "esm",
  // Enable polyfills for Node builtin modules when bundling for the browser.
  browserNodeBuiltinsPolyfill: {
    modules: {
      buffer: true,
      process: true,
    },
  },
  future: {
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
    v2_meta: true,
  },
};