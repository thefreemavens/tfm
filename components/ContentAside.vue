
<template>
  <aside class="sticky top-16 pt-2 --border-t-4">

    <!-- Table of Contents -->
    <!-- <h3 class="pb-4 text-sm font-bold">Table of contents</h3>
    <ul class="pb-6 text-xs">
      <li v-for="link in toc.links" :key="link.text" class="py-0.5">
        <a :href="`#${link.id}`" class="block px-2 py-0.5 rounded-sm transition-colors duration-200 --relative bg-black/0 hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white hover:duration-100">
          {{ link.text }}
        </a>
      </li>
    </ul> -->
    
    <div class="flex flex-col gap-2">
    <!-- Adspace [DEMO Square with a random product] -->
      <NuxtLink 
        to="/marketspace"
        class="flex justify-center items-center w-full text-xs bg-center bg-cover aspect-square bg-black/10 dark:bg-white/10"
        :style="{ backgroundImage: `url(${ baseUrl + product.url})`}"
        >
      </NuxtLink>
    </div>
    
  </aside>
</template>

<script setup lang="ts">
  // const { toc } = useContent()
  const baseUrl = './../img/market/'
  
  const products = [
    {
    puid: 'TRNL-P01B',
    title: 'The Black Notebbok',
    slug: 'notebook',  
    url: 'tfm-notebook-angle-left-black.webp'
  },
  {
    puid: 'TRNL-P01W',
    title: 'The White Notebook',
    slug: '',  
    url: 'tfm-notebook-angle-left-white.webp'
  },
  {
    puid: 'TRNL-P02B',
    title: 'The Black Mousepad',
    slug: '',  
    url: 'tfm-mousepad-angle-black.webp'
  },
  {
    puid: 'TRNL-P02W',
    title: 'The White Mousepad',
    slug: '',  
    url: 'tfm-mousepad-top-white.webp'
  },
  {
    puid: 'TRNL-P00B',
    title: 'The Black Wristband',
    slug: '',  
    url: 'tfm-wristband-double-black-white.webp'
  },
  {
    puid: 'TRNL-P00W',
    title: 'The Black Wristband',
    slug: '',  
    url: 'tfm-wristband-trio-black-white-gray-float.webp'
  },
  {
    puid: 'TRNL-P04B',
    title: 'The Black Hoodie',
    slug: 'hoodie',
    url: 'tfm-hoodie-black-nl-new-black.webp'
  },
  {
    puid: 'TRNL-P04W',
    title: 'The White Hoodie',
    slug: '',  
    url: 'tfm-hoodie-white-nl-new-black.webp'
  },
  {
    puid: 'TRNL-P03B',
    title: 'The Black TShirt',
    slug: '',  
    url: 'tfm-tshirt-black-new-black.webp'
  },
  {
    puid: 'TRNL-P03W',
    title: 'The White TShirt',
    slug: '',  
    url: 'tfm-tshirt-white-new-black.webp'
  },
  // {
  //   title: '',
  //   slug: '',  
  //   url: 'tfm-wristband-mucho.webp'
  // },
  // {
  //   title: '',
  //   slug: '',  
  //   url: 'tfm-wristband-single-black-float.webp'
  // },
  // {
  //   title: '',
  //   slug: '',  
  //   url: 'tfm-wristband-single-black.webp'
  // },
  // {
  //   title: '',
  //   slug: '',  
  //   url: 'tfm-wristband-single-white-float.webp'
  // },
  // {
  //   title: '',
  //   slug: '',  
  //   url: 'tfm-wristband-trio-black-white-white.webp'
  // },
  ]

  const product = products[Math.floor(Math.random()*products.length)];

</script>
