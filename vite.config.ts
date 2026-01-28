import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

// Plugin para procesar manifest.json y HTML con el base path correcto
function basePathPlugin() {
  const base = process.env.NODE_ENV === 'production' ? '/stronger' : ''
  
  return {
    name: 'base-path-plugin',
    transformIndexHtml(html: string) {
      return html.replace(/%BASE_URL%/g, base || '/')
    },
    writeBundle() {
      // Procesar manifest.json
      const manifestPath = join(__dirname, 'dist', 'manifest.json')
      try {
        const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'))
        manifest.start_url = `${base}/`
        manifest.icons = manifest.icons.map((icon: any) => ({
          ...icon,
          src: `${base}${icon.src}`
        }))
        writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))
      } catch (e) {
        console.warn('Could not process manifest.json:', e)
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), basePathPlugin()],
  base: process.env.NODE_ENV === 'production' ? '/stronger/' : '/',
})
