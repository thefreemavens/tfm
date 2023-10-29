<template>
  <main class="container mx-auto">

    <AppSection>
      <template #title>
        Knowledge<br>Base
      </template>
      <template #desc>
        As a whole, the body of knowledge presented here has the potential to save humanity from our
        current state of slavery. 
      </template>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6 lg:gap:8 xl:gap-9">
        <NuxtLink
          to="/knowledge/main"
          class="
            lg:col-start-2
            py-2
            rounded-sm
            dark:bg-white
            dark:text-black
            bg-black text-white
            uppercase
            font-bold
            text-sm
            text-center
            tracking-tight
            [word-spacing:2px]
        ">
          View Knowledge Base
        </NuxtLink>
      </div>
      </AppSection>

    <section class="mx-4">
      <ul class="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6 lg:gap:8 xl:gap-9">

      </ul>
    </section>
  </main>
</template>

<script setup>
// const baseUrl = './img/market/'
</script>

