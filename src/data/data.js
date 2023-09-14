import chatApp from "../assets/chatApp.png";
import Banking from "../assets/Banking.png";
import PharmacyProject from "../assets/PharmacyProject.png";
import portfollio from "../assets/portfollio.png";
import weatherApp from "../assets/weatherApp.png";
import todoApp from "../assets/todoApp.png";

const data = {
  name: "Saksham Jain",
  descriptions: [
    "<b>Software Developer</b>",
    "<b>Web Developer</b>",
    "<b>Competitive Coder</b>",
    "<b>Problem Solver</b>",
  ],
  about: {
    para: "I'm a versatile software developer with a passion for web technologies and problem-solving. Here's what sets me apart:",
    // List is optional
    list: [
      "✨ Innovative Solutions: I create web applications that bring ideas to life, leveraging the latest technologies to craft innovative solutions.",
      "🌟 Challenges Excite Me: I thrive on tackling complex challenges head-on, turning them into opportunities for growth.",
      "🚀 Continuous Learner: I'm always eager to learn and grow, staying up-to-date with industry trends and emerging technologies.",
      "🏆 Achievements: I've achieved a top college rank, solved over 500 coding questions, and scored in the top percentile in JEE Mains.",
      "🌐 Full-Stack Expertise: My skills span the entire web development stack, from frontend design to backend logic and databases.",
    ],
    // Quote is optional
    quote: {
      quote:
        "It's not what you achieve, it's what you overcome. That's what defines your career.",
      author: "Carlton Fisk",
    },
  },
  experience: [
    {
      id: "4",
      degree: "Trainee Engineer",
      place: "Principal Global Services - Hyderabad",
      detail: [
        "Worked on real-life projects implemented new features",
        "Got a chance to know about Cloud infrastructure",
      ],
      Tag: ["Python", "Angular", "Java", "AWS"],
      date: "Aug-2023 - Present",
    },
    {
      id: "3",
      degree: "Software Engineer Intern",
      place: "Principal Global Services - Remote",
      detail: [
        "Got to learn about Full Stack web development with React.js and Spring boot",
        "Created a fully functional Hotel Management Website",
      ],
      Tag: ["Html/CSS", "React.js", "Spring boot"],
      date: "Jan-2023 - Apr-2023",
    },
    {
      id: "2",
      degree: "Cyber Security Research Intern",
      place: "SISTMR Australia - Remote",
      detail: [
        "Learned About Kali Linux, WireShark and basics of Cyber Security",
      ],
      Tag: ["Linux", "Security"],
      date: "Feb-2022 - May-2022",
    },
    {
      id: "1",
      degree: "Web Developer And Design Intern",
      place: "The Sparks Foundation - Remote",
      detail: [
        "Got to know about FullStack Web Development",
        "Created a basic banking website",
      ],
      Tag: ["Php", "SQL", "Javascript"],
      date: "July-2021 - Aug-2021",
    },
  ],
  academics: [
    {
      id: "4",
      degree: "Bachelor of Technology (Computer Science Engineering)",
      place: "Medi-Caps University, Indore(M.P)",
      detail: "CGPA: 8.8",
      date: "2019 - 2023",
      icon: true,
    },
    {
      id: "3",
      degree: "CCNAv7: Introduction to Networks (Certification)",
      place: "Cisco Networking Academy",
      detail: "Percentage: 98.38%",
      date: "July 2022 - Aug 2022",
      icon: false,
    },
    {
      id: "2",
      degree: "Higher Secondary / XIIth (PCM)",
      place: "Jai Academy School (CBSE), Jhansi(U.P)",
      detail: "Percentage: 72.6%",
      date: "2018 - 2019",
      icon: true,
    },
    {
      id: "1",
      degree: "Secondary / Xth",
      place: "Jai Academy School (CBSE), Jhansi(U.P)",
      detail: "CGPA: 8.4",
      date: "2016 - 2017",
      icon: true,
    },
  ],

  // todo need to update project data.
  projects: [
    {
      name: "Chatting WebApp",
      detail:
        "A user-friendly chatting platform. Users can effortlessly login, sign-up, and engage in real-time conversations.",
      link1: "https://github.com/saksham-jain1/Mern-Chat-App",
      link2: "https://chatting-app-0.herokuapp.com",
      tech: ["MERN Stack", "Chakra-Ui", "Socket.io", "JWT"],
      status: "completed",
      img: chatApp,
    },
    {
      name: "My Portfollio",
      detail:
        "The website showcases my professional work and enables visitors to easily connect with me.",
      link1: "https://github.com/saksham-jain1/Portfollio",
      link2: "https://my-portfollio.herokuapp.com/",
      tech: ["MERN Stack", "Chakra-Ui"],
      status: "completed",
      img: portfollio,
    },
    {
      name: "Pharmacy Website",
      detail:
        "A simple Ecommerce Website for Medicines which has 3 types of user: buyer, seller, admin with different permissions and usage. Here a user can buy medicine consult a Dr. and much more. This is created using HTML/CSS, Bootstap, JS, PHP, MySql, SMTP server",
      link1: "https://github.com/saksham-jain1/pharmacy_management.github.io",
      link2: "",
      status: "completed",
      img: PharmacyProject,
    },
    {
      name: "Banking Website",
      detail:
        "A Basic Banking Website created during sparks foundation internship. A user can create account in this and can do money transfer. This created using HTML/CSS, JS, BootStrap, PHP, MySql.",
      link1: "https://github.com/saksham-jain1/Banking-Website.github.io",
      link2: "",
      status: "completed",
      img: Banking,
    },
    {
      name: "Todo App",
      detail:
        "A clone of Trello Web app where a user can manage day to day tasks, can make multiple lists of Cards, edit tasks, drag from one list to another. And all the data will be stored locally. This is created with Reactjs, Chakra-Ui, React DND",
      link1: "https://github.com/saksham-jain1/todo-list",
      link2: "https://todo-list-011.herokuapp.com/",
      status: "completed",
      img: todoApp,
    },
    {
      name: "Weather App",
      detail:
        "A simple Weather WebApp which shows hourly and weakly weather data forecast using OpenWeather API. This is created using Reactjs, Chakra-Ui, OpenWeather API.",
      link1: "https://github.com/saksham-jain1/WeatherWebApp",
      link2: "https://weather-web-app-rosy.vercel.app/",
      status: "completed",
      img: weatherApp,
    },
    {
      name: "Movie Recomendation System",
      detail: "",
      link1: "#",
      link2: "",
      status: "ongoing",
      img: "",
    },
    {
      name: "Basic Photo Editor",
      detail: "",
      link1: "#",
      link2: "",
      status: "ongoing",
      img: "",
    },
    {
      name: "Discord App Clone",
      detail: "",
      link1: "#",
      link2: "",
      status: "ongoing",
      img: "",
    },
  ],

  skills: [
    {
      title: "Languages",
      data: [
        {
          title: "C",
          link: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png",
        },
        {
          title: "C++",
          link: "https://w7.pngwing.com/pngs/46/626/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue.png",
        },
        {
          title: "Java",
          link: "https://camo.githubusercontent.com/59b291dfb2a7c3243b471bad3b55906fdf8e59e0372e6247f48de1e5215e5475/68747470733a2f2f636f6465687573746c65722e6f72672f77702d636f6e74656e742f75706c6f6164732f323031322f31322f6a6176615f6c6f676f2e706e67",
        },
        {
          title: "Python",
          link: "https://www.pinclipart.com/picdir/middle/269-2691398_python-logo-clipart-transparent-background-png-download.png",
        },
        {
          title: "HTML",
          link: "https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png",
        },
        {
          title: "CSS",
          link: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
        },
        {
          title: "Javascript",
          link: "https://www.pinclipart.com/picdir/middle/407-4073505_javascript-programming-language-logo-png-clipart.png",
        },
        {
          title: "PHP",
          link: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png",
        },
      ],
    },
    {
      title: "Frameworks/Libraries",
      data: [
        {
          title: "ReactJS",
          link: "https://icon2.cleanpng.com/20191103/ho/transparent-js-icon-logo-icon-react-icon-5dbea1da3071a5.5168401015727743621985.jpg",
        },
        {
          title: "NodeJS",
          link: "https://p7.hiclipart.com/preview/306/37/167/node-js-javascript-web-application-express-js-computer-software-others.jpg",
        },
        {
          title: "ExpressJS",
          link: "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
        },
        {
          title: "Nextjs",
          link: "https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png",
        },
        {
          title: "Threejs",
          link: "https://img.stackshare.io/service/5883/preview.png",
        },
        {
          title: "React Native",
          link: "https://icon2.cleanpng.com/20191103/ho/transparent-js-icon-logo-icon-react-icon-5dbea1da3071a5.5168401015727743621985.jpg",
        },
        {
          title: "Chakra-Ui",
          link: "https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg",
        },
        {
          title: "Material-Ui",
          link: "https://v4.material-ui.com/static/logo.png",
        },
        {
          title: "Bootstrap",
          link: "https://camo.githubusercontent.com/2512b49c89512f2ff3718f7257f48ed5c46a4e331abbd890b6c5e8c0e458434f/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e322f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67",
        },
        {
          title: "Spring Boot",
          link: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/54/4ed1d02bfe11e9b16e4738100f1cb7/logo-java-spring-boot-cloud_.jpg?auto=format%2Ccompress&dpr=1",
        },
      ],
    },
    {
      title: "Tools & DB's",
      data: [
        {
          title: "Git",
          link: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
        },
        {
          title: "GitHub",
          link: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        },
        {
          title: "VsCode",
          link: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png",
        },
        {
          title: "Vercel",
          link: "https://static.wikia.nocookie.net/logopedia/images/a/a7/Vercel_favicon.svg",
        },
        {
          title: "Postman",
          link: "https://www.svgrepo.com/show/354202/postman-icon.svg",
        },
        {
          title: "MySql",
          link: "https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png",
        },
        {
          title: "MongoDB",
          link: "https://toppng.com/uploads/preview/mongo-db-design-mongodb-logo-mongodb-11562879783bwj2cknalk.png",
        },
      ],
    },
    {
      title: "Others",
      data: [
        {
          title: "DB Management",
          link: "https://static.javatpoint.com/fullformpages/images/dbms-full-form2.png",
        },
        {
          title: "DSA",
          link: "https://miro.medium.com/v2/resize:fit:1400/0*7AHKqhGVaDWZJ1L_.png",
        },
        {
          title: "OOP's",
          link: "https://cdn1.vectorstock.com/i/1000x1000/77/50/oop-letters-vector-8757750.jpg",
        },
        {
          title: "Operating System",
          link: "https://www.sitesbay.com/os/images/what-is-operating-system.jpg",
        },
        {
          title: "AI / ML",
          link: "https://cdn-icons-png.flaticon.com/512/8618/8618881.png",
        },
        {
          title: "Cloud Security",
          link: "https://www.pngitem.com/pimgs/m/544-5442942_cloud-security-icon-twitter-png-transparent-png.png",
        },
      ],
    },
  ],
};

export default data;
