export const state = () => {
  return {
    count: 3,
    allowedUrls: ["how-to-set-up-responsive-ui-search-in-vue-js", "vue-blog"],

    // Short intro shown in the About section
    about: {
      summary:
        "I'm a Full-Stack Engineer who enjoys building end-to-end systems that serve people at scale — from real-time data platforms to consumer web apps. Over the last decade I've architected event-driven backends, shipped front-ends for millions of users, written for leading engineering publications, and mentored the next wave of developers.",
      highlights: [
        "10+ years building production software across data, web and cloud",
        "Currently shaping data reliability & lineage in Intuit's AI, Data & Analytics org",
        "Open-source contributor and tech blogger (freeCodeCamp, Codeburst.io)",
        "Mentor at Scaler and interviewer at Intervue.io"
      ]
    },

    // Core technologies, grouped for the skills section
    skills: [
      {
        id: 1,
        group: "AI & Agents",
        items: ["LLM Apps (Claude / GPT)", "AI Agents", "MCP (Model Context Protocol)", "A2A (Agent-to-Agent)", "RAG", "Prompt Engineering", "Tool Calling"]
      },
      {
        id: 2,
        group: "Frontend",
        items: ["Vue / Nuxt.js", "React / React Native", "Angular", "Service Workers / PWA"]
      },
      {
        id: 3,
        group: "Backend & Languages",
        items: ["JavaScript / TypeScript", "Python", "Java", "Node.js (Koa / Express)", "Flask", "Spring Boot", "PHP / Laravel"]
      },
      {
        id: 4,
        group: "Data, Cloud & DevOps",
        items: ["Kafka", "Spark", "Hive / BigQuery", "Postgres", "Redis", "MongoDB", "AWS (Lambda, SNS, SQS)", "GCP / GAE", "Docker", "GitLab CI"]
      }
    ],

    // Talks, meetups & sessions (most are on YouTube)
    talks: [
      {
        id: 1,
        title: "Server-Side Rendered Apps using Nuxt.js",
        url: "https://www.youtube.com/watch?v=6H0vPtW-Gzk",
        videoId: "6H0vPtW-Gzk",
        event: "Tech Talk",
        description:
          "A hands-on walkthrough of building SEO-friendly, server-side-rendered applications with Nuxt.js (Vue)."
      },
      {
        id: 2,
        title: "Global Vue Meetup — Vue.js in Production",
        url: "https://www.youtube.com/watch?v=G-rqFVTG0xE&t=1196s",
        videoId: "G-rqFVTG0xE",
        event: "Global Vue Meetup",
        description:
          "Speaking at the Global Vue Meetup alongside Daniel Madalitso Phiri on building real-world apps with Vue.js."
      },
      {
        id: 3,
        title: "Intel RealSense + Unity3D Magic",
        url: "https://www.youtube.com/watch?v=xTCjm4-vc6Y",
        videoId: "xTCjm4-vc6Y",
        event: "SRJNA",
        description:
          "Demoing interactive experiences powered by the Intel RealSense depth camera and Unity3D."
      },
      {
        id: 4,
        title: "Social Crowd Fund — OST Challenge",
        url: "https://www.youtube.com/watch?v=3dzkrYKWLCk",
        videoId: "3dzkrYKWLCk",
        event: "OST Challenge",
        description:
          "Presenting a decentralized social crowdfunding concept built for the OST blockchain challenge."
      }
    ],

    // Full professional timeline (most recent first)
    experience: [
      {
        id: 1,
        role: "Senior Software Engineer",
        company: "Intuit",
        logo: "icon.png",
        duration: "May 2022 – Present",
        location: "Bengaluru, India",
        bullets: [
          "Full-Stack Developer in the AI, Data & Analytics org.",
          "Data Reliability Engineering: built a real-time marketing data attribute tracking system measuring data quality, health metrics and end-to-end lineage across hundreds of Hive tables and Kafka topics.",
          "Data Lineage: built Kafka-producer-powered SDKs that feed dozens of processing systems, tracing lineage from source tables through the data lake to analytics dashboards.",
          "Datamap: contributed to a product in the clean-data domain."
        ]
      },
      {
        id: 2,
        role: "Senior Software Engineer",
        company: "Bayer",
        logo: null,
        duration: "Mar 2021 – May 2022",
        location: "Bangalore, India",
        bullets: [
          "Built solutions for farmers and retailers in the Bayer Crop Science division.",
          "Architected an event-driven system using AWS Lambda, SNS, SQS, Kafka & Postgres.",
          "Practiced TDD with React & Testing Library in a DevOps environment."
        ]
      },
      {
        id: 3,
        role: "Software Engineer 2",
        company: "AirAsia",
        logo: "AirAsia.png",
        duration: "Dec 2018 – Mar 2021",
        location: "Bengaluru, India",
        bullets: [
          "Worked across Flights (Post-Booking) and Hotels lines of business.",
          "Built a food-selection platform for web check-in, customized for 8+ countries.",
          "Architected and developed the Extranet (Hotel Management System).",
          "Built offline apps with Service Workers, Cache API and IndexedDB.",
          "Implemented DevOps for 30+ microservices using GitLab CI and GCP.",
          "Architected a secured, distributed system for Young Passenger Travelling Alone.",
          "Stack: Angular 8, Python (Flask), Node.js (Koa), GAE, Redis, React, Java (Spring Boot), BigQuery."
        ]
      },
      {
        id: 4,
        role: "Full Stack Developer",
        company: "Times Internet",
        logo: "TimesInternet.jpeg",
        duration: "Jan 2018 – Dec 2018",
        location: "Bengaluru, India",
        bullets: [
          "Worked on Willow TV (cricket channel in North America).",
          "Architected a server-side-rendered cricket site with Nuxt.js (Vue) and Vuex.",
          "Built APIs on a microservices architecture with Python (Flask), AWS, Postgres and Redis.",
          "Enabled user data control features using Cassandra, SQL, Kafka and Spark."
        ]
      },
      {
        id: 5,
        role: "Full Stack Developer",
        company: "Mantra Labs",
        logo: "MantraLabs.png",
        duration: "Feb 2017 – Jan 2018",
        location: "Bangalore, India",
        bullets: [
          "Architected a Q&A platform with Node.js, Socket.io, PHP (Laravel), Redis, AngularJS, Webpack & EC2.",
          "Used AWS Lambda, API Gateway & Step Functions for an internal tool.",
          "Built an LMS for Edureka using Angular 4 and Redux."
        ]
      },
      {
        id: 6,
        role: "Co-Founder",
        company: "EventQ",
        logo: "eventQ.png",
        duration: "Aug 2016 – Feb 2017",
        location: "Bangalore, India",
        bullets: [
          "Architected and built EventQ — a smart Q&A app that filters the top crowd questions in minutes.",
          "Launched at 20+ conferences and seminars, in person and remotely.",
          "Explored decentralized DApp development with Nuxt.js and the Nebulas blockchain."
        ]
      },
      {
        id: 7,
        role: "Programmer Analyst Trainee",
        company: "Cognizant",
        logo: "Cognizant.jpeg",
        duration: "Sep 2015 – Aug 2016",
        location: "Bengaluru, India",
        bullets: [
          "Trained across SAP technologies (MM, PP, FICO).",
          "Worked with AngularJS and PHP."
        ]
      }
    ],

    // Other roles, shown compactly
    alsoRoles: [
      {
        id: 1,
        role: "Interviewer",
        company: "Intervue.io",
        duration: "Sep 2025 – Present"
      },
      {
        id: 2,
        role: "Mentor",
        company: "Scaler",
        duration: "May 2022 – Mar 2025",
        url: "https://www.scaler.com/academy/mentor/profile/honey-thakuria/"
      },
      {
        id: 3,
        role: "Tech Blogger",
        company: "Medium",
        duration: "Jul 2016 – Present"
      }
    ],

    // Kept for backward compatibility with any older bindings
    companies: [
      { id: 1, name: "Intuit", url: "icon.png", duration: "May 2022 – Present" },
      { id: 2, name: "AirAsia", url: "AirAsia.png", duration: "Dec 2018 – Mar 2021" },
      { id: 3, name: "Times Internet", url: "TimesInternet.jpeg", duration: "Jan 2018 – Dec 2018" },
      { id: 4, name: "Mantra Labs", url: "MantraLabs.png", duration: "Feb 2017 – Jan 2018" },
      { id: 5, name: "Cognizant", url: "Cognizant.jpeg", duration: "Sep 2015 – Aug 2016" }
    ]
  };
};

export const mutations = {
  incr(state) {
    state.count = 5;
  }
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch("blogs/fetchBlogs");
  }
};
