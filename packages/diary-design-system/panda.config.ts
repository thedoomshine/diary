import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  emitPackage: true,
  exclude: [],
  theme: {
    extend: {},
  },
  outdir: 'dist',
})
