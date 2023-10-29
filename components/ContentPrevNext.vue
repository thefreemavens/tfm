<template>
  <div class="grid grid-cols-2 mt-16 mb-4 text-xs font-bold border-t">
    <NuxtLink v-if="prev" :to="prev._path" class="justify-self-start pt-4 w-auto border-t-1">{{ prev.title }}<span class="block pt-2">{{ arrowLeft }}</span></NuxtLink>
    <div v-else />
    <NuxtLink v-if="next" :to="next._path" class="justify-self-end pt-4 w-auto text-right border-t-1">{{ next.title }}<span class="block pt-2">{{ arrowRight }}</span></NuxtLink>
    <div v-else />
  </div>
</template>
  
<script setup lang="ts">
const { prev, next } = useContent()
const arrowLeft = '<--'
const arrowRight = '-->'
</script>
