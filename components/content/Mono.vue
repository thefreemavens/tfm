<template>
  <div class="font-mono text-xs px-4 py-3 border leading-relaxed mb-8">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>

<style scoped lang="postcss">
a {
  /* @apply bg-black text-white dark:bg-white dark:text-black mx-1 px-2 */
  @apply border-b
}
</style>