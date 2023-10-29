<template>
  <main class="container relative mx-auto">

    <!-- Login / Logout -->
    <button v-if="maven" class="absolute top-4 right-4 px-2 py-1 text-xs font-bold text-white uppercase bg-black rounded dark:text-black dark:bg-white" type="button" @click="logout">
      Logout
    </button>

    <!-- IF User-->
    <AppSection v-if="maven" class="md:pb-0 lg:pb-0">
      <template #title>
        New Avatar,<br>
        <!-- {{ maven.name.split(' ')[0] }} -->
      </template>
      <template #desc>
        Welcome back
      </template>

      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6 lg:gap:8 xl:gap-9">
        <!-- <p class="px-4 py-2 font-mono text-xs border lg:col-start-2">
          Your profile page is in development, please come back soon.
        </p>

        <img
        :src="'https://tfmbase.pockethost.io/api/files/' +  maven.collectionId + '/' + maven.id + '/' + maven.avatar + '?thumb=100x100'" alt="Avatar"
        class=""
        /> -->
        <form @submit.prevent="updateAvatar()" class="my-2 flex" enctype="multipart/form-data">
          <h3 class="py-4 block font-bold"> Update Profile Picture</h3>
            <!-- <label for="avatar" class="w-24 h-24 block cursor-pointer rounded-full overflow-hidden"> -->
              <!-- <div class="rounded-full w-full h-full">
                <img src="https://picsum.photos/100" class=""/>
              </div> -->
            <!-- </label> -->
            <!-- <input type="file" name="avatar" value="" accept="image/*" @change="handleUploadfile()" ref="file" hidden> -->

            <div class="relative">

              <label class="w-28 h-28 p-0 absolute top-0 flex justify-center items-center" for="file_input">
                <label for="avatar" class="z-10 top-20 right-2 w-8 h-8 flex justify-center items-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                  <AppIcon name="hero-pen" class="w-4 h-4 absolute" />
                </label>
                <img :src="newAvatar" class="w-full h-full rounded-full block border-black border-4"/>
              </label>

              <input class="absolute top-0 w-28 h-28 rounded-full cursor-pointer opacity-0" id="file_input" type="file" @change="handleUploadfile()">
            </div>
            <button type="submit" class="mt-24">Submit</button>
        </form>
      </div>
      <!-- {{ newAvatar }} -->
    </AppSection>


  </main>
</template>

<script setup>
const { $pb } = useNuxtApp()
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

const newAvatar = ref('https://picsum.photos/100')

function handleUploadfile () {
  newAvatar.value = file.files[0]
}

const updateAvatar = async () => {
  const data = new FormData()
  data.append('avatar', newAvatar.value); // newAvatar must be File or Blob instance
  await $pb.collection('users').update($pb.authStore.model.id, data)
  console.log(data)
}

</script>
