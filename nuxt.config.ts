// Handle content routes
import { globSync } from "glob"
const routes = globSync('./content/**/*.md')
  .map(path => path.slice(7, -3).replace(/\d+\./g, '').replace(/\\/g, '/'))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  // app: {
  //   baseURL: '/tfm-web/'
  // },
  // ssr: false,
  experimental: {
    renderJsonPayloads: true,
    payloadExtraction: true
  },
  nitro: { 
    preset: 'static',
    serveStatic: true,
    prerender: {
      crawlLinks: true,
      failOnError: false,
      routes: [
        '/sitemap.xml',
        ...routes
      ]
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@formkit/nuxt'
  ],
  colorMode: {
    classSuffix: ''
  },
  content: {
    documentDriven: false,
    watch: {
      ws: {
        port: 4000,
      }
    }
  },
  formkit: {
    autoImport: true,
    configFile: './.configs/formkit.config.ts',
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    viewer: false
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => ['lite-youtube'].includes(tag)
    }
  }
})
