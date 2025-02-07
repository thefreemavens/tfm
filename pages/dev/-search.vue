<template>
  <div>
    <NuxtLink to="/">go back home</NuxtLink>
    <h1>Search</h1>

    <input class="border" v-model="search">
    {{ search }}

    <pre>{{ results }} </pre>
  </div>
</template>

<script lang="ts" setup>
const search  = ref('')
const results = searchContent('laboris')
//const results = await searchContent('laboris') // not working either with await
console.log('results :>> ', results); // not working
</script>

<style>
/* input: {
  border: 1px solid #ccc;
} */
</style>