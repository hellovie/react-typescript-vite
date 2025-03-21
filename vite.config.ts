import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint2'

// https://vite.dev/config/
export default defineConfig({
    envDir: 'env',
    plugins: [
        react(),
        eslintPlugin({
            cache: false,
            include: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx']
        })
    ],
})
