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
.experience-card {
  display: grid;
  /* Number of columns displayed in grid*/
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 0.5rem;
}

.experience-card h3 {
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 500;
}

.experience-card p {
  font-size: 0.9rem;
}

.card-column {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.tenure {
  font-size: 0.5rem !important;
  opacity: 0.7;
  text-transform: uppercase;
}

.card-header {
  font-weight: 400;
  font-size: 1rem;
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  color: var(--color-accent);
}

.tag {
  padding: 0.25rem 0.5rem;
  border-radius: 0.75rem;
  background: var(--color-highlight);
}

.tag p {
  font-size: 0.7rem;
}

@media (min-width: 640px) {
  .experience-card {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .card-column {
    grid-column: span 3 / span 3;
  }

  .tenure {
    font-size: 0.75rem !important;
  }
}

@media (min-width: 1024px) {
  .tenure {
    font-size: 0.6rem !important;
  }
}
</style>
