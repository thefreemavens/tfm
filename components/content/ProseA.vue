<template>
  <NuxtLink
    :href="href"
    :target="target"
    class="border-b hover:border-b-0"
  >
    <slot />
    <!-- <sup class="inline-block text-2xs relative start-0.5 -top-1 pe-0.5">&#10132;</sup> -->
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: undefined,
    required: false
  }
})
</script>