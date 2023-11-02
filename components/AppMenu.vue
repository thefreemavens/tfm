<template>
  <ClientOnly>
    <div v-show="menu" class="container mx-auto px-2 z-40 fixed left-0 right-0 top-0 h-[100dvh]">
      <nav class="
        mx-2
        h-full
        bg-white/100
        dark:bg-black/100
        my-0
        py-10
        backdrop-filter
        backdrop-blur-[10px]
        --[@supports(backdrop-filter:blur(0px))]:bg-white/80
        --[@supports(backdrop-filter:blur(0px))]:dark:bg-grey-980/70
      ">

        <!-- <hr class="pt-6 mb-8 border-t-2 border-black"> -->

        <div class="grid overscroll-contain grid-cols-1 gap-2 mt-12 w-full sm:grid-cols-2 lg:grid-cols-4">

          <section class="flex justify-start items-start w-full h-full">
            <ul class="block mt-4 w-full tracking-wide">
              <li class="mb-2 text-xs font-bold uppercase sm:mb-4 lg:mb-6 text-grey-975 dark:text-white">Base</li>
              <li
                v-for="(menuItem, index) in menuItems1" :key="index"
                class="py-2 my-0"
              >
                <NuxtLink :to="menuItem.url" @click="menu = false" class="flex items-center py-1 text-sm transition-colors duration-100 ease-in-out group --font-mono --uppercase hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black">
                  <span class="flex-1">{{ menuItem.title }}</span>
                  <span class="mx-2 opacity-0 group-hover:opacity-100">--></span>
                </NuxtLink>
              </li> 
            </ul>
          </section>

          <section class="flex justify-start items-start w-full h-full">
            <ul class="block mt-4 w-full tracking-wide">
              <li class="mb-2 text-xs font-bold uppercase sm:mb-4 lg:mb-6 text-grey-975 dark:text-white">Main</li>
              <li
                v-for="(menuItem, index) in menuItems2" :key="index"
                class="py-2 my-0"
              >
                <NuxtLink :to="menuItem.url" @click="menu = false" class="flex items-center py-1 text-sm transition-colors duration-100 ease-in-out group --font-mono --uppercase hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black">
                  <span class="flex-1">{{ menuItem.title }}</span>
                  <span class="mx-2 opacity-0 group-hover:opacity-100">--></span>
                </NuxtLink>
              </li> 
            </ul>
          </section>

          <section class="flex justify-start items-start w-full h-full">
            <ul class="block mt-4 w-full tracking-wide">
              <li class="mb-2 text-xs font-bold uppercase sm:mb-4 lg:mb-6 text-grey-975 dark:text-white">Community</li>
              <li
                v-for="(menuItem, index) in menuItems3" :key="index"
                class="py-2 my-0"
              >
                <NuxtLink :to="menuItem.url" @click="menu = false" class="flex items-center py-1 text-sm transition-colors duration-100 ease-in-out group --font-mono --uppercase hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black">
                  <span class="flex-1">{{ menuItem.title }}</span>
                  <span class="mx-2 opacity-0 group-hover:opacity-100">--></span>
                </NuxtLink>
              </li> 
            </ul>
          </section>


          <section class="flex justify-start items-start w-full h-full">
            <ul class="block mt-4 w-full tracking-wide">
              <li class="mb-2 text-xs font-bold uppercase sm:mb-4 lg:mb-6 text-grey-975 dark:text-white">Members</li>
              <li
                v-for="(menuItem, index) in menuItemsMember" :key="index"
                class="py-2 my-0"
              >
                <NuxtLink :to="menuItem.url" @click="menu = false" class="flex items-center py-1 text-sm transition-colors duration-100 ease-in-out group --font-mono --uppercase hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black">
                  <span class="flex-1">{{ menuItem.title }}</span>
                  <span class="mx-2 opacity-0 group-hover:opacity-100">--></span>
                </NuxtLink>
              </li> 
            </ul>
          </section>
        </div>
        <hr class="mt-8 border-2">
        <div class="flex pt-1">
          <span class="flex-1 text-xs font-bold">
          thefreemavens.org
        </span>
        <span class="font-mono text-2xs">
        beta --> v{{ appConfig.version }}
        </span>
        </div>
      </nav>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
// import { useState, useCookie, useAppConfig, ref, computed, onMounted } from '#imports';

const menu = useState('menu', () => false)

// interface Maven {
//   model: any,
//   // CookieRef: object
// }
const maven = useCookie<any>('pb_auth', {sameSite: true})

const appConfig = useAppConfig()

// ------------------------------------------------>
// Menu Items

const menuItems1 = ref([
  {
    title: 'Home',
    url: '/'
    // slug: 'home',
  },
  {
    title: 'Freemavenry',
    url: '/freemavenry'
    // slug: 'freemavenry',
  },
  // {
  //   title: 'FAQ',
  //   url: '/faq'
    // slug: 'faq',
  // },
])

const menuItems2 = ref([
{
    title: 'Knowledge',
    url: '/knowledge/main'
    // slug: 'knowledge',
  },
  {
    title: 'Lessons',
    url: '/lessons/main'
    // slug: 'lessons',
  },
  {
    title: 'Challenges',
    url: '/challenges/main'
    // slug: 'challenges',
  },
  {
    title: 'Resources',
    url: '/resources/main'
    // slug: 'resources',
  },
  {
    title: 'Tools',
    url: '/tools/main'
    // slug: 'tools',
  },
])

const menuItems3 = ref([
  {
    title: 'Marketspace',
    url: '/marketspace'
    // slug: 'marketspace',
  }
])

const menuItemsLogout = ref([
  {
    title: 'Login',
    url: '/maven/login'
    // slug: 'login',
  },
  {
    title: 'Initiate',
    url: '/maven/initiation'
    // slug: 'init',
  }
  
])

const menuItemsLogin = ref([
  {
    title: 'My Account',
    url: '/maven/account'
    // slug: 'account',
  },
  // {
  //   title: 'Update Account',
  //   url: '/maven/account/update'
  //   // slug: 'update',
  // }
])

const menuItemsMember = computed(() => {
  return maven.value.model ? menuItemsLogin.value : menuItemsLogout.value
})

onMounted(() => {

  // Press ESC key to exit modal
  document.body.addEventListener('keyup', (e) => {
    if (e.key === 'Escape' && menu.value == true) {
      menu.value = false
    }
  })

})
</script>