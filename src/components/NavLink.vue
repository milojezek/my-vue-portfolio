<template>
  <a class="anchor-text" :href="href">
    <p>{{ text }}</p>
  </a>
</template>

<script lang="ts">
export default {
  name: "NavLink",
  props: {
    href: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
