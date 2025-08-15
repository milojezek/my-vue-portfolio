<template>
  <section id="about">
    <div class="sticky-header">
      <h2 class="light-text">About</h2>
    </div>
    <div class="about-content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        <a href="/" class="anchor-text">luctus</a>,
        <a href="/" class="anchor-text">elementum</a>, and
        <a href="/" class="anchor-text">dictum</a>. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Nam
        facilisis, sapien nec cursus dictum, erat urna cursus enim, eu
        scelerisque erat velit nec urna.
      </p>
      <p>
        Etiam euismod, sapien nec cursus dictum. Mauris euismod, erat nec
        cursus dictum, erat urna cursus enim. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas.
      </p>
      <p>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia curae; Sed euismod, sapien nec cursus dictum, erat urna
        cursus enim. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Nam facilisis, sapien nec cursus
        dictum, erat urna cursus enim, eu scelerisque erat velit nec urna.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style scoped>
.about-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about-content p {
  font-size: 1.1rem;
}
</style>
