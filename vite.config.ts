import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import packageJson from './package.json';

export default defineConfig({
  base: "/",
  // build: {
    // outDir: 'output',
    // assetsDir: 'assets',
    // minify: true,
    // sourcemap: false,
  // },
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
  },
  server: {
    port: 3000,
  },
  plugins: [react()],
});
