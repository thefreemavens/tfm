<template>
  <ul>
    <li v-for="nav of navigation" :key="nav.to">
      <div class="navlink-container">
        <span
          v-if="nav.children && !isExpanded(nav)"
          class="expand-nav"
          @click="expandList(nav)"
          >+</span
        >
        <span
          v-if="nav.children && isExpanded(nav)"
          class="expand-nav"
          @click="collapseList(nav)"
          >-</span
        >
        <NuxtLink :to="nav.to" :title="nav.title || nav.name">
          {{ nav.name }}
        </NuxtLink>
      </div>
      <ContentNavTransition v-if="nav.children">
        <NavList v-show="isExpanded(nav)" :navigation="nav.children" />
      </ContentNavTransition>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    navigation: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      childrenShow: [],
    };
  },

  methods: {
    expandList(nav) {
      this.childrenShow.push(nav.to);
    },
    collapseList(nav) {
      const index = this.childrenShow.findIndex((item) => {
        return item === nav.to;
      });
      this.childrenShow.splice(index, 1);
    },
    isExpanded(nav) {
      return this.childrenShow.includes(nav.to);
    },
  },
};
</script>
<style  scoped>
ul li {
  list-style: none;
}
ul li.active>.navlink-container a{
  --tw-text-opacity:1;
  color:rgba(20, 30, 41, var(--tw-text-opacity));
  font-weight:700;
  border-left-width:4px;
  --tw-border-opacity:1;
  border-color:rgba(56, 237, 172, var(--tw-border-opacity))
}
ul li .navlink-container{
  display:flex;
  align-items:center
}
ul li .navlink-container a{
  display:flex;
  flex-grow:1;
  font-size:0.875rem;
  line-height:1.25rem;
  --tw-text-opacity:1;
  color:rgba(79, 98, 120, var(--tw-text-opacity));
  margin-top:0.5rem;
  margin-bottom:0.5rem;
  padding-top:0.25rem;
  padding-bottom:0.25rem;
  padding-left:0.75rem
}
ul li ul.expand-list-active{
  transition:all 1s ease
}
ul li ul.expand-list-enter,ul li ul.expand-list-leave-to{
  opacity:0
}
ul li ul{
  margin-left:1rem;
  border-left-width:1px;
  --tw-border-opacity:1;
  border-color: black;
}
ul li ul li.active>.navlink-container a{
  --tw-text-opacity:1;
  color:rgba(20, 30, 41, var(--tw-text-opacity));
  border-right-width:4px;
  border-left-width:0px;
  --tw-border-opacity:1;
  border-color:rgba(56, 237, 172, var(--tw-border-opacity))
}
ul li .expand-nav{
  position:relative;
  right:.5rem;
  display:inline;
  cursor:pointer
}

/*purgecss end ignore*/
</style>
