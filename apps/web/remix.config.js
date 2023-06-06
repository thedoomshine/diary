/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  server: process.env['NODE_ENV'] === 'development' ? undefined : './server.ts',
  serverBuildPath: 'api/index.js',
  // appDirectory: 'app',
  // assetsBuildDirectory: 'public/build',
  // publicPath: '/build/',
  serverModuleFormat: 'cjs',
  // watchPaths: async () => ['./node_modules/@diary/design-system/index.js'],
  watchPaths: async () => [
    '../../packages/diary-design-system/dist/index.d.ts',
  ],
  // devServerBroadcastDelay: 2000,
  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
}
