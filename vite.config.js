import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/dashboard_two/', // Set the base path for deployment
  build: {
    outDir: 'dist', // Output directory for build
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
});