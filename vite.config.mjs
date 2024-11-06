import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import autoprefixer from 'autoprefixer'

export default defineConfig(() => {
  return {
    base: '/membership/', // Use the repository name as the base path for GitHub Pages
    build: {
      outDir: 'build', // Ensure it builds to 'build' directory as you specified
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer({}), // Add options if needed
        ],
      },
      preprocessorOptions: {
        scss: {
          quietDeps: true,
        },
      },
    },
    esbuild: {
      loader: 'jsx',
      include: /src\/.*\.jsx?$/,
      exclude: [],
    },
    optimizeDeps: {
      force: true,
      esbuildOptions: {
        loader: {
          '.js': 'jsx',
        },
      },
    },
    plugins: [react()],
    resolve: {
      alias: [
        {
          find: 'src/',
          replacement: `${path.resolve(__dirname, 'src')}/`,
        },
      ],
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.scss'],
    },
    server: {
      port: 3000,
      proxy: {
        // Add any required proxy configuration here if needed
      },
    },
  }
})
