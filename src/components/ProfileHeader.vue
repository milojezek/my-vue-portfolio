<template>
  <header>
    <a href="/">
      <h1>Miloslav Jezek</h1>
    </a>
    <h4>Full Stack Developer</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>

    <nav>
      <NavLink href="#about" text="About" />
      <NavLink href="#experience" text="Experience" />
      <NavLink href="#projects" text="Projects" />
    </nav>
    <div class="socials">
      <a href="https://www.linkedin.com/in/miloslav-jezek/" target="_blank">
        <img
          class="social-icon"
          src="../assets//icons/linkedin-outlined-icon.png"
          alt="LinkedIn Icon"
        />
      </a>
      <a href="https://github.com/milojezek" target="_blank">
        <img
          class="social-icon"
          src="../assets/icons/github-outlined-icon.png"
          alt="GitHub Icon"
        />
      </a>
    </div>
  </header>
</template>

<script lang="ts">
import NavLink from "./NavLink.vue";

export default {
  name: "ProfileHeader",
  components: {
    NavLink,
  },
};
</script>