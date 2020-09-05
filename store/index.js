export const state = () => {
  return { count: 3,allowedUrls:["how-to-set-up-responsive-ui-search-in-vue-js","vue-blog"],stuff:[
    {
      id: 1,
      title: "EventQ - Live QnA Portal (Angular / PHP / Postgres )",
      url:
        "http://eventq.online/",
      publication: "Startup",
      imageUrl:
        "eventQ.png"
    },
    
    {
      id: 2,
      title:
        "Realtime app using Socket.io, React, Node, MongoDB",
      url:
        "https://github.com/honey93/OrderKitchen",
      publication: "Open-Source",
      imageUrl:
        "orderApp.png"
    },
    {
      id: 3,
      title: "Potential - Reading Habit Building App (React Native)",
      url:
        "https://trypotential.com/",
      publication: "Startup",
      imageUrl:
        "potential.png"
    }
    ,
    {
      id: 4,
      title:
        "Vue App for Wonders of World",
      url:
        "https://github.com/honey93/VueSearchExample",
      publication: "Open-Source",
      imageUrl:
        "vueSearch.png"
    },
    {
      id: 5,
      title: "How to architect a DApp using Nuxt.js and Nebulas",
      url:
        "https://medium.freecodecamp.org/architecting-dapp-using-nuxt-js-nebulas-fc00712ae341",
      publication: "Hackathon - Open-Source",
      imageUrl:
        "https://cdn-images-1.medium.com/max/1600/1*1LSHpbDThueykKQQeCkAug.png"
    }
  ],
  companies:[{id:1,name:"AirAsia",url:"AirAsia.png",duration:"Dec 2018 - Present"},{id:2,name:"Times Internet",url:"TimesInternet.jpeg", duration:"Jan 2018 - Dec 2018"},{id:3,name:"Mantra Labs",url:"MantraLabs.png", duration:"Feb 2017 - Jan 2018"},{id:4,name:"Cognizant",url:"Cognizant.jpeg",duration:"Sep 2015 - Aug 2016"}]


};
};

export const mutations = {
  incr(state) {
    state.count = 5;
  }
};
export const actions = {
  async nuxtServerInit({ dispatch }) {
    console.log("nuxtServerInit called");
    await dispatch("blogs/fetchBlogs");
  }
};
