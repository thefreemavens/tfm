<template>
  <ul class="nav lg:pe-3">
    <li v-for="(item, index) in navigationTree" :key="index" class="py-0.5">
      <!-- <div class=""> -->
        <div v-if="item.children" class="block relative p-1 font-bold cursor-pointer group z-10" @click="showChildren = !showChildren">
          {{ item.title }}
          <span class="flex absolute right-0 top-2 justify-center items-center w-5 h-5 text-xl font-thin rounded-sm lg:right-3 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black">
            <span class="flex -mt-0.5">{{ showChildren? '-' : '+'}}</span>
          </span>
        </div>
        <NuxtLink
          v-else
          :to="item._path"
          class="block px-2 py-1 text-xs rounded-sm transition-colors duration-200 --relative bg-black/0 hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white hover:duration-100">
          {{ item.title }}
        </NuxtLink>
      <!-- </div> -->
      <ContentNavigation v-if="item.children && showChildren" :navigation-tree="item.children" class="sub-nav" />
    </li>
  </ul>
</template>

<script setup>
defineProps({
  navigationTree: {
    type: Array,
    default: () => []
  },
  showChildren: {
    type: Boolean,
    default: false
  },
})

// const showChildren = ref({
//   type: Boolean,
//   default: false
// })

</script>

<style scoped lang="postcss">
.nav li {
  list-style-type: '';
}

.nav ul {
  @apply ms-2;
  /* margin-left: .2rem; */
}

a.router-link-exact-active {
@apply bg-black text-white dark:bg-white dark:text-black
}
</style>
