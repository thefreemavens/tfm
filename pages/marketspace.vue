<template>
  <main class="container mx-auto">

    <AppSection>
      <template #title>
        Marketspace
      </template>
      <template #desc>
        A space for all members to trade, offer, buy and sell products and services that help promotes the body of knowledge of 
        <NuxtLink class="border-b font-bold" to="/knowledge/main#natural-law">Natural Law</NuxtLink>, 
        <NuxtLink class="border-b font-bold" to="/knowledge/main#objective-morality">Objective Morality</NuxtLink>, 
        <NuxtLink class="border-b font-bold" to="/knowledge/the-law-of-freedom#true-freedom">True Freedom</NuxtLink>, and 
        <NuxtLink class="border-b font-bold" to="/knowledge/natural-law-expressions#_1-love-fear">Selfless Love</NuxtLink>.
      </template>
    </AppSection>

    <section class="mx-4">
      <ul class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap:8 xl:gap-9">
        <li class="lg:col-start-2 font-mono text-xs px-4 py-2 border">
          NOTE: All products listed are mockups for products which may or may not go into production.
        </li>
        <li v-for="(product, index) in clientProducts" :key="index" class="relative overflow-hidden cursor-pointer">
          <h2 class="font-mono text-2xs tracking-wider absolute z-10 bottom-2 left-3 dark:text-black">
            {{ product.puid }}
          </h2>
          <!-- <div @click="product.likes++" class="absolute bottom-1 right-2.5 z-10 text-xs font-mono flex items-center gap-0.5 rounded-sm pt-0.5 px-1 bg-black/0">
            <span class="font-mono text-base -mt-[2px]">♥</span> 
            {{ product.likes }}
          </div> -->
          <div
            class="

          ">
            <img :src="baseUrl + product.url"
              class="
                transition-all duration-200 ease-in-out
                hover:scale-105
            ">
          </div>
          <!-- <span
            class="hover:scale-105 transition-all duration-200 ease-in-out bg-cover"
            :style="{backgroundImage: `url(${baseUrl + product.url})`}"
            /> -->
          </li>
        </ul>
        <!-- <hr class="mt-12 mb-4"> -->
      <!-- {{ clientProducts  }}
      <hr class="my-4">
      {{ serverProducts.items }}
      <hr class="my-4"> -->
      <!-- {{ products }} -->
    </section>
  </main>
</template>

<script setup>
const { $pb } = useNuxtApp()
const baseUrl = '/img/market/'
const products = ref([])
const clientProducts = ref([
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
  {
    puid: 'TRNL-P05B',
    title: 'The Black Tote Bag',
    slug: '',  
    url: 'tfm-tote-bag-angle-black.webp'
  },
  {
    puid: 'TRNL-P05W',
    title: 'The White Tote Bag',
    slug: '',  
    url: 'tfm-tote-bag-front-white.webp'
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
])

// // fetch server records
// const serverProducts = ref(await $pb.collection('products').getList(1, 50))

// // Merge Client + Server records
// for(let i=0; i<clientProducts.value.length; i++) {
//   products.value.push({
//    ...clientProducts.value[i], 
//    ...(serverProducts.value.items.find((itmInner) => itmInner.puid === clientProducts.value[i].puid))}
//   );
// }

// onMounted(async () => {
//   // Subscribe to changes in any products record
//   await $pb.collection('products').subscribe('*', function (e) {
//       console.log(e.action)
//       console.log(e.record)
//       console.log('Hello world!')
//   })

// })



</script>

