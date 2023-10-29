<!-- <template>
  <h1
    :id="id"
    class="bg-red text-2xl/tight sm:text-3xl/tight md:text-4xl/tight lg:text-5xl/tight xl:text-6xl/tight font-bold tracking-tight pt-6 pb-3 sm:pb-4 md:pt-8 md:pb-5 lg:pt-10 lg:pb-6">
    <a
      v-if="generate"
      :href="`#${id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h1>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h1)
</script> -->
