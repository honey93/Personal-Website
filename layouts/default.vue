<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/global/Header.vue";

import Footer from "~/components/global/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>


<style>
/* ---------- Theme tokens ---------- */
:root {
  --accent: #1f93ef;
  --accent-strong: #1f6fb0;
  --accent-soft: #e9f5ff;
  --accent-shadow: rgba(31, 147, 239, 0.32);

  --bg: #ffffff;
  --bg-elev: #fafbfc;
  --border: #eef0f3;
  --border-soft: #f1f1f1;

  --text: #111827;
  --text-muted: #374151;
  --text-subtle: #6b7280;
  --text-faint: #9ca3af;

  --header-bg: rgba(255, 255, 255, 0.85);
  --card-shadow: rgba(0, 0, 0, 0.06);
}

[data-theme="dark"] {
  --accent: #3aa8ff;
  --accent-strong: #7cc4ff;
  --accent-soft: #14304a;
  --accent-shadow: rgba(58, 168, 255, 0.28);

  --bg: #0e1117;
  --bg-elev: #161b22;
  --border: #232b36;
  --border-soft: #1c222b;

  --text: #f3f4f6;
  --text-muted: #c9d1d9;
  --text-subtle: #9ca3af;
  --text-faint: #6b7280;

  --header-bg: rgba(14, 17, 23, 0.85);
  --card-shadow: rgba(0, 0, 0, 0.5);
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

/* Offset anchored sections so they clear the sticky header */
#experience,
#projects,
#skills,
#about {
  scroll-margin-top: 80px;
}

body {
  background: var(--bg);
  color: var(--text);
  transition: background 0.25s ease, color 0.25s ease;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
