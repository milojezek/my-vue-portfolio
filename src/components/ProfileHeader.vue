<template>
  <header>
    <a href="/">
      <h1>Miloslav Jezek</h1>
    </a>
    <h4>Full Stack Developer</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>

    <nav>
      <NavLink href="#about" text="About" />
      <NavLink href="#experience" text="Experience" />
      <NavLink href="#projects" text="Projects" />
    </nav>
    <div class="socials">
      <a href="https://www.linkedin.com/in/miloslav-jezek/" target="_blank">
        <img src="@/assets/icons/mdi--linkedin.svg" alt="LinkedIn" />
      </a>
      <a href="https://github.com/milojezek" target="_blank">
        <img src="@/assets/icons/mdi--github.svg" alt="GitHub" />
      </a>
    </div>
  </header>
</template>

<script>
import NavLink from './NavLink.vue';

export default {
  name: "ProfileHeader",
  components: {
    NavLink
  }
};
</script>