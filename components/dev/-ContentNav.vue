<template>
  <nav>
    <ContentNavList v-if="navigation" :navigation="navigation" />
  </nav>
</template>
<script>
export default {
  data() {
    return {
      navigation: [],
    };
  },
  async fetch() {
    const navigation = await this.$content("kb")
      .only(["name", "to", "title", "children"])
      .fetch();
    this.navigation = navigation;
  },
};
</script>
<style scoped>
nav {
  border: 1px solid #FE5C5C;
  max-width: 500px;
}
</style>
