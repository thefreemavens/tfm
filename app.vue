
<template>
  <AppHeader />
  <AppMenu />
  <PageContainer>
    <NuxtPage />
  </PageContainer>
  <AppFooter/>
</template>

<script setup lang="ts">
// const menu = useMenu()
const nuxtApp = useNuxtApp()

nuxtApp.hook("page:finish", () => {
   window.scrollTo(0, 0)
})

useSeoMeta({
  title: 'The Free Mavens',
  description: 'Discover your true power and learn how to use it.',
  ogTitle: 'The Free Mavens',
  ogDescription: 'Discover your true power and learn how to use it.',
  ogType: 'website',
  ogUrl: 'https://thefreemavens.org',
  ogImage: '/tfm-og-img.webp',
  twitterTitle: 'The Free Mavens',
  twitterDescription: 'Discover your true power and learn how to use it.',
  twitterCard: 'summary_large_image',
  twitterSite: 'https://thefreemavens.org',
  twitterCreator: '@thefreemavens',
})

useHead({
  title: 'The Free Mavens',
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: './apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: './favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16x', href: './favicon-16x16.png' },
    { rel: 'icon', href: './favicon.ico' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#000000' },
  ],
  // bodyAttrs: {
  //   class: 'app' // used by Lenis plugin
  // },
  // script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
  //
  // meta: [
  //   { name: 'title', content: 'The Freemavens' },
  //   { name: 'description', content: 'Discover your true power and learn how to use it.' },
  //   { name: 'msapplication-TileColor', content: '#ffffff' },
  //   { name: 'theme-color', content: '#ffffff' },
  //   // Open Graph / Facebook
  //   { property: 'og:type', content: 'website' },
  //   { property: 'og:url', content: 'https://thefreemavens.org/' },
  //   { property: 'og:title', content: 'The Freemavens' },
  //   { property: 'og:description', content: 'Discover your true power and learn how to use it.' },
  //   { property: 'og:image', content: '/tfm-og-img.webp' },
  
  //   // Twitter
  //   { property: 'twitter:card', content: 'summary_large_image' },
  //   { property: 'twitter:url', content: 'https://thefreemavens.org/' },
  //   { property: 'twitter:title', content: 'The Freemavens' },
  //   { property: 'twitter:description', content: 'Discover your true power and learn how to use it.' },
  //   { property: 'twitter:image', content: '/tfm-og-img.webp' },
  // ],
})

</script>

<style lang="postcss">
body {
  @apply
    text-black dark:text-white
    bg-white dark:bg-black
    selection:text-white dark:selection:text-black
    selection:bg-black dark:selection:bg-white;
  }
  
/* Lenis */
/* html.lenis{height:auto}.lenis.lenis-smooth{scroll-behavior:auto}.lenis.lenis-smooth [data-lenis-prevent]{overscroll-behavior:contain}.lenis.lenis-stopped{overflow:hidden}.lenis.lenis-scrolling iframe{pointer-events:none} */
</style>
