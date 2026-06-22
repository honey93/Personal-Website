<template>
  <div>
    <section class="container">
      <!-- HERO -->
      <div class="hero">
        <div class="hero-text">
          <p class="heroHello">Hello, I'm</p>
          <h1 class="heroName">Honey Thakuria</h1>
          <p class="heroDescription">
            Full-Stack Engineer building end-to-end systems for masses.
          </p>
          <p class="heroTyping">
            I create things with
            <span class="techColor">{{ tech }}</span>
            <span v-if="showTyping" class="caret">|</span>
          </p>
          <div class="hero-cta">
            <a class="btn btn-primary" href="#experience">View experience</a>
            <nuxt-link class="btn btn-ghost" to="/contact">Get in touch</nuxt-link>
          </div>
          <div class="hero-social">
            <a href="https://www.linkedin.com/in/honeythakuria/" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/honey93" target="_blank" rel="noopener" aria-label="GitHub"><i class="fab fa-github"></i></a>
            <a href="https://twitter.com/HoneyThakuria" target="_blank" rel="noopener" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="https://medium.com/@HoneyThakuria" target="_blank" rel="noopener" aria-label="Medium"><i class="fab fa-medium"></i></a>
          </div>
        </div>
        <div class="hero-image-wrap">
          <img src="~/static/honeythakuria.png" class="heroImage" alt="Honey Thakuria" />
        </div>
      </div>

      <!-- ABOUT -->
      <div class="section" id="about">
        <h2 class="sectionTitle">About</h2>
        <p class="aboutSummary">{{ $store.state.about.summary }}</p>
        <ul class="highlights">
          <li v-for="(h, i) in $store.state.about.highlights" :key="i">
            <i class="fas fa-check"></i> {{ h }}
          </li>
        </ul>
      </div>

      <!-- SKILLS -->
      <div class="section" id="skills">
        <h2 class="sectionTitle">Skills &amp; Tools</h2>
        <div class="skills-grid">
          <div class="skill-card" v-for="skill in $store.state.skills" :key="skill.id">
            <h3 class="skill-group">{{ skill.group }}</h3>
            <div class="skill-tags">
              <span class="tag" v-for="(item, i) in skill.items" :key="i">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- EXPERIENCE TIMELINE -->
      <div class="section" id="experience">
        <h2 class="sectionTitle">Experience</h2>
        <div class="timeline">
          <div class="timeline-item" v-for="job in $store.state.experience" :key="job.id">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="job-head">
                <h3 class="job-role">{{ job.role }}</h3>
                <span class="job-company">{{ job.company }}</span>
              </div>
              <p class="job-meta">{{ job.duration }} <span v-if="job.location">· {{ job.location }}</span></p>
              <ul class="job-bullets">
                <li v-for="(b, i) in job.bullets" :key="i">{{ b }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="also-roles">
          <h3 class="also-title">Also</h3>
          <div class="also-list">
            <div class="also-item" v-for="r in $store.state.alsoRoles" :key="r.id">
              <component :is="r.url ? 'a' : 'span'" :href="r.url" :target="r.url ? '_blank' : null" rel="noopener">
                <strong>{{ r.role }}</strong> · {{ r.company }}
                <span class="also-dur">{{ r.duration }}</span>
              </component>
            </div>
          </div>
        </div>
      </div>

      <!-- PROJECTS -->
      <div class="section" id="projects">
        <h2 class="sectionTitle">Selected Work</h2>
        <div class="projects-grid">
          <a
            class="project-card"
            v-for="project in $store.state.stuff"
            :key="project.id"
            :href="project.url"
            target="_blank"
            rel="noopener"
          >
            <div class="project-image">
              <img :src="project.imageUrl" :alt="project.title" />
            </div>
            <div class="project-body">
              <span class="project-tag">{{ project.publication }}</span>
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-desc">{{ project.description }}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    let j = 0;
    let tempArr = this.arrayTech[j].split("");
    let i = 0;

    this.timer = setInterval(() => {
      this.showTyping = !this.showTyping;
      if (i < tempArr.length) {
        this.type(tempArr[i]);
        i++;
      } else {
        this.tech = "";
        i = 0;
        j++;
        if (j < this.arrayTech.length) {
          tempArr = this.arrayTech[j].split("");
        } else {
          j = 0;
          tempArr = this.arrayTech[j].split("");
        }
      }
    }, 220);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  head() {
    return {
      title: "Honey Thakuria — Full-Stack Engineer",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Honey Thakuria is a Full-Stack Engineer with 10+ years across data, web and cloud — currently at Intuit. Open-source contributor, tech blogger and mentor. Explore projects, experience and writing."
        }
      ]
    };
  },
  data() {
    return {
      showTyping: true,
      tech: "",
      timer: null,
      arrayTech: [
        "Vue & Nuxt",
        "React",
        "Node.js",
        "Python",
        "Kafka & Spark",
        "AWS & GCP",
        "TypeScript"
      ]
    };
  },
  methods: {
    type(text) {
      this.tech += text;
    }
  }
};
</script>

<style scoped>
/* ---------- Tokens ---------- */
.container {
  max-width: 1080px;
}

/* ---------- Hero ---------- */
.hero {
  display: flex;
  align-items: center;
  gap: 48px;
  min-height: 70vh;
  padding: 80px 0 60px;
}
.hero-text {
  flex: 1 1 60%;
}
.heroHello {
  font-family: Karla, sans-serif;
  font-size: 24px;
  color: #6b7280;
  margin-bottom: 4px;
}
.heroName {
  font-family: Karla, sans-serif;
  font-weight: 700;
  font-size: 64px;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: #111827;
  margin-bottom: 16px;
}
.heroDescription {
  font-family: Karla, sans-serif;
  font-size: 26px;
  color: #374151;
  margin-bottom: 8px;
}
.heroTyping {
  font-family: Karla, sans-serif;
  font-size: 22px;
  color: #6b7280;
  min-height: 30px;
  margin-bottom: 28px;
}
.techColor {
  color: #3aa8ff;
  font-weight: 700;
}
.caret {
  color: #3aa8ff;
  font-weight: 700;
}
.hero-cta {
  display: flex;
  gap: 14px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}
.btn {
  display: inline-block;
  font-family: Karla, sans-serif;
  font-weight: 700;
  font-size: 16px;
  padding: 12px 26px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.18s ease;
}
.btn-primary {
  background: #3aa8ff;
  color: #fff;
  box-shadow: 0 6px 16px rgba(58, 168, 255, 0.32);
}
.btn-primary:hover {
  background: #1f93ef;
  transform: translateY(-2px);
}
.btn-ghost {
  border: 2px solid #e5e7eb;
  color: #111827;
}
.btn-ghost:hover {
  border-color: #3aa8ff;
  color: #3aa8ff;
}
.hero-social a {
  color: #9ca3af;
  font-size: 26px;
  margin-right: 18px;
  transition: color 0.18s ease;
}
.hero-social a:hover {
  color: #3aa8ff;
}
.hero-image-wrap {
  flex: 0 0 320px;
  display: flex;
  justify-content: flex-end;
}
.heroImage {
  width: 100%;
  max-width: 320px;
  border-radius: 16px;
}

/* ---------- Sections ---------- */
.section {
  padding: 56px 0;
  border-top: 1px solid #f1f1f1;
}
.sectionTitle {
  font-family: Karla, sans-serif;
  font-weight: 700;
  font-size: 36px;
  letter-spacing: -0.02em;
  color: #111827;
  margin-bottom: 28px;
  position: relative;
  display: inline-block;
}
.sectionTitle::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 48px;
  height: 4px;
  background: #3aa8ff;
  border-radius: 2px;
}

/* ---------- About ---------- */
.aboutSummary {
  font-family: Karla, sans-serif;
  font-size: 20px;
  line-height: 1.6;
  color: #374151;
  max-width: 820px;
  margin-bottom: 24px;
}
.highlights {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 28px;
  max-width: 820px;
}
.highlights li {
  font-family: Karla, sans-serif;
  font-size: 17px;
  color: #374151;
}
.highlights i {
  color: #3aa8ff;
  margin-right: 8px;
}

/* ---------- Skills ---------- */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}
.skill-card {
  background: #fafbfc;
  border: 1px solid #eef0f3;
  border-radius: 12px;
  padding: 20px;
  transition: box-shadow 0.18s ease, transform 0.18s ease;
}
.skill-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}
.skill-group {
  font-family: Karla, sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 12px;
}
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.tag {
  font-family: Karla, sans-serif;
  font-size: 14px;
  color: #1f6fb0;
  background: #e9f5ff;
  padding: 5px 12px;
  border-radius: 999px;
}

/* ---------- Timeline ---------- */
.timeline {
  position: relative;
  padding-left: 28px;
}
.timeline::before {
  content: "";
  position: absolute;
  left: 6px;
  top: 6px;
  bottom: 6px;
  width: 2px;
  background: #e5e7eb;
}
.timeline-item {
  position: relative;
  padding-bottom: 36px;
}
.timeline-item:last-child {
  padding-bottom: 0;
}
.timeline-marker {
  position: absolute;
  left: -28px;
  top: 6px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #3aa8ff;
  border: 3px solid #fff;
  box-shadow: 0 0 0 2px #3aa8ff;
}
.job-head {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 10px;
}
.job-role {
  font-family: Karla, sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #111827;
}
.job-company {
  font-family: Karla, sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #3aa8ff;
}
.job-meta {
  font-family: Karla, sans-serif;
  font-size: 15px;
  color: #9ca3af;
  margin: 4px 0 12px;
}
.job-bullets {
  margin: 0;
  padding-left: 18px;
}
.job-bullets li {
  font-family: Karla, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: #374151;
  margin-bottom: 6px;
}
.also-roles {
  margin-top: 40px;
}
.also-title {
  font-family: Karla, sans-serif;
  font-size: 18px;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 12px;
}
.also-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.also-item a,
.also-item span {
  font-family: Karla, sans-serif;
  font-size: 16px;
  color: #374151;
  text-decoration: none;
  background: #fafbfc;
  border: 1px solid #eef0f3;
  border-radius: 10px;
  padding: 10px 16px;
  display: inline-block;
}
.also-item a:hover {
  border-color: #3aa8ff;
}
.also-dur {
  color: #9ca3af;
  margin-left: 6px;
}

/* ---------- Projects ---------- */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}
.project-card {
  display: block;
  text-decoration: none;
  background: #fff;
  border: 1px solid #eef0f3;
  border-radius: 14px;
  overflow: hidden;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
.project-card:hover {
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}
.project-image {
  height: 180px;
  overflow: hidden;
  background: #f3f4f6;
}
.project-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.project-body {
  padding: 18px 20px 22px;
}
.project-tag {
  font-family: Karla, sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #3aa8ff;
  font-weight: 700;
}
.project-title {
  font-family: Karla, sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  margin: 6px 0 8px;
}
.project-desc {
  font-family: Karla, sans-serif;
  font-size: 15px;
  line-height: 1.5;
  color: #6b7280;
}

/* ---------- Responsive ---------- */
@media screen and (max-width: 820px) {
  .hero {
    flex-direction: column-reverse;
    text-align: center;
    padding: 50px 0 30px;
    min-height: auto;
  }
  .hero-image-wrap {
    justify-content: center;
    flex-basis: auto;
  }
  .heroImage {
    max-width: 220px;
  }
  .heroName {
    font-size: 44px;
  }
  .heroDescription {
    font-size: 21px;
  }
  .hero-cta,
  .hero-social {
    justify-content: center;
    display: flex;
  }
  .highlights {
    grid-template-columns: 1fr;
  }
  .sectionTitle {
    font-size: 30px;
  }
}
</style>
