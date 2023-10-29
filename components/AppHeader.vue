<template>
  <header
    class="
    bg-white/100 dark:bg-black/100
      container
      h-auto
      mx-auto
      fixed
      z-50
      top-0
      inset-x-0
      w-full
      flex
      gap-1
      justify-start
      items-center
      backdrop-filter
      backdrop-blur-[10px]
      [@supports(backdrop-filter:blur(0px))]:bg-white/80
      [@supports(backdrop-filter:blur(0px))]:dark:bg-black/80
  ">
    <!-- <AppLogomark class="w-12 h-12 mx-4 my-2 --rotate-[-30deg]"/> -->
    <!-- <div class="justify-self-start py-3 cursor-pointer --bg-red/20 ps-3.5 pe-1" @click="menu = !menu">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
        <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
        <path fill-rule="evenodd" d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
      </svg>
    </div> -->
    <!-- <NuxtLink to="/" @click="menu = false" class="py-2 ps-1 pe-2 --bg-red/20"> -->
      <!-- <AppIcon name="tfm" class="w-[52px] h-[30px]"/> -->
      <!-- <AppIcon name="tfm-s" class="w-[72px] h-[50px]"/> -->
      <!-- <AppLogotype class="w-[52px] h-auto" /> -->
    <!-- </NuxtLink> -->

    <NuxtLink to="/" @click="menu = false" class="p-0 my-3 ms-4">
      <AppLogomark class="w-11 h-11 text-indigo" />
    </NuxtLink>

    <!-- <h1 class="mx-4 text-2xl font-black">TFM</h1> -->
    <div class="flex absolute right-0 flex-row gap-1 items-center">
      <!-- <NuxtLink to="/maven/account" class="py-4 pe-4 ps-2" @click="menu = false">
        <div
        v-if="maven.model"
        class="overflow-hidden w-7 h-7 rounded-full">
          <img
          :src="'https://tfmbase.pockethost.io/api/files/' +  maven.model.collectionId + '/' + maven.model.id + '/' + maven.model.avatar + '?thumb=100x100'" alt="Avatar"
          class=""
          />
        </div>
        <div v-else class="w-6 h-6 bg-black rounded-full dark:bg-white" />
      </NuxtLink> -->

      <!-- <NuxtLink to="/freemavenry#init" @click="menu = false" class="px-4 py-1.5 font-mono text-xs text-white uppercase bg-black rounded-md me-4"> -->
      <ClientOnly>
        <NuxtLink v-if="!maven.model" to="/freemavenry#" @click="menu = false" class="px-2 py-1 font-mono text-xs uppercase border lg:px-3 me-4">
        --> Be a Maven
        </NuxtLink>
      </ClientOnly>

      <!-- {{ maven }} -->

      <AppColorModeButton class="--bg-red/20" />

      <div class="justify-self-start py-3 cursor-pointer ps-3.5 pe-4" @click="menu = !menu">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
          <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
          <!-- <path fill-rule="evenodd" d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" /> -->
        </svg>
      </div>

    </div>

  </header>
</template>

<script setup lang="js">
const menu = useState('menu', () => false)
// const maven = useState('maven')
// const maven = ref()
// const maven = useState('maven', () => '')
const maven = useCookie('pb_auth')

// const { $pb } = useNuxtApp()


// const maven = ref<any>({})

// onMounted(() => {
//   // maven.value = cookie.value
//   // $pb.authStore.onChange(() => {
//   //   maven.value = $pb.authStore.model  
//   // }, true)
// })

</script>