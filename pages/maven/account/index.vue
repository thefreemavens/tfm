<template>
  <main class="container relative mx-auto">
    <ClientOnly>
    <!-- IF User-->
    <AppSection v-if="maven" class="md:pb-0 lg:pb-0">
      <template #title>
        Hello,<br>
        {{ maven.name.split(' ')[0] }}
      </template>
      <template #desc>
        Welcome back
      </template>

      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6 lg:gap:8 xl:gap-9">        
        <div class="lg:col-start-2">

          <!-- <div class="aspect-video bg-black rounded-3xl"> -->
            
          <!-- </div> -->
          <div class="my-4 flex flex-col space-y-4">
            <div class="w-full flex flex-col">
              <div class="flex-1">
                <div class="flex items-center">
                  <h4 class="text-xl font-bold flex-1">Personal Info</h4>
                  <NuxtLink to="/maven/account/update" class="uppercase font-bold text-xs rounded px-2 py-1 me-4 bg-black text-white dark:bg-white dark:text-black">Update</NuxtLink>
                  <button v-if="maven" class="px-2 py-1 text-xs font-bold text-white uppercase bg-black rounded dark:text-black dark:bg-white" type="button" @click="logout">
                    Logout
                  </button>
                </div>
                <ul class="mt-2 text-gray-700">
                    <li class="flex border-y py-2">
                        <span class="font-bold w-32">Full Name:</span>
                        <span class="">{{ maven.name }}</span>
                    </li>
                    <li class="flex border-b py-2">
                        <span class="font-bold w-32">Username:</span>
                        <span class="">{{ maven.username }}</span>
                    </li>
                    <li class="flex border-b py-2">
                      <span class="font-bold w-32">Telegram:</span>
                      <span class="">{{ maven.telegram }}</span>
                    </li>
                    <!-- <li class="flex border-b py-2">
                      <span class="font-bold w-32">X:</span>
                      <span class="">{{ maven.x }}</span>
                    </li> -->
                    <li class="flex border-b py-2">
                      <span class="font-bold w-32">Email:</span>
                      <span class="">{{ maven.email }}</span>
                    </li>
                    <li class="flex border-b py-2">
                      <span class="font-bold w-32">Location:</span>
                      <span class=""></span>
                    </li>
                    <li class="flex border-b py-2">
                        <span class="font-bold w-32">Joined:</span>
                        <span class="">{{ new Date(maven.created).toDateString() }}</span>
                    </li>
                    <li class="flex border-b py-2">
                        <span class="font-bold w-32">Updated:</span>
                        <span class="">{{ new Date(maven.updated).toDateString() }}</span>
                    </li>
                    <!-- <li class="flex border-b py-2">
                        <span class="font-bold w-32">Languages:</span>
                        <span class="">English, Spanish</span>
                    </li> -->
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p class="px-4 py-2 font-mono text-xs border lg:col-start-2">
          Your profile page is in development, please come back soon.
        </p>
      </div>

      <!-- {{ currentUser }} -->
      <!-- <p class="block mb-4">
        {{ $pb.authStore }}
      </p> -->
      
      <!-- {{  $pb.authStore.isValid }} -->

    </AppSection>
  </ClientOnly>

    <!-- <NuxtLink to="/maven/account/update">Update</NuxtLink> -->
  </main>
</template>

<script setup>
const { $pb } = useNuxtApp()

// const currentUser = ref('')
const maven = useState('maven', () => '')

definePageMeta({
  middleware: 'auth'
})

const logout = () => {
  $pb.authStore.clear()
  maven.value = null
  navigateTo('/maven/login')
}


onMounted(() => {
  $pb.authStore.onChange(() => {
    maven.value = $pb.authStore.model  
  }, true)
})

</script>
