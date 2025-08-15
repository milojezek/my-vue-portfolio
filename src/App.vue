<template>
  <div class="underlay"></div>
  <ProfileHeader />
  <main><AboutSection /></main>
  <footer></footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ProfileHeader from "@/components/ProfileHeader.vue";
import AboutSection from "@/components/AboutSection.vue";

export default defineComponent({
  components: {
    ProfileHeader,
    AboutSection
  },
  setup() {},
});
</script>

<style>
@import "@assets/styles.css";

#app {
  background: white;
  color: #475569;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 8rem;
  min-height: 100vh;
}

@media (min-width: 1024px) {
  #app {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    padding: 6rem;
    padding-top: 0;
  }
}
</style>
