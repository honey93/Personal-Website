<template>
  <footer class="Footer">
    <div class="footer-inner container">
      <div class="footer-cta">
        <p class="footer-eyebrow">Get in touch</p>
        <h2 class="footer-title">Let's build something together</h2>
        <p class="footer-sub">
          Open to conversations about open-source, collaborations, mentoring,
          or just to say hi.
        </p>
        <a class="footer-mail" href="mailto:thakuria.honey@gmail.com">
          <i class="fas fa-envelope"></i> thakuria.honey@gmail.com
        </a>
      </div>

      <div class="footer-nav">
        <span class="footer-nav-title">Explore</span>
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/blogs">Articles &amp; Talks</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </div>
    </div>

    <div class="footer-bottom container">
      <div class="footer-social">
        <a href="https://www.linkedin.com/in/honeythakuria/" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/honey93" target="_blank" rel="noopener" aria-label="GitHub"><i class="fab fa-github"></i></a>
        <a href="https://twitter.com/HoneyThakuria" target="_blank" rel="noopener" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
        <a href="https://medium.com/@HoneyThakuria" target="_blank" rel="noopener" aria-label="Medium"><i class="fab fa-medium"></i></a>
      </div>
      <p class="copyright">© {{ year }} Honey Thakuria · Built with Nuxt.js</p>
    </div>
  </footer>
</template>

<style scoped>
.Footer {
  background: var(--bg-elev);
  border-top: 1px solid var(--border-soft);
  margin-top: 40px;
}
.footer-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  padding: 64px 20px 48px;
}

/* ---------- CTA block ---------- */
.footer-cta {
  max-width: 540px;
}
.footer-eyebrow {
  font-family: Karla, sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 10px;
}
.footer-title {
  font-family: Karla, sans-serif;
  font-weight: 700;
  font-size: 34px;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--text);
  margin-bottom: 12px;
}
.footer-sub {
  font-family: Karla, sans-serif;
  font-size: 17px;
  line-height: 1.6;
  color: var(--text-subtle);
  margin-bottom: 22px;
}
.footer-mail {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-family: Karla, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: var(--text);
  text-decoration: none;
  padding: 12px 22px;
  border: 1.5px solid var(--border);
  border-radius: 8px;
  transition: all 0.18s ease;
}
.footer-mail i {
  color: var(--accent);
}
.footer-mail:hover {
  border-color: var(--accent);
  background: var(--accent-soft);
  transform: translateY(-2px);
}

/* ---------- Quick nav ---------- */
.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.footer-nav-title {
  font-family: Karla, sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-faint);
  margin-bottom: 4px;
}
.footer-nav a {
  font-family: Karla, sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: var(--text-subtle);
  text-decoration: none;
  transition: color 0.18s ease;
  width: fit-content;
}
.footer-nav a:hover {
  color: var(--accent);
}

/* ---------- Bottom bar ---------- */
.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 22px 20px 28px;
  border-top: 1px solid var(--border);
}
.footer-social {
  display: flex;
  gap: 16px;
}
.footer-social a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1.5px solid var(--border);
  color: var(--text-subtle);
  font-size: 17px;
  text-decoration: none;
  transition: all 0.18s ease;
}
.footer-social a:hover {
  color: var(--accent);
  border-color: var(--accent);
  background: var(--accent-soft);
  transform: translateY(-2px);
}
.copyright {
  font-family: Karla, sans-serif;
  font-size: 14px;
  color: var(--text-faint);
  margin: 0;
}

@media screen and (max-width: 640px) {
  .footer-inner {
    flex-direction: column;
    gap: 32px;
    padding: 48px 20px 36px;
  }
  .footer-title {
    font-size: 28px;
  }
  .footer-bottom {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
}
</style>

<script>
export default {
  name: "Footer",
  data() {
    return { year: new Date().getFullYear() };
  }
};
</script>
