<template>
  <div>
    <section class="container contact-section">
      <h2 class="contact-page-title">Let's build something together</h2>
      <p class="contact-sub">
        Open to conversations about open-source, collaborations, mentoring, or just to say hi.
      </p>

      <div class="links">
        <a href="https://www.linkedin.com/in/honeythakuria/" target="_blank" rel="noopener" aria-label="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/honey93" target="_blank" rel="noopener" aria-label="GitHub">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://twitter.com/HoneyThakuria" target="_blank" rel="noopener" aria-label="Twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://medium.com/@HoneyThakuria" target="_blank" rel="noopener" aria-label="Medium">
          <i class="fab fa-medium"></i>
        </a>
      </div>

      <div class="form-css">
        <h3 class="form-title">Send a message</h3>
        <!-- Formspree endpoint (form ID xvovqpyr). Works on static GitHub Pages. -->
        <b-form
          v-if="show"
          action="https://formspree.io/f/xvovqpyr"
          method="POST"
        >
          <b-form-group id="input-group-2" label="Your name" label-for="input-2">
            <b-form-input
              name="name"
              id="input-2"
              v-model="form.name"
              required
              placeholder="Jane Doe"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-1" label="Email address" label-for="input-1">
            <b-form-input
              name="email"
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="jane@example.com"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Message" label-for="input-3">
            <b-form-textarea
              name="message"
              id="input-3"
              v-model="form.text"
              placeholder="Tell me a little about it..."
              rows="4"
              required
              max-rows="8"
            ></b-form-textarea>
          </b-form-group>

          <b-button type="submit" variant="primary" class="submit-btn">Send</b-button>
        </b-form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head: {
    title: "Contact — Honey Thakuria",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Get in touch with Honey Thakuria for open-source, collaborations or mentoring."
      }
    ]
  },
  data() {
    return {
      form: { email: "", name: "", text: "" },
      show: true
    };
  }
};
</script>

<style scoped>
.contact-section {
  min-height: calc(100vh - 150px);
  padding-top: 60px;
}
.contact-page-title {
  font-family: Karla, sans-serif;
  font-weight: 700;
  font-size: 40px;
  letter-spacing: -0.02em;
  color: #111827;
}
.contact-sub {
  font-family: Karla, sans-serif;
  font-size: 19px;
  color: #6b7280;
  margin-top: 8px;
  max-width: 640px;
}
.links {
  margin-top: 28px;
}
.links a {
  text-decoration: none;
  color: #9ca3af;
  margin-right: 18px;
  transition: color 0.18s ease;
}
.fab {
  font-size: 30px;
}
.fab.fa-linkedin:hover { color: #0077b5; }
.fab.fa-twitter:hover { color: #38a1f3; }
.fab.fa-github:hover { color: #333; }
.fab.fa-medium:hover { color: #00ab6c; }

.form-css {
  max-width: 560px;
  margin-top: 48px;
  padding: 28px;
  border: 1px solid #eef0f3;
  border-radius: 14px;
  background: #fafbfc;
}
.form-title {
  font-family: Karla, sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: #111827;
  margin-bottom: 18px;
}
.submit-btn {
  background: #3aa8ff;
  border-color: #3aa8ff;
  font-weight: 700;
  padding: 8px 28px;
}
.submit-btn:hover {
  background: #1f93ef;
  border-color: #1f93ef;
}
</style>
