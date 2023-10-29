<template>
  <main class="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
    <div class="w-full max-w-2xl mx-auto px-4 md:px-6 py-24">

      <h1 class="text-2xl font-bold text-slate-900 mb-4">FAQs</h1>

      <div class="divide-y divide-slate-200">
        <template v-for="(faq, index) in faqs">
          <AppAccordion :title="faq.title" :id="`faqs-${index}`" :active="faq.active">
            {{ faq.text }}
          </AppAccordion>
        </template>
      </div>

    </div>
  </main>
</template>

<script setup lang="ts">

const faqs = [
  {
    title: "Question",
    text: "Answer",
    active: false,
  },
  {
    title: "Question",
    text: "Answer",
    active: false,
  },
  {
    title: "Question",
    text: "Answer",
    active: false,
  } 
]
</script>
