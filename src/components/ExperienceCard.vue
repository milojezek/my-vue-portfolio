<template>
  <div class="experience-card">
    <p class="tenure">{{ tenure }}</p>
    <div class="card-column">
      <a :href="link" target="_blank" class="anchor-text">
        <h3 class="card-header">{{ title }}</h3>
      </a>
      <p>
        {{ description }}
      </p>
      <div class="tag-container">
        <div class="tag" v-for="tag in tags" :key="tag">
          <p>{{ tag }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceCard",
  props: {
    tenure: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    },
    link: {
      type: String,
      default: "/"
    }
  }
};
</script>

<style scoped>
</style>
