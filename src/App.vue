<template>
  <div class="underlay"></div>
  <ProfileHeader />
  <main></main>
  <footer></footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ProfileHeader from "@/components/ProfileHeader.vue";

export default defineComponent({
  components: {
    ProfileHeader,
  },
  setup() {},
});
</script>

<style>
@import "@assets/styles.css";
</style>
