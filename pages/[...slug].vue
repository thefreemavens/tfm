<template>
  <div class="container mx-auto">
    <div class="mx-4">
      <ContentDoc>
        <template v-slot="{ doc }">
          <div class="grid grid-cols-12 lg:pt-8 --border-t">
            <!-- Startbar -->
            <nav class="hidden col-span-12 lg:block lg:col-span-2 overflow-y-scroll max-h-[calc(100dvh-96px)] sticky top-20">
              <ContentNavigation :navigation-tree="knowledge" :show-children="currentRouterSlug === 'knowledge'" />
              <ContentNavigation :navigation-tree="lessons" :show-children="currentRouterSlug === 'lessons'" />
              <ContentNavigation :navigation-tree="challenges" :show-children="currentRouterSlug === 'challenges'"/>
              <ContentNavigation :navigation-tree="resources" :show-children="currentRouterSlug === 'resources'"/>
              <ContentNavigation :navigation-tree="tools" :show-children="currentRouterSlug === 'tools'"/>
            </nav>

            <nav class="top-0 mt-6 col-span-12 py-2 mb-4 border-b-4 lg:hidden">
              <ContentNavigation :navigation-tree="knowledge" :show-children="currentRouterSlug === 'knowledge'"/>
              <ContentNavigation :navigation-tree="lessons" :show-children="currentRouterSlug === 'lessons'"/>
              <ContentNavigation :navigation-tree="challenges" :show-children="currentRouterSlug === 'challenges'"/>
              <ContentNavigation :navigation-tree="resources" :show-children="currentRouterSlug === 'resources'"/>
              <ContentNavigation :navigation-tree="tools" :show-children="currentRouterSlug === 'tools'"/>
            </nav>

            <!-- Content -->
            <main class="col-span-12 lg:px-12 xl:px-24 lg:col-span-8 lg:col-start-3">
              <article>
                <div class="flex pt-2 w-full text-sm">
                  <span class="flex-1 font-mono">{{ doc.id ? doc.cat + ' / ' + doc.id : '--' }}</span>
                  <!-- <span class="flex-1 rotate-180">-></span> -->
                </div>
                <!-- <span class="text-lg">->{{ doc.index }}</span> -->
                <h1>{{ doc.title }}</h1>
                <ContentRenderer :value="doc" :key="$route.path" />
              </article>
              <nav>
                <!-- {{ prev.title }} // {{  next.title }} -->
                <div class="grid grid-cols-2 mt-16 mb-4 text-xs font-bold border-t">
                  <NuxtLink v-if="prev" :to="prev._path" class="justify-self-start pt-4 w-auto border-t-1">{{ prev.title }}<span class="block pt-2">{{ arrowLeft }}</span></NuxtLink>
                  <div v-else />
                  <NuxtLink v-if="next" :to="next._path" class="justify-self-end pt-4 w-auto text-right border-t-1">{{ next.title }}<span class="block pt-2">{{ arrowRight }}</span></NuxtLink>
                  <div v-else />
                </div>
                <!-- <ContentPrevNext /> -->
              </nav>
            <!-- </template> -->

            <!-- <template #not-found> -->
              <!-- Hey -->
            </main>
            
            <!-- Endbar -->
            <div class="col-span-12 lg:col-span-2 lg:col-start-11">
              <aside class="sticky top-20 pt-2 border-t-4">
                <!-- Table of Contents -->
                <h3 v-if="doc.body.toc.links.length" class="pb-4 text-sm font-bold">Table of contents</h3>
                <ul class="pb-6 text-xs">
                  <li v-for="link of doc.body.toc.links" :key="link.id"
                  class="py-0.5"
                  >
                    <a :href="`#${link.id}`" class="block px-2 py-0.5 rounded-sm transition-colors duration-200 --relative bg-black/0 hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white hover:duration-100">{{ link.text }}</a>
                  </li>
                </ul>
                <ContentAside />
              </aside>
            
            </div>
          </div>
        </template>

        <template #not-found>
          <AppSection>
            <template #title>
              Not Found
            </template>
            <template #desc>
              Error 404: Not Found<br>
              <NuxtLink to="/knowledge/discovery-vs-belief" class="border-b font-bold">Back to Home</NuxtLink>
            </template>
          </AppSection>
        </template>
      </ContentDoc>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
const currentRouterSlug = router.currentRoute.value.params.slug[0]

const queryKnowledge = queryContent({ where: { _path: { $contains: 'knowledge' }}})
const queryLessons = queryContent({ where: { _path: { $contains: 'lessons' }}})
const queryChallenges = queryContent({ where: { _path: { $contains: 'challenges' }}})
const queryrResources = queryContent({ where: { _path: { $contains: 'resources' }}})
const queryrTools = queryContent({ where: { _path: { $contains: 'tools' }}})

const { data: knowledge } = await useAsyncData('knowledge', () => fetchContentNavigation(queryKnowledge))
const { data: lessons } = await useAsyncData('lessons', () => fetchContentNavigation(queryLessons))
const { data: challenges } = await useAsyncData('challenges', () => fetchContentNavigation(queryChallenges))
const { data: resources } = await useAsyncData('resources', () => fetchContentNavigation(queryrResources))
const { data: tools } = await useAsyncData('tools', () => fetchContentNavigation(queryrTools))


// Prev/Next navigation
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the cuurent route
  // let article = queryContent().where({ _path: path }).findOne();
  // get the surround information,
  // which is an array of documeents that come before and after the current document
  let surround = queryContent().only(["_path", "title"]).sort({ _id: 1 }).findSurround(path);

  return {
    // article: await article,
    surround: await surround,
  };
});

// destrucure `prev` and `next` value from data
const [prev, next] = data.value.surround;
// console.log({ prev, next });

const arrowLeft = '<--'
const arrowRight = '-->'

useHead({
  // Leave for syntex options example:
  bodyAttrs: {
    // used by Lenis plugin
    class: 'content'
  },
  // script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>