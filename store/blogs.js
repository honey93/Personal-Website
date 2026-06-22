export const state = () => ({ blogs: [] });

export const mutations = {
  getBlogs(state, payload) {
    state.blogs = payload;
  }
};

// Curated from https://medium.com/@HoneyThakuria — most recent first.
const ARTICLES = [
  {
    id: 1,
    title: "Microservices & DevOps at AirAsia",
    date: "Nov 2019",
    claps: "147",
    url:
      "https://medium.com/@HoneyThakuria/microservices-devops-at-airasia-4c2d6f7f8b3e",
    publication: "Medium",
    imageUrl: "AirAsia.png"
  },
  {
    id: 2,
    title: "How to set up responsive UI search in Vue.js",
    date: "Mar 2019",
    claps: "173",
    url:
      "https://medium.freecodecamp.org/how-to-set-up-responsive-ui-search-in-vue-js-bf6007b7fc0f",
    publication: "freeCodeCamp",
    imageUrl:
      "https://cdn-images-1.medium.com/max/1600/1*557yKFY9udPu1QV2_bW9Kw.jpeg"
  },
  {
    id: 3,
    title:
      "How to create a realtime app using Socket.io, React, Node & MongoDB",
    date: "Jan 2019",
    claps: "630",
    url:
      "https://medium.freecodecamp.org/how-to-create-a-realtime-app-using-socket-io-react-node-mongodb-a10c4a1ab676",
    publication: "freeCodeCamp",
    imageUrl:
      "https://cdn-images-1.medium.com/max/1600/1*j_kShofJmfZ_-bEpt1IS8Q.jpeg"
  },
  {
    id: 4,
    title: "Blockchain in Crowdsourcing",
    date: "Oct 2018",
    claps: "239",
    url: "https://hackernoon.com/blockchain-in-crowdsourcing",
    publication: "HackerNoon",
    imageUrl:
      "https://cdn-images-1.medium.com/max/1600/1*1LSHpbDThueykKQQeCkAug.png"
  },
  {
    id: 5,
    title: "How to architect a DApp using Nuxt.js and Nebulas",
    date: "Jul 2018",
    claps: "507",
    url:
      "https://medium.freecodecamp.org/architecting-dapp-using-nuxt-js-nebulas-fc00712ae341",
    publication: "freeCodeCamp",
    imageUrl:
      "https://cdn-images-1.medium.com/max/1600/1*1LSHpbDThueykKQQeCkAug.png"
  },
  {
    id: 6,
    title: "How to handle event handling in JavaScript (with examples)",
    date: "May 2018",
    claps: "584",
    url:
      "https://medium.freecodecamp.org/event-handling-in-javascript-with-examples-f6bc1e2fff57",
    publication: "freeCodeCamp",
    imageUrl:
      "https://cdn-images-1.medium.com/max/1600/1*dhtbZon7OPebZuUO9-yyjw.jpeg"
  },
  {
    id: 7,
    title: "Do you really know the fundamentals of JavaScript?",
    date: "Mar 2018",
    claps: "111",
    url:
      "https://medium.com/@HoneyThakuria/do-you-really-know-the-fundamentals-of-javascript",
    publication: "Medium",
    imageUrl:
      "https://cdn-images-1.medium.com/max/1600/1*dhtbZon7OPebZuUO9-yyjw.jpeg"
  },
  {
    id: 8,
    title:
      "AWS goes down, Bitbucket suffers — architecture design tips for microservices",
    date: "Mar 2018",
    claps: "256",
    url:
      "https://codeburst.io/aws-goes-down-bitbucket-suffers-robust-system-design-tips-2b49f745cdd7",
    publication: "Codeburst.io",
    imageUrl:
      "https://cdn-images-1.medium.com/max/2600/1*Cm8cdGMrTms291x3hl4VEQ.png"
  }
];

export const actions = {
  // Static site: populate synchronously, no network/artificial delay.
  fetchBlogs({ commit }) {
    commit("getBlogs", ARTICLES);
    return Promise.resolve();
  }
};
