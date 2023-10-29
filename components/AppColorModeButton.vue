<script setup>
import svgUrl from '~/assets/svg/icons.svg'

const colorMode = useColorMode()

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

</script>

<template>
  <!-- <ClientOnly> -->
    <div class="flex relative">
      <button
        :class="{ 'rotate-[180deg]': isDark, 'rotate-0': !isDark }"
        class="transition-transform duration-200 ease-out p-2 --bg-red/20"
        @click="isDark = !isDark"
      >
        <AppIcon name="CustomColorMode" class="w-5 h-5 text-black dark:text-white" />
      </button>
    </div>
  <!-- </ClientOnly> -->
</template>
