<template>
  <header class="Header">
    <div class="Header-inner container">
      <div class="Header-section-left">
        <nuxt-link class="brand" to="/" @click.native="onLogoClick">
          <span class="brand-badge">HT</span>
          <span class="brand-name">Honey Thakuria</span>
        </nuxt-link>
      </div>

      <nav class="Header-section-right">
        <nuxt-link class="nav-link" to="/">Home</nuxt-link>
        <nuxt-link class="nav-link" to="/blogs">Articles &amp; Talks</nuxt-link>
        <nuxt-link class="nav-link" to="/contact">Contact</nuxt-link>
        <button
          class="theme-toggle"
          type="button"
          @click="toggleTheme"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.Header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--header-bg);
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);
  border-bottom: 1px solid var(--border-soft);
}
.Header-inner {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
}

/* ---------- Brand / logo ---------- */
.brand {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  text-decoration: none;
}
.brand-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 9px;
  background: var(--accent);
  color: #fff;
  font-family: Karla, sans-serif;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.02em;
  box-shadow: 0 4px 12px var(--accent-shadow);
  transition: transform 0.18s ease;
}
.brand:hover .brand-badge {
  transform: rotate(-6deg) scale(1.05);
}
.brand-name {
  font-family: Karla, sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: -0.01em;
  color: var(--text);
}

/* ---------- Nav ---------- */
.Header-section-right {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 26px;
}
.nav-link {
  position: relative;
  text-decoration: none;
  font-family: Karla, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: var(--text-subtle);
  padding: 4px 0;
  transition: color 0.18s ease;
}
.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background: var(--accent);
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.22s ease;
}
.nav-link:hover {
  color: var(--accent);
  cursor: pointer;
}
.nav-link:hover::after,
.nav-link.nuxt-link-exact-active::after {
  transform: scaleX(1);
}
.nav-link.nuxt-link-exact-active {
  color: var(--text);
}

/* ---------- Theme toggle ---------- */
.theme-toggle {
  background: transparent;
  border: 1.5px solid var(--border);
  cursor: pointer;
  color: var(--text-subtle);
  font-size: 15px;
  line-height: 1;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: color 0.18s ease, background 0.18s ease,
    border-color 0.18s ease, transform 0.18s ease;
}
.theme-toggle:hover {
  color: var(--accent);
  border-color: var(--accent);
  background: var(--accent-soft);
  transform: translateY(-1px);
}

@media screen and (max-width: 560px) {
  .brand-name {
    display: none;
  }
  .Header-section-right {
    gap: 16px;
  }
  .nav-link {
    font-size: 14px;
  }
}
</style>

<script>
export default {
  name: "Header",
  data() {
    return {
      isDark: false
    };
  },
  mounted() {
    let theme = null;
    try {
      theme = localStorage.getItem("theme");
    } catch (e) {
      theme = null;
    }
    if (!theme) {
      theme =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    }
    this.applyTheme(theme);
  },
  methods: {
    applyTheme(theme) {
      this.isDark = theme === "dark";
      document.documentElement.setAttribute("data-theme", theme);
      try {
        localStorage.setItem("theme", theme);
      } catch (e) {
        /* storage unavailable — ignore */
      }
    },
    toggleTheme() {
      this.applyTheme(this.isDark ? "light" : "dark");
    },
    onLogoClick(e) {
      // Already on the home page → just scroll to top instead of re-navigating.
      if (this.$route.path === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }
};
</script>
