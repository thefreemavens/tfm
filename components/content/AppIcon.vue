<template>
  <!-- Base -->
  <svg
    class="fill-current">
    <use v-bind="{'xlink:href': url + '#' + name }" />
  </svg>
</template>

<script setup lang="ts">
import svgUrl from '~/assets/svg/icons.svg'

const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    default: svgUrl
  },
  // desc: {
  //   type: String,
  //   default: 'Picon'
  // },
  // size: {
  //   type: String,
  //   default:'w-12 h-12'
  // },
  // color: {
  //   type: String,
  //   base: 'text-grey-975 dark:text-white',
  //   outline: 'stroke-white dark:stroke-white',
  //   default: 'text-white dark:text-grey-975',
  // },
  // background: {
  //   type: String,
  //   base: 'bg-white dark:bg-grey-975',
  //   default: 'bg-grey-975 dark:bg-white'
  // },
  // variation: {
  //   type: String,
  //   default: 'solid' // base, solid, outline, invert, shadow
  // },
  // depth: {
  //   type: String,
  //   default: 'z-0'
  // },
  // blur: {
  //   type: String,
  //   default: 'blur-[0px]'
  // },
  // glow: {
  //   type: String,
  //   default: 'blur-xl'
  // },
  // position: {
  //   type: String,
  //   default: 'inset-0'
  // },
  // shadow: {
  //   type: String,
  //   default: 'shadow-2xl'   
  // },
  // strokeWidth: {
  //   type: String,
  //   default: 'stroke-[54]'
  // },
  // custom: {
  //   type: String,
  //   default: ''
  // }
})
</script>