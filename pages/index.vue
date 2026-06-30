<template>
  <div>
    <section class="container">
      <!-- HERO -->
      <div class="hero">
        <div class="hero-text">
          <p class="heroHello">Hello, I'm</p>
          <h1 class="heroName">Honey Thakuria</h1>
          <p class="heroDescription">
            Full-Stack Engineer building end-to-end systems at scale.
          </p>
          <p class="heroTyping">
            I create things with
            <span class="techColor">{{ tech }}</span>
            <span v-if="showTyping" class="caret">|</span>
          </p>
          <p class="hero-cta-hint">Explore <i class="fas fa-arrow-down"></i></p>
          <div class="hero-cta">
            <a class="btn btn-cta" href="#experience" @click.prevent="scrollTo('experience')">
              <i class="fas fa-briefcase"></i> Experience
              <i class="fas fa-chevron-down trail"></i>
            </a>
            <nuxt-link class="btn btn-cta" to="/blogs">
              <i class="fas fa-pen-nib"></i> Articles &amp; Talks
            </nuxt-link>
            <a class="btn btn-cta" href="/resume.pdf" target="_blank" rel="noopener">
              <i class="fas fa-download"></i> Resume
            </a>
            <nuxt-link class="btn btn-cta" to="/contact">
              <i class="fas fa-paper-plane"></i> Get in touch
            </nuxt-link>
            <a class="btn btn-cta" href="#projects" @click.prevent="scrollTo('projects')">
              <i class="fas fa-folder-open"></i> Projects
              <i class="fas fa-chevron-down trail"></i>
            </a>
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
        <p class="sectionEyebrow"><span class="num">01</span> Get to know me</p>
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
        <p class="sectionEyebrow"><span class="num">02</span> What I work with</p>
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

      <!-- PROJECTS -->
      <div class="section" id="projects">
        <p class="sectionEyebrow"><span class="num">03</span> Things I've built</p>
        <h2 class="sectionTitle">Open-Source Projects</h2>
        <p class="projectsIntro">
          A few things I've built in the open. More on
          <a href="https://github.com/honey93" target="_blank" rel="noopener">GitHub</a>.
        </p>
        <div class="projects-grid">
          <a
            class="project-card"
            v-for="project in $store.state.projects"
            :key="project.id"
            :href="project.url"
            target="_blank"
            rel="noopener"
          >
            <div class="project-thumb" v-if="project.image">
              <img :src="'/' + project.image" :alt="project.name" />
            </div>
            <div class="project-thumb project-thumb--placeholder" v-else>
              <i class="fas fa-code"></i>
            </div>
            <div class="project-body">
              <div class="project-head">
                <h3 class="project-name">{{ project.name }}</h3>
                <div class="project-stats">
                  <span class="stat" v-if="project.stars"><i class="fas fa-star"></i> {{ project.stars }}</span>
                  <span class="stat" v-if="project.forks"><i class="fas fa-code-branch"></i> {{ project.forks }}</span>
                </div>
              </div>
              <p class="project-desc">{{ project.description }}</p>
              <div class="project-tags">
                <span class="tag" v-for="(t, i) in project.tech" :key="i">{{ t }}</span>
              </div>
            </div>
          </a>
        </div>
      </div>

      <!-- EXPERIENCE TIMELINE -->
      <div class="section" id="experience">
        <p class="sectionEyebrow"><span class="num">04</span> Where I've worked</p>
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
        "AI Agents",
        "MCP",
        "LLM Apps",
        "RAG",
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
    },
    scrollTo(id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
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
  color: var(--text-subtle);
  margin-bottom: 4px;
}
.heroName {
  font-family: Karla, sans-serif;
  font-weight: 700;
  font-size: 64px;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--text);
  margin-bottom: 16px;
}
.heroDescription {
  font-family: Karla, sans-serif;
  font-size: 26px;
  color: var(--text-muted);
  margin-bottom: 8px;
}
.heroTyping {
  font-family: Karla, sans-serif;
  font-size: 22px;
  color: var(--text-subtle);
  min-height: 30px;
  margin-bottom: 28px;
}
.techColor {
  color: var(--accent);
  font-weight: 700;
}
.caret {
  color: var(--accent);
  font-weight: 700;
}
.hero-cta-hint {
  font-family: Karla, sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-faint);
  margin-bottom: 12px;
}
.hero-cta-hint i {
  color: var(--accent);
  margin-left: 4px;
  animation: hintBob 1.6s ease-in-out infinite;
}
@keyframes hintBob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(3px); }
}
.hero-cta {
  display: flex;
  gap: 12px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: Karla, sans-serif;
  font-weight: 700;
  font-size: 16px;
  padding: 12px 22px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.18s ease;
}
.btn-cta {
  background: transparent;
  color: var(--text);
  border: 1.5px solid var(--border);
  cursor: pointer;
}
.btn-cta i:first-child {
  color: var(--accent);
  font-size: 14px;
  transition: color 0.18s ease;
}
.btn-cta .trail {
  font-size: 11px;
  color: var(--text-faint);
  margin-left: 2px;
}
.btn-cta:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-soft);
  transform: translateY(-2px);
}
.btn-cta:hover i {
  color: var(--accent);
}
.btn-cta:hover .trail {
  transform: translateY(2px);
}
.hero-social a {
  color: var(--text-faint);
  font-size: 26px;
  margin-right: 18px;
  transition: color 0.18s ease;
}
.hero-social a:hover {
  color: var(--accent);
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
  padding: 72px 0;
  border-top: 1px solid var(--border-soft);
}
.sectionEyebrow {
  font-family: Karla, sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-faint);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.sectionEyebrow .num {
  color: var(--accent);
  font-variant-numeric: tabular-nums;
}
.sectionTitle {
  font-family: Karla, sans-serif;
  font-weight: 700;
  font-size: 38px;
  letter-spacing: -0.02em;
  color: var(--text);
  margin-bottom: 32px;
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
  background: var(--accent);
  border-radius: 2px;
}

/* ---------- About ---------- */
.aboutSummary {
  font-family: Karla, sans-serif;
  font-size: 20px;
  line-height: 1.6;
  color: var(--text-muted);
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
  color: var(--text-muted);
}
.highlights i {
  color: var(--accent);
  margin-right: 8px;
}

/* ---------- Skills ---------- */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}
.skill-card {
  background: var(--bg-elev);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px;
  transition: box-shadow 0.18s ease, transform 0.18s ease;
}
.skill-card:hover {
  box-shadow: 0 8px 24px var(--card-shadow);
  transform: translateY(-2px);
}
.skill-group {
  font-family: Karla, sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
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
  color: var(--accent-strong);
  background: var(--accent-soft);
  padding: 5px 12px;
  border-radius: 999px;
}

/* ---------- Projects ---------- */
.projectsIntro {
  font-family: Karla, sans-serif;
  font-size: 17px;
  color: var(--text-subtle);
  margin-top: -12px;
  margin-bottom: 28px;
}
.projectsIntro a {
  color: var(--accent);
  font-weight: 700;
  text-decoration: none;
}
.projectsIntro a:hover {
  text-decoration: underline;
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 22px;
}
.project-card {
  display: flex;
  flex-direction: column;
  background: var(--bg-elev);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  text-decoration: none;
  transition: box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
}
.project-card:hover {
  box-shadow: 0 14px 30px var(--card-shadow);
  transform: translateY(-3px);
  border-color: var(--accent);
}
.project-thumb {
  height: 168px;
  overflow: hidden;
  background: var(--accent-soft);
}
.project-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.project-thumb--placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  font-size: 44px;
}
.project-body {
  padding: 18px 20px 22px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.project-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
}
.project-name {
  font-family: Karla, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: var(--text);
}
.project-stats {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
}
.project-stats .stat {
  font-family: Karla, sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: var(--text-subtle);
}
.project-stats .stat i {
  color: var(--accent);
  margin-right: 3px;
}
.project-desc {
  font-family: Karla, sans-serif;
  font-size: 15px;
  line-height: 1.55;
  color: var(--text-muted);
  margin-bottom: 14px;
  flex: 1;
}
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}
.project-tags .tag {
  font-family: Karla, sans-serif;
  font-size: 13px;
  color: var(--accent-strong);
  background: var(--accent-soft);
  padding: 4px 11px;
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
  background: var(--border);
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
  background: var(--accent);
  border: 3px solid var(--bg);
  box-shadow: 0 0 0 2px var(--accent);
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
  color: var(--text);
}
.job-company {
  font-family: Karla, sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: var(--accent);
}
.job-meta {
  font-family: Karla, sans-serif;
  font-size: 15px;
  color: var(--text-faint);
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
  color: var(--text-muted);
  margin-bottom: 6px;
}
.also-roles {
  margin-top: 40px;
}
.also-title {
  font-family: Karla, sans-serif;
  font-size: 18px;
  color: var(--text-faint);
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
  color: var(--text-muted);
  text-decoration: none;
  background: var(--bg-elev);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 10px 16px;
  display: inline-block;
}
.also-item a:hover {
  border-color: var(--accent);
}
.also-dur {
  color: var(--text-faint);
  margin-left: 6px;
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
