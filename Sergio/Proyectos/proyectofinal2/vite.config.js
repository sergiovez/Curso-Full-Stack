import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    host: true,
    watch: { usePolling: true },
  },
  base: "./",
  build: {
    outDir: 'docs', // Cambiado a 'docs' para GitHub Pages
    emptyOutDir: true,
    rollupOptions: {
    },
  },
});