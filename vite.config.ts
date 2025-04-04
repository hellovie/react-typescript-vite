import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint2'
import stylelintPlugin from 'vite-plugin-stylelint'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  return {
    envDir: 'env',
    css: {
      modules: {
        localsConvention: 'camelCase'
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    plugins: [
      react(),
      isDev && eslintPlugin({
        fix: false,
        cache: false,
        include: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx']
      }),
      isDev && stylelintPlugin({
        fix: false,
        cache: false,
        include: ['**/*.css', '**/*.scss']
      })
    ].filter(Boolean)
  }
})
