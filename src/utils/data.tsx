import {
  GithubLogo,
  Globe,
  LinkedinLogo,
  TwitterLogo,
  FilePdf,
  EnvelopeSimple,
} from "phosphor-react";
import { IApp } from "./interfaces";

const app: IApp = {
  title: "Nimi.io",
  desc: "Nimi's Porfolio and Resume",
  hero: {
    tag: "hero",
    name: "Ibukun-Odunsi Toluwanimi",
    catchPhrase: "Software Engineer",
    text: "Experienced",
    greeting: "Hey, I'm Nimi.io",
    desc: "<p>Software Engineer</p>",
  },
  about: {
    tag: "about",
    name: "Nimi",
    bio: "As an experienced software engineer, I've collaborated with diverse and talented teams to deliver cutting-edge web projects. My expertise lies in seamlessly integrating design and technical excellence, with meticulous attention to detail. I actively work with and continuously refine the following tools and skillset.<p/>",

    skills: [
      {
        title: "I'm proficient and actively working with",
        list: [
          {
            name: "language",
            data: ["javascript", "typescript", "GoLang", "Python"],
          },
          {
            name: "Backend",
            data: [
              "NodeJs",
              "ExpressJs",
              "NestJs",
              "Golang",
              "Python",
              "Django",
              "Flask",
            ],
          },
          {
            name: "Devops",
            data: ["Linux Server", "Digital Ocean", "CI/CD"],
          },
          {
            name: "database",
            data: ["MongoDb", "Postgres", "SQL"],
          },
          // { name: "animation", data: ["GSAP"] },
          { name: "others", data: ["git", "firebase", "docker"] },
        ],
      },
    ],
  },
  contact: {
    tag: "contact",
    email: "ibukunoluwaodunsi@gmail.com",
    urls: [
      {
        icon: <FilePdf size={22} />,
        url: "https://docs.google.com/document/d/1H2R6EIeDXhbrjmEruQIN1DE4SjSOU6ZB/edit?usp=sharing&ouid=116648695553061576370&rtpof=true&sd=true",
        title: "Resume",
      },
      {
        icon: <LinkedinLogo size={22} />,
        url: "https://www.linkedin.com/in/nimi-io/",
        title: "Linkedin",
      },
      {
        icon: <TwitterLogo size={22} />,
        url: "https://twitter.com/TheOnlyNimi",
        title: "Twitter",
      },
      {
        icon: <GithubLogo size={22} />,
        url: "https://github.com/nimi-io",
        title: "Github",
      },
    ],
  },

  experience: {
    tag: "experience",
    experiences: [
      {
        companyName: "Figorr [Formerlly Gricd]",
        companyLink: "Figorr.com",
        duration: "January 2021 - Till date",
        jobTitle: "Software Engineer",
        workDone: [
          "Orchestrated a high-performing team to develop and deploy software components that automated manual processes, culminating in a remarkable 35% surge in productivity within the organization.",
          "Developed high-performance databases that reduced data processing time by 25%.",
          "Advised on optimal server hardware and software solutions, resulting in an 80% decrease in system downtime.",
          "Strategized effective test plans, resulting in a 90% decrease in post-release defects.",
          "Led cross-functional teams in the successful delivery of complex projects, ensuring alignment with business objectives and timelines.",
          "Implemented agile methodologies, enhancing team collaboration and accelerating project delivery by 20%.",
          "Optimized codebase for scalability and performance, resulting in a 40% improvement in application responsiveness.",
          "Mentored junior team members, fostering their professional growth and improving team cohesion.",
          "Contributed to the development of company-wide coding standards and best practices, ensuring consistency and quality across projects.",
        ],
      },
      {
        companyName: "Go54 [formerly whogohost]",
        companyLink: "",
        duration: "2024",
        jobTitle: "Backend Developer [contract]",
        workDone: [
          "Enhanced the backend infrastructure by implementing new features and optimizations using Node.js, NestJs, AdonisJs, and ExpressJs, resulting in significant improvements in performance and responsiveness.",
          "Led the design and implementation of key features for the Express and AdonisJs API, driving efficiency gains and enhancing overall system functionality.",
          "Streamlined the Node.js CI/CD pipeline through GitHub Actions by integrating new features seamlessly, resulting in a notable 50% reduction in integration time.",
          "Demonstrated expertise in DevOps methodologies by integrating and deploying new features seamlessly within the existing infrastructure.",
        ],
      },
      {
        companyName: "Autotrack",
        companyLink: "",
        duration: "2023",
        jobTitle: "Backend Developer [contract]",
        workDone: [
          "Crafted the application from inception, architecting a robust Node.js + NestJs backend to facilitate user growth, significantly boosting performance and responsiveness.",
          "Led the development efforts for the NestJs API, resulting in notable efficiency gains and enhanced system functionality.",
          "Introduced and managed a comprehensive Node.js CI/CD pipeline (implemented via GitLab), effectively halving integration time and reducing delivery time by 25%.",
        ],
      },
      {
        companyName: "Electran Technologies",
        companyLink: "",
        duration: "2023",
        jobTitle: "Backend Developer [contract]",
        workDone: [
          "Optimized the Node.js + Express backend, significantly enhancing performance and responsiveness, resulting in a remarkable increase in user growth.",
          "Streamlined MongoDB operations through strategic schema design and indexing techniques, accelerating query speeds and improving system efficiency.",
          "Led the development of the Express API, achieving a notable increase in user satisfaction.",
          "Implemented a robust Node.js CI/CD pipeline (using GitLab), effectively reducing integration time and delivery time.",
        ],
      },
      {
        companyName: "OurCraft Ventures",
        companyLink: "",
        duration: "2020 - 2021",
        jobTitle: "Hardware Design Engineer",
        workDone: [
          "Enhanced existing software by debugging, optimizing, and adapting it to new hardware, resulting in a remarkable 20% increase in software efficiency.",
          "Conducted hardware tests and performed regular maintenance on electronic systems to ensure optimal performance and reliability.",
        ],
      },
      {
        companyName: "Rivents Lab",
        companyLink: "",
        duration: "2019 - 2021",
        jobTitle: "Embedded Systems Developer",
        workDone: [
          "Conducted thorough inspections of automation mechanisms to ensure compliance with quality standards and flawless installation, resulting in a 20% reduction in downtime.",
          "Compiled and maintained comprehensive technical records to facilitate efficient planning and troubleshooting for future projects, saving an estimated 100 hours per project.",
          "Troubleshooted and resolved equipment and system issues, implementing innovative design solutions to optimize performance and increase efficiency by 15%.",
        ],
      },
    ],
  },

  project: {
    tag: "project",
    deskTopProjects: [
      {
        title: "enterprse.figorr.com",
        tags: ["NestJs", "ExpressJs", "GitHub", "Linux", "Stm32", "Arduino"],
        desc: "Figorr is a provider of cold chain solutions that specializes in temperature-controlled products, temperature monitoring solutions, and cold chain services.",
        imgUrl: "assets/images/figorr.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://wano.finance/",
            tooltip: "View the web",
          },
        ],
      },

      {
        title: "BodSquare by Go54",
        tags: ["Express", "Adonis", "Linux"],
        desc: "GO54 provides all-inclusive cloud solutions for online presence",
        imgUrl: "assets/images/bodsquare.png",

        links: [
          {
            icon: <Globe size={24} />,
            url: "https://muqee.ai",
            tooltip: "View the web",
          },
        ],
      },

      // {
      //   title: "Advice App",
      //   tags: ["vue"],
      //   desc: "Get life advices with this application.",
      //   imgUrl: "assets/images/Screenshot-AdviceApp.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://rukkies-adviceapp.netlify.app",
      //       tooltip: "View the web",
      //     },

      //     {
      //       icon: <GithubLogo size={24} />,
      //       url: "https://github.com/rukkiechovwe/advice_app_vue3",
      //       tooltip: "View on github",
      //     },
      //   ],
      // },

      // {
      //   title: "Fem GPT",
      //   tags: ["react", "tailwind", "AI"],
      //   desc: "Female health advisor",
      //   imgUrl: "assets/images/Screenshot-FemGPT.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://fem-gpt.vercel.app/",
      //       tooltip: "View the web",
      //     },
      //     {
      //       icon: <GithubLogo size={24} />,
      //       url: "https://github.com/rukkiechovwe/fem-gpt",
      //       tooltip: "View on github",
      //     },
      //   ],
      // },

      // {
      //   title: "Metadapp",
      //   tags: ["react", "MUI", "Web3"],
      //   desc: "An all in one Web3 dashboard",
      //   imgUrl: "assets/images/Screenshot-Metadapp.png",

      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://metadapp.com",
      //       tooltip: "View the web",
      //     },
      //   ],
      // },

      // {
      //   title: "Art gallery",
      //   tags: ["HTML", "CSS", "JS"],
      //   desc: "Simple art gallery website template",
      //   imgUrl: "assets/images/Screenshot-ArtGallery.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://rukkies-art-gallery.netlify.app",
      //       tooltip: "View the web",
      //     },

      //     {
      //       icon: <GithubLogo size={24} />,
      //       url: "https://github.com/rukkiechovwe/Art-gallery",
      //       tooltip: "View on github",
      //     },
      //   ],
      // },
    ],
    projects: [
      {
        title: "Wano.finance",
        tags: ["nextjs", "tailwind", "metamask"],
        desc: "Web3 omnichain payment infrastructure",
        imgUrl: "assets/images/Screenshot-Wano.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://wano.finance/",
            tooltip: "View the web",
          },
        ],
      },

      {
        title: "Fem GPT",
        tags: ["react", "tailwind CSS", "AI"],
        desc: "Female health advisor",
        imgUrl: "assets/images/Screenshot-FemGPT.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://fem-gpt.vercel.app/",
            tooltip: "View the web",
          },
          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/rukkiechovwe/fem-gpt",
            tooltip: "View on github",
          },
        ],
      },

      {
        title: "MuqeeAI",
        tags: ["react", "nextJS", "tailwind CSS"],
        desc: "Content creation on Autopilot.",
        imgUrl: "assets/images/Screenshot-Muqee.png",

        links: [
          {
            icon: <Globe size={24} />,
            url: "https://muqee.ai",
            tooltip: "View the web",
          },
        ],
      },

      {
        title: "Metadapp",
        tags: ["react", "MUI", "Web3"],
        desc: "An all in one Web3 dashboard",
        imgUrl: "assets/images/Screenshot-Metadapp.png",

        links: [
          {
            icon: <Globe size={24} />,
            url: "https://metadapp.com",
            tooltip: "View the web",
          },
        ],
      },

      {
        title: "RK-Store",
        tags: ["react", "styled-component"],
        desc: "An elegant ecommerce application.",
        imgUrl: "assets/images/Screenshot-RK-Store.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://rukkies-ecommerce.netlify.app/",
            tooltip: "View the web",
          },
          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/rukkiechovwe/ecommerce",
            tooltip: "View on github",
          },
        ],
      },

      {
        title: "kivifood",
        tags: ["react", "styled-component"],
        desc: "Get the food you want from the comfort of your home.",
        imgUrl: "assets/images/Screenshot-Kivi.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://kivifood.netlify.app/",
            tooltip: "View the web",
          },
        ],
      },
      // {
      //   title: "TodoApp",
      //   tags: ["react"],
      //   desc: "Todo list application.",
      //   imgUrl: "assets/images/Screenshot-TodoApp.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://rukkiechovwe.github.io/myapp",
      //       tooltip: "View the web",
      //     },

      //     {
      //       icon: <GithubLogo size={24} />,
      //       url: "https://github.com/rukkiechovwe/myapp",
      //       tooltip: "View on github",
      //     },
      //   ],
      // },

      // {
      //   title: "Icompresser",
      //   tags: ["HTML", "CSS", "JS"],
      //   desc: "Icompresser website",
      //   imgUrl: "assets/images/Screenshot-ImgCompresser.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://www.icompresser.com/",
      //       tooltip: "View the web",
      //     },
      //   ],
      // },

      {
        title: "lastprice",
        tags: ["react", "redux", "ant design"],
        desc: "Buy and sell products at discounted or slashed prices.",
        imgUrl: "assets/images/Screenshot-Lastprice.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://amazing-torvalds-02adef.netlify.app",
            tooltip: "View the web",
          },

          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/iamstanlee/last-price",
            tooltip: "View on github",
          },
        ],
      },

      {
        title: "Advice App",
        tags: ["vue"],
        desc: "Get life advices with this application.",
        imgUrl: "assets/images/Screenshot-AdviceApp.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://rukkies-adviceapp.netlify.app",
            tooltip: "View the web",
          },

          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/rukkiechovwe/advice_app_vue3",
            tooltip: "View on github",
          },
        ],
      },

      // {
      //   title: "Art gallery",
      //   tags: ["HTML", "CSS", "JS"],
      //   desc: "Simple art gallery website template",
      //   imgUrl: "assets/images/Screenshot-ArtGallery.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://rukkies-art-gallery.netlify.app",
      //       tooltip: "View the web",
      //     },

      //     {
      //       icon: <GithubLogo size={24} />,
      //       url: "https://github.com/rukkiechovwe/Art-gallery",
      //       tooltip: "View on github",
      //     },
      //   ],
      // },
    ],
  },

  socials: {
    tag: "socials",
    urls: [
      {
        icon: <EnvelopeSimple size={24} />,
        url: "mailto:ibukunoluwaodunsi@gmail.com",
        title: "Email",
      },
      {
        icon: <LinkedinLogo size={24} />,
        url: "https://linkedin.com/in/nimi-io",
        title: "Linkedin",
      },
      {
        icon: <TwitterLogo size={24} />,
        url: "https://twitter.com/TheOnlyNimi",
        title: "Twitter",
      },
      {
        icon: <GithubLogo size={24} />,
        url: "https://github.com/nimi-io",
        title: "Github",
      },
    ],
  },
};

export default app;
