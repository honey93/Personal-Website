<template>
  <div>
    <section class="container">
      <h2 class="blogs-page-title">Writing</h2>
      <p class="blogs-sub">
        Selected articles published on freeCodeCamp, Codeburst, HackerNoon and Medium.
      </p>
      <div class="row" v-if="$store.state.blogs.blogs.length">
        <div class="col-md-6 blog" v-for="blog in $store.state.blogs.blogs" :key="blog.id">
          <a :href="blog.url" target="_blank" rel="noopener">
            <div class="blog-card">
              <div class="blogImageParent">
                <img :src="blog.imageUrl" class="blogImage" :alt="blog.title" />
              </div>
              <div class="blog-content">
                <h4 class="blog-title">{{ blog.title }}</h4>
                <div class="blog-meta">
                  <span class="publication">{{ blog.publication }}</span>
                  <span v-if="blog.date" class="dot">·</span>
                  <span v-if="blog.date">{{ blog.date }}</span>
                  <span v-if="blog.claps" class="claps"><i class="fas fa-hand-sparkles"></i> {{ blog.claps }}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head: {
    title: "Writing — Honey Thakuria",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Honey Thakuria writes for leading publications like freeCodeCamp, Codeburst and HackerNoon. Read his articles on JavaScript, Vue, microservices and blockchain."
      }
    ]
  }
};
</script>

<style scoped>
.blogs-page-title {
  margin-top: 40px;
  font-family: Karla, sans-serif;
  font-weight: 700;
  font-size: 40px;
  letter-spacing: -0.02em;
  color: #111827;
}
.blogs-sub {
  font-family: Karla, sans-serif;
  font-size: 18px;
  color: #6b7280;
  margin-bottom: 24px;
}
.blogImageParent {
  height: 200px;
  overflow: hidden;
  background: #f3f4f6;
}
.blogImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.blog-card {
  border: 1px solid #eef0f3;
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
.blog-card:hover {
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
  transform: translateY(-3px);
}
.blog-content {
  padding: 16px 18px 20px;
}
.blog-title {
  font-family: Karla, sans-serif;
  font-weight: 700;
  font-size: 19px;
  line-height: 1.3;
  color: #111827;
  margin-bottom: 10px;
}
.blog-meta {
  font-family: Karla, sans-serif;
  font-size: 14px;
  color: #9ca3af;
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}
.publication {
  color: #3aa8ff;
  font-weight: 700;
}
.claps {
  margin-left: auto;
  color: #6b7280;
}
.blog a {
  text-decoration: none;
  color: #111827;
}
.blog {
  margin-bottom: 24px;
  margin-top: 0;
}
</style>
