<template>
  <div>
    <section class="container">
      <div class="heroBanner">
        <div class="row">
          <div class="col-md-7">
            <p class="heroHello">Hello!</p>
            <p class="heroName">I’m Honey</p>
            <p
              class="heroDescription"
            >I’m a Full-Stack Developer. I enjoy building end to end system for masses.</p>
            <p class="heroDescription">I create apps using <span class="techColor"> {{this.tech}} </span> <span v-if="showTyping"> | </span> </p>
          </div>
          <div class="col-md-5">
            <img src="~/static/honeythakuria.png" class="heroImage" />
          </div>
        </div>
      </div>

      <div class="stuffSection">
        <div class="row">
          <div class="col-md-6">
            <h1 class="stuffTitle">Stuff I've done</h1>
            <div
              class="stuffParent"
              v-for="individualStuff in $store.state.stuff"
              :key="individualStuff.id"
              v-if="individualStuff.id < 3"
            >
              <a :href="individualStuff.url" target="_blank">
                <div class="stuffImage hover-class work">
                  <img :src="individualStuff.imageUrl" class="stuffImageActual" />
                </div>
                <div class="stuffText work-left">
                  <p class="stuffTextTitle">{{individualStuff.title}}</p>
                  <p class="stuffDesc">
                    <span class="publicationText"> Work Type:</span>
                   <span class="typeWork"> {{individualStuff.publication}} </span>
                  </p>
                  
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-6">
            <div
              class="stuffParent-right"
              v-for="individualStuff in $store.state.stuff"
              :key="individualStuff.id"
              v-if="individualStuff.id >= 3"
            >
              <a :href="individualStuff.url" target="_blank">
                <div class="stuffImage hover-class work">
                  <img :src="individualStuff.imageUrl" class="stuffImageActual" />
                </div>
                <div class="stuffText work-left">
                  <p class="stuffTextTitle">{{individualStuff.title}}</p>
                  <p class="stuffDesc">
                    <span class="publicationText"> Work Type:</span>
                    <span class="typeWork"> {{individualStuff.publication}} </span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="stuffSection">
        <div class="row">
          <div class="col-md-6">
            <h1 class="stuffTitle">Places I've worked</h1>
            <div
              class="stuffParent"
              v-for="individualCompany in $store.state.companies"
              :key="individualCompany.id"
              v-if="individualCompany.id < 3"
            >
              <div class="stuffImage">
                <img :src="individualCompany.url" class="stuffImageActual" />
              </div>
              <div class="stuffText">
                <p class="companyTitle">{{individualCompany.name}}</p>
                <p class="companyDuration">{{individualCompany.duration}}</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div
              class="stuffParent-right"
              v-for="individualCompany in $store.state.companies"
              :key="individualCompany.id"
              v-if="individualCompany.id >= 3"
            >
              <div class="stuffImage">
                <img :src="individualCompany.url" class="stuffImageActual" />
              </div>
              <div class="stuffText">
                <p class="companyTitle">{{individualCompany.name}}</p>
                <p class="companyDuration">{{individualCompany.duration}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div>
        <img src="~/static/honeythakuria.jpeg"  class="main_image"/>
        <h3>Honey Thakuria</h3>
        <h3 class="titlePosition" >Developer, Blogger, Entrepreneur</h3>
        
      </div>-->
    </section>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  mounted() {
    let j = 0;
    let tempArr = this.arrayTech[j].split("");
    let i = 0;

    setInterval(() => {
      this.showTyping = !this.showTyping;
      if (i < tempArr.length) {
        this.type(tempArr[i]);
        i++;
      } else {
        this.tech="";
        i=0;
        j++;
        if (j < this.arrayTech.length) {
          tempArr = this.arrayTech[j].split("");
        }else{
          j = 0;
          tempArr = this.arrayTech[j].split("");
        }
      }
    }, 350);
  },
  head() {
    return {
      title: "Honey Thakuria",
      meta: [
        {
          hid: "Personal",
          name: "Honey Thakuria personal Website",
          content:
            "Honey Thakuria is a Full Stack Developer with expertise in Cloud, BlockChain & Web application. He also writes for leading publications on Medium. Check out Honey's blogs, projects here"
        }
      ]
    };
  },
  data() {
    return {
      showTyping:true,
      tech: "",
      arrayTech: [
        "Vue",
        "React",
        "Angular",
        "Node.JS",
        "Python",
        "AWS",
        "MongoDB",
        "Javascript"
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
.techColor{
  color:#3AA8FF;
}
.heroHello {
  font-family: Karla;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 33px;
  color: #4e4e50;
}
.heroName {
  font-family: Karla;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 84px;
  letter-spacing: -0.07em;

  color: #000000;
}

.heroDescription {
  font-family: Karla;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 37px;

  color: #4e4e50;
}
.typeWork{
}
.heroImage {
  float: right;
}
.heroBanner {
  margin-top: 267px;
  margin-bottom: 267px;
}
.stuffSection {
  margin-bottom: 240px;
}
.stuffParent {
  width: 100%;
  max-width: 488px;

  position: relative;
  margin-bottom: 70px;
}
.hover-class:hover{
   box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.24);
}

.height-normal {
  height: 292px;
}
.height-extra {
  height: 305px;
}

.stuffParent-right {
  width: 100%;
  max-width: 488px;
  position: relative;
  margin-bottom: 70px;
  float: right;
}

.stuffImage {
  width: 100%;
  max-width: 488px;
  height: 229px;
  overflow: hidden;
  border-radius: 5px;
}
.stuffImageActual {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.stuffTitle {
  margin-bottom: 140px;
  font-family: Karla;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;

  color: #000000;
}
.stuffText {
  padding: 10px;
}

.work-left{

  border-left: 2px solid orange;
}
.stuffText p {
  margin: 0;
}

@media screen and (max-width: 600px) {
  .heroImage {
    display: none;
  }

  .heroBanner {
    margin-top: 150px;
    margin-bottom: 150px;
  }
}

.stuffTextTitle {
  font-family: Karla;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;

  color: #000000;
}
.stuffDesc {
  font-family: Karla;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;

  color: #000000;
}

.publicationText {
  color: #4e4e50;
}

.companyTitle {
  font-family: Karla;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
}

.companyDuration {
  font-family: Karla;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: #4e4e50;
}

.stuffSection a {
  text-decoration: none;
}

.work{

  margin-bottom: 20px;
}
</style>
