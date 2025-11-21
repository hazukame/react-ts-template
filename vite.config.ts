import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: 'react',
    }),
  ],

  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: 'lightningcss',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        inlineDynamicImports: true,
      },
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false,
      },
    },
    reportCompressedSize: false,
    sourcemap: false,
    chunkSizeWarningLimit: 2000,
    cssCodeSplit: false,
  },

  server: {
    port: 5173,
    hmr: true,
  },

  optimizeDeps: {
    include: ['react/jsx-runtime', 'react', 'react-dom', 'react-router-dom', 'lucide-react'],
    force: false,
  },

  cacheDir: 'node_modules/.vite',
});
