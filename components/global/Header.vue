<template>
  <header class="Header">
    <div class="Header-inner container">
      <div class="Header-section-left">
        <nuxt-link to="/">HONEY THAKURIA</nuxt-link>
      </div>

      <nav class="Header-section-right">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/blogs">Writing</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.Header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: saturate(180%) blur(12px);
  border-bottom: 1px solid #f1f1f1;
}
.Header-inner {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
}
.Header-section-right {
  display: flex;
  flex-flow: row wrap;
  gap: 22px;
}
.Header a {
  text-decoration: none;
  font-family: Karla, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1e1e1e;
  transition: color 0.18s ease;
}
.Header-section-left a {
  letter-spacing: 0.03em;
}
.Header a:hover,
.Header a.nuxt-link-exact-active {
  cursor: pointer;
  color: #3aa8ff;
}
.Header-section-left a.nuxt-link-exact-active {
  color: #1e1e1e;
}
</style>

<script>
export default {
  name: "Header"
};
</script>
