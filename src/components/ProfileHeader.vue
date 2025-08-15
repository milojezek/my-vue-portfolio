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

<style scoped>
header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;
  position: relative;
  z-index: 10;
}

header h1,
header h4 {
  color: var(--color-highlight);
}

header a {
  text-decoration: none;
  /* Remove the underline */
}

header h1 {
  font-weight: 600;
}

header h4 {
  font-weight: 400;
}

nav {
  display: none;
  font-weight: bold;
}

nav a {
  font-size: 0.9rem;
}

.socials {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.social-icon {
  width: 50px;
  height: auto;
  transition: transform 0.2s;
}

.social-icon:hover {
  transform: scale(1.15);
}

@media (min-width: 640px) {
  header {
    max-width: unset;
  }

  header h1 {
    font-size: 3rem;
  }

  header h4 {
    font-size: 1.4rem;
  }

  header p {
    max-width: 300px;
  }

  .socials {
    flex-direction: row;
    gap: 1.5rem;
  }
}

@media (min-width: 1024px) {
  header {
    position: sticky;
    top: 0;
    margin-left: auto;
    height: 100vh;
    padding-bottom: 6rem;
    padding-top: 6rem;
    max-width: 600px;
    width: 100%;
  }

  header h1 {
    font-size: 3rem;
  }

  header h4 {
    font-size: 1.4rem;
  }

  header p {
    max-width: 300px;
  }

  nav {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 1rem;
  }

  nav a p {
    font-size: 1rem;
  }

  .socials {
    flex-direction: row;
    gap: 1.5rem;
  }

  .socials p {
    font-size: 2rem;
  }
}
</style>