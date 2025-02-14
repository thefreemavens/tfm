<template>
  <main class="container mx-auto">

    <AppSection>
      <template #title>
        Be a Maven
      </template>
      <template #desc>
        <NuxtLink to="/knowledge/discovery-vs-belief" class="border-b font-bold">Discover</NuxtLink> 
        your true power and 
        <NuxtLink to="/knowledge/teachability" class="border-b font-bold">learn</NuxtLink> 
        how to 
        <NuxtLink to="/knowledge/the-lost-word " class="border-b font-bold">use</NuxtLink> 
        it
      </template>

      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6 lg:gap:8 xl:gap-9">
        <div class="w-full h-full">
          <svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 546 546"
            class="
              w-52 h-52 md:w-64 md:h-64 xl:w-80 xl:h-80
              stroke-[10] fill-none
            stroke-black dark:stroke-white
            mx-auto mb-12 mt-4 lg:ms-0
            ">
            <!-- text-black/100 dark: text-black/100 -->
            <ellipse class="sol-ment oval oval-sm fill-none" rx="128" ry="128" cx="273" cy="273"/>
            <ellipse class="sol-corr oval oval-sm fill-none" rx="128" ry="128" cx="273" cy="145"/>
            <ellipse class="sol-vibr oval oval-sm fill-none" rx="128" ry="128" cx="384" cy="209"/>
            <ellipse class="sol-pola oval oval-sm fill-none" rx="128" ry="128" cx="384" cy="337"/>
            <ellipse class="sol-rhyt oval oval-sm fill-none" rx="128" ry="128" cx="273" cy="401"/>
            <ellipse class="sol-caus oval oval-sm fill-none" rx="128" ry="128" cx="162" cy="337"/>
            <ellipse class="sol-gend oval oval-sm fill-none" rx="128" ry="128" cx="162" cy="209"/>
            <ellipse class="sol-care oval oval-lg fill-none" rx="256" ry="256" cx="273" cy="273"/>

          </svg>
        </div>

        <div>
          <p class="mb-12 leading-relaxed">
            <span class="block pb-3 text-xl font-bold tracking-tight me-1 md:text-2xl">Start Your Journey</span> 
            Becoming a Free Maven is like going on a journey. It requires will, dedication and courage. From joining as an Entered Maven, it typically takes a few months to become a Master Maven, with each of the three stages marked by a special acknowledgment. 
          </p>
          <button
          @click="$router.push('/maven/initiation')"
          type="button"
          class="px-4 py-2.5 mt-2 w-full text-sm font-bold text-center text-white uppercase rounded bg-grey-975 dark:bg-white dark:text-grey-975 lg:text-base">
          Become a founding member
        </button>
        <p class="px-4 py-2 mt-8 mb-16 font-mono text-xs border">
          <!-- <b class="block pb-3 text-xl tracking-tight me-1 md:text-2xl">Relief</b>  -->
          Membership is open to all men and women of integrity who can fulfill the following essential qualifications:   
        </p>
        </div>
      </div>
    </AppSection>

    <AppSection>
      <template #title>
        Freemavenry
      </template>
      <template #desc>
        The essential qualifications for admission are abiding by our collective 
        <NuxtLink to="#Principles" class="border-b font-bold">Principles</NuxtLink>, 
        understanding 
        <NuxtLink to="/knowledge/main" class="border-b font-bold">The Real Natural Law</NuxtLink> 
        and 
        <NuxtLink to="/knowledge/the-great-work/#" class="border-b font-bold">Applying</NuxtLink>
        it in real life.
      </template>

      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6 lg:gap:8 xl:gap-9">
        <div class="w-full h-full">
          <!-- <svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 546 546"
            class="
              w-40 h-40 md:w-56 md:h-56 xl:w-72 xl:h-72 mb-8
              stroke-[20] fill-none
            stroke-black dark:stroke-white
            ">
            <ellipse class="sol-ment oval oval-sm fill-none" rx="128" ry="128" cx="273" cy="273"/>
            <ellipse class="sol-corr oval oval-sm fill-none" rx="128" ry="128" cx="273" cy="145"/>
            <ellipse class="sol-vibr oval oval-sm fill-none" rx="128" ry="128" cx="384" cy="209"/>
            <ellipse class="sol-pola oval oval-sm fill-none" rx="128" ry="128" cx="384" cy="337"/>
            <ellipse class="sol-rhyt oval oval-sm fill-none" rx="128" ry="128" cx="273" cy="401"/>
            <ellipse class="sol-caus oval oval-sm fill-none" rx="128" ry="128" cx="162" cy="337"/>
            <ellipse class="sol-gend oval oval-sm fill-none" rx="128" ry="128" cx="162" cy="209"/>
            <ellipse class="sol-care oval oval-lg fill-none" rx="256" ry="256" cx="273" cy="273"/>

          </svg> -->
        </div>

        <div>
          <p class="mb-12 leading-relaxed">
            <span class="block pb-3 text-xl font-bold tracking-tight me-1 md:text-2xl">Freemavenry</span> Freemavenry is a voluntary, non-religious, non-political, fraternal and benevolent collective 
            of creators, not workers. Our roots lie in the search for eternal truth and the spread of knowledge in the areas of metaphysics, occultism, 
            spirituality, symbology and human consciousness. 
          </p>

          <p class="leading-relaxed">
            <span class="block pb-3 text-xl font-bold tracking-tight me-1 md:text-2xl">The Free Mavens</span> TFM promotes the great body of knowledge of Natural Law, so that
            people all over the world can gain a better understanding of the causal factors and the real issues we are faced in the world today
            in effort to feed a desire to help and to create a reality that is based in truth, morality, love and freedom;
            <span class="line-through">Not lies, immorality, fear and slavery.</span>
          </p>
        </div>
      </div>
    </AppSection>

    <!-- <section class="py-12 mx-4 my-12 border-t lg:pt-12 lg:pb-20">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6 lg:gap:8 xl:gap-9">
        <h4 class="col-span-1 mb-6 text-4xl font-bold tracking-tight lg:col-span-2 sm:text-5xl md:text-5xl lg:text-6xl">Definitions</h4>

        <div class="col-start-1 lg:col-start-2">
          <p class="mb-4">
            <b class="block pb-3 text-xl tracking-tight me-1 md:text-2xl">Free</b> 
            The word Free means not under the control or in the power of another; 
            able to act or be done as one wishes. 
          </p>
          <p class="mt-8 mb-4">
            <b class="block pb-3 text-xl tracking-tight me-1 md:text-2xl">Maven</b> 
            The word Maven derives from the Yiddish word Meyvn, meaning "one who understands." 
            To be a Maven one have to know the ins and outs of a topic. Often Mavens are the people that we turn to 
            as experts in a field. You don't become a Maven overnight. That kind of expertise and understanding 
            comes with an accumulation of knowledge over the years. 
          </p>
        </div>
      </div>
    </section> -->

    <section class="grid grid-cols-1 gap-8 py-12 mx-4 my-12 border-t lg:pt-12 lg:pb-20 lg:grid-cols-3 lg:gap-10 xl:gap-12">
      <h4 id="Principles" class="flex flex-col col-span-1 py-0 mb-4 text-5xl font-bold tracking-tighter lg:col-span-3 md:mb-10 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Principles</h4>
        <p class="mb-8">
          <div class="--lg:border">
            <AppIcon name="tetrahedron" class="scale-[61.803%] aspect-video lg:aspect-square w-full h-full fill-none stroke-current stroke-[8px]" />
          </div>
          <b class="block pb-4 text-3xl tracking-tight md:pb-6 md:text-4xl">Truth</b> 
          Freemavenry strives for the singular and objective truth and requires high moral standards of all our members and friends. 
        </p>
        <p class="mb-8">
          <div class="--lg:border">
            <AppIcon name="polyhedron" class="scale-[61.803%] aspect-video lg:aspect-square w-full h-full fill-none stroke-current stroke-[8px]" />
          </div>
          <b class="block pb-4 text-3xl tracking-tight md:pb-6 md:text-4xl">Love</b> 
          The Selfless kind. Every member will show tolerance and respect for others and behave 
          with kindness and understanding to his fellow beings.  
        </p>
        <p class="mb-8">
          <div class="--lg:border">
            <AppIcon name="icosahedron" class="scale-[61.803%] aspect-video lg:aspect-square w-full h-full fill-none stroke-current stroke-[8px]" />
          </div>
          <b class="block pb-4 text-3xl tracking-tight md:pb-6 md:text-4xl">Care</b> 
          Freemavens are taught to practice charity, and to care, not only for their own members, but for the community as a whole, 
          by charitable giving, voluntary effort and taking actions.  
        </p>
    </section>

    <section class="grid grid-cols-1 gap-8 py-12 mx-4 my-12 border-t lg:pt-12 lg:pb-20 lg:grid-cols-3 lg:gap-10 xl:gap-12">
      <h4 id="Principles" class="flex flex-col col-span-1 py-0 mb-4 text-5xl font-bold tracking-tighter lg:col-span-3 md:mb-10 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Definitions</h4>
        <p class="mb-8 lg:col-start-2">
          <div class="--lg:border">
            <AppIcon name="f" class="w-full h-full scale-[61.803%] aspect-video lg:aspect-square fill-none" />
          </div>
          <b class="block pb-4 text-3xl tracking-tight md:pb-6 md:text-4xl">Free</b> 
            The word Free means not under the control or in the power of another; 
            able to act or be done as one wishes. 
        </p>
        <p class="mb-8">
          <div class="--lg:border">
            <AppIcon name="m" class="w-full h-full scale-[61.803%] aspect-video lg:aspect-square fill-none" />
          </div>
          <b class="block pb-4 text-3xl tracking-tight md:pb-6 md:text-4xl">Maven</b> 
            The word Maven derives from the Yiddish word Meyvn, meaning "one who understands." 
            To be a Maven one have to know the ins and outs of a topic. Often Mavens are the people that we turn to 
            as experts in a field. You don't become a Maven overnight. That kind of expertise and understanding 
            comes with an accumulation of knowledge over the years. 
        </p>
    </section>

    <!-- <section id="init" class="py-12 mx-4 border-t lg:pt-12 lg:pb-20">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6 lg:gap:8 xl:gap-9">
        <h4 class="mb-6 text-4xl font-bold tracking-tight lg:col-span-2 sm:text-5xl md:text-5xl lg:text-6xl">Be a Maven</h4>
        <div class="lg:col-start-2">
          <p class="mb-4">
            <b class="block pb-8 text-xl tracking-tight me-1 md:text-2xl">Start Your Journey</b> 
            Becoming a Free Maven is like going on a journey. It requires will, dedication and courage. From joining as an Entered Maven, it typically takes 
            a few months to become a Master Maven, with each of the three stages marked by a special acknowledgment.
          </p>
          <p class="mt-8 mb-4">
            The essential qualifications for admission are abiding by our collective <NuxtLink to="#Principles" class="border-b font-bold">Principles</NuxtLink>, understanding <NuxtLink to="/knowledge/main" class="border-b font-bold">The Real Natural Law</NuxtLink> and 
            applying it in real life.
          </p>
          <p class="px-4 py-2 mt-10 mb-8 font-mono text-xs border">
            Membership is open to all men and women of integrity who can fulfill these essential qualifications.   
          </p>

          <button
            @click="$router.push('/maven/initiation')"
            type="button"
            class="px-4 py-2.5 mt-2 w-full text-sm font-bold text-center text-white uppercase rounded bg-grey-975 dark:bg-white dark:text-grey-975 lg:text-base">
            Become a founding member
          </button>
        </div>
      </div>
    </section> -->

  </main>
</template>

<script setup>
// const route = useRoute()
// const baseUrl = './img/market/'
</script>

