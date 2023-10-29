<template>
  <div class="font-mono text-xs px-2 py-1 border leading-relaxed inline-block mb-8">
    TODO: <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>

<style scoped>
a {
  /* @apply bg-black text-white dark:bg-white dark:text-black mx-1 px-2 */
  @apply border-b
}
</style>