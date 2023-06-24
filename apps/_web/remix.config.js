/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  postcss: true,
  server: process.env['NODE_ENV'] === 'development' ? undefined : './server.ts',
  serverBuildPath: 'api/index.js',
  serverDependenciesToBundle: [/.*/],
  // appDirectory: 'app',
  // assetsBuildDirectory: 'public/build',
  // publicPath: '/build/',
  serverModuleFormat: 'cjs',
  watchPaths: async () => ['../../packages/diary-design-system/dist/index.js'],
  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
    v2_headers: true,
  },
}
