<template>
  <section id="experience">
    <div class="sticky-header">
      <h2 class="light-text">Experience</h2>
    </div>
    <div class="experience-content">
      <ExperienceCard
        v-for="(experience, index) in experiences"
        :key="index"
        :tenure="experience.tenure"
        :title="experience.title"
        :description="experience.description"
        :tags="experience.tags"
        :link="experience.link"
      />
      <a
        class="resume-and-archive-link"
        href="public/jezek_miloslav_cv.pdf"
        target="_blank"
      >
        <p>
          View Full Resume
          <span
            class="material-symbols-outlined"
            style="vertical-align: middle"
          >
            arrow_forward
          </span>
        </p>
      </a>
    </div>
  </section>
</template>

<script>
import ExperienceCard from './ExperienceCard.vue';

export default {
  name: "ExperienceSection",
  components: {
    ExperienceCard
  },
  data() {
    return {
      experiences: [
        {
          tenure: "Jul 2025 - present",
          title: "Full Stack Developer · FPT Czech",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam erat, eget facilisis erat urna eu sapien. Etiam euismod, nisi eu consectetur.",
          tags: ["TypeScript", "React.js", "Vue.js", "HTML & CSS", "Node.js", "Azure DevOps", "WordPress"],
          link: "/"
        },
        {
          tenure: "Jun 2024 - Jul 2025",
          title: "Product Developer · FPT Czech",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur, nisi nisl aliquam erat, eget facilisis erat urna eu sapien. Etiam euismod, nisi eu consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          tags: ["React.js", "TypeScript", "Node.js", "Azure DevOps", "Express.js", "PostgreSQL", "Scrum", "Product Development", "Vue.js"],
          link: "/"
        },
        {
          tenure: "Jun 2023 - May 2024",
          title: "JavaScript Developer · FPT Czech",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur, nisi nisl aliquam erat, eget facilisis erat urna eu sapien.",
          tags: ["React & React Native", "JavaScript", "PWA", "Azure & Azure DevOps", "HTML & CSS", "Git & Scrum"],
          link: "/"
        },
        {
          tenure: "Feb 2023 - May 2023",
          title: "Java Developer · FPT Czech",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur, nisi nisl aliquam erat, eget facilisis erat urna eu sapien.",
          tags: ["Java", "Spring Boot", "PostgreSQL", "HTML & CSS", "JavaScript"],
          link: "/"
        },
        {
          tenure: "Mar 2022 - Jan 2023",
          title: "Career Transition",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur, nisi nisl aliquam erat.",
          tags: ["Kotlin", "Android", "Jetpack Compose", "HTML & CSS"],
          link: "/"
        },
        {
          tenure: "Sep 2019 - Feb 2022",
          title: "Technical Sourcers · Wrike & GoodCall",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur, nisi nisl aliquam erat, eget facilisis erat urna eu sapien. Etiam euismod, nisi eu consectetur.",
          tags: ["IT recruitment", "Sourcing", "Interviewing", "Python"],
          link: "/"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
