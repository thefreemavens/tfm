<template>
  <section class="mx-4 border-t pt-8 pb-8 lg:pt-12 lg:pb-20">
    <div
      :class="[layout == 'grid3' ? 'lg:grid-cols-3' : 'lg:grid-cols-2']"
      class="
        grid
        grid-cols-1 lg:grid-cols-2
        gap-8
    ">
      <!-- :class="[layout == 'grid3' ? 'lg:col-span-1' : 'lg:grid-cols-1']" -->
      <h2
        class="
          py-0 mb-4 md:mb-10
          flex flex-col
          text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
          font-bold
          tracking-tighter
      ">
        <slot name="title"/>
      </h2>
      <h3
        :class="[layout == 'grid3' ? 'lg:col-span-2' : 'lg:grid-cols-1']"
        class="
        text-xl md:text-2xl lg:text-3xl
        mb-12
        border-b-0
        lg:border-b
        lg:pb-20
        tracking-tight
        leading-normal md:leading-normal lg:leading-normal
      ">
        <span class="mb-4 md:mb-8 block">---></span>
        <slot name="desc"></slot>
        <!-- Introducing <span class="font-bold">Picons</span> (<span class="italic">Principles + Icons</span>), 
        a set of eight thoughtout and crafted open-source and free-to-use icons that visually represnt the eight
        immutable principles of Natural Law<sup class="inline-block text-sm relative -top-3 start-1">🡵</sup>. -->
      </h3>
    </div>
    <slot />
  </section>
</template>

<script setup>
const props = defineProps({
  layout: {
    type: String,
    default: 'grid2' // or 'grid3' for short titles like "Picons"
  },
})

</script>