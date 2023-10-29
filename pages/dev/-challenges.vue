<template>
  <main class="container mx-auto">

    <AppSection>
      <template #title>
        Challenges
      </template>
      <template #desc>
        Track your learning progress and level of undersatnding.
      </template>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6 lg:gap:8 xl:gap-9">
        <NuxtLink
          to="/challenges/main"
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
          View Challenges
        </NuxtLink>
      </div>
    </AppSection>

    <section class="mx-4">
      <ul class="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 lg:gap:8 xl:gap-9">
        <li class="border aspect-square flex justify-center items-center opacity-20">TBD</li>
        <li class="border aspect-square flex justify-center items-center opacity-20">TBD</li>
        <li class="border aspect-square flex justify-center items-center opacity-20">TBD</li>
        <li class="border aspect-square flex justify-center items-center opacity-20">TBD</li>
        <li class="border aspect-square flex justify-center items-center opacity-20">TBD</li>
        <li class="border aspect-square flex justify-center items-center opacity-20">TBD</li>
        <li class="border aspect-square flex justify-center items-center opacity-20">TBD</li>
        <li class="border aspect-square flex justify-center items-center opacity-20">TBD</li>

      </ul>
    </section>
  </main>
</template>