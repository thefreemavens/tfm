<template>
  <!-- 1/2 circle -->
  <div class="relative rotate-90 bg-black/5">
    <span class="scale-75 origin-bottom flex w-[100%] h-[50%] rounded-tl-full rounded-tr-full bg-black absolute translate-y-full" />
  </div>

  <!-- 1/2 circle opposite -->
  <div class="relative rotate-90 bg-black/5">
    <span class="scale-75 origin-top flex w-[100%] h-[50%] rounded-bl-full rounded-br-full bg-black absolute" />
  </div>

  <!-- Corner 45 -->
  <div
    class="
      relative
      before:content-['']
      before:absolute
      before:z-10
      before:bottom-0 before:right-0
      before:border-b-[50px] before:border-b-white
      before:border-l-[50px] before:border-l-transparent
      before:w-0
  "/>
</template>