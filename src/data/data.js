import chatApp from "../assets/chatApp.webp";
import Banking from "../assets/Banking.webp";
import PharmacyProject from "../assets/PharmacyProject.webp";
import portfollio from "../assets/portfollio.webp";
import weatherApp from "../assets/weatherApp.webp";
import todoApp from "../assets/todoApp.webp";

import c from "../assets/c.webp";
import cpp from "../assets/cpp.webp";
import java from "../assets/java.webp";
import python from "../assets/python.webp";
import html from "../assets/html.webp";
import css from "../assets/css.webp";
import js from "../assets/js.webp";
import php from "../assets/php.webp";

import react from "../assets/react.webp";
import next from "../assets/next.webp";
import express from "../assets/express.webp";
import node from "../assets/node.webp";
import three from "../assets/three.webp";
import chakraui from "../assets/chakra-ui.webp";
import mui from "../assets/mui.webp";
import spring from "../assets/spring-boot.webp";
import bootstrap from "../assets/bootstrap.webp";

import mongodb from "../assets/mongodb.webp";
import mysql from "../assets/mysql.webp";
import postman from "../assets/postman.webp";
import vercel from "../assets/vercel.webp";
import vscode from "../assets/vscode.webp";
import github from "../assets/github.webp";
import git from "../assets/git.webp";

import dsa from "../assets/dsa.webp";
import dbms from "../assets/dbms.webp";
import os from "../assets/os.webp";
import cs from "../assets/cs.webp";
import cn from "../assets/cn.webp";
import aiml from "../assets/aiml.webp";
import oops from "../assets/oops.webp";

import certPython from "../assets/Certificate Python Coursera.webp";
import certHtml from "../assets/Coursera Certificate Html.webp";
import certJava from "../assets/Coursera Certificate Java.webp";
import certDbms from "../assets/classcertofexcellence (4).webp";
import certIirs from "../assets/Iirs certificate.webp";
import certCcna from "../assets/sakshamjain-India_Internship-certificate.webp";

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
      link: "https://drive.google.com/file/d/1wsNuzApyPx-fFPrYVMmVwXPjNNZfTB4h/view?usp=drive_link",
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
      link: "https://drive.google.com/file/d/1hb3znIDM00dEp552X6Q9xcz8Q0wxLMsG/view?usp=drive_link",
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
      link: "https://drive.google.com/file/d/1Y0Un3E3-PLlkMiNh0RjrDFuokPAH1cBn/view?usp=drive_link",
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
      link: "https://drive.google.com/drive/folders/1-K_ngxykN6XAKk70ApvhWQPmpBoHAhG_?usp=drive_link",
    },
    {
      id: "3",
      degree: "CCNAv7: Introduction to Networks (Certification)",
      place: "Cisco Networking Academy",
      detail: "Percentage: 98.38%",
      date: "July 2022 - Aug 2022",
      icon: false,
      link: "https://drive.google.com/file/d/1-6iBYDF3WU7I4IWrFJD735vocMxPAGYF/view?usp=drive_link",
    },
    {
      id: "2",
      degree: "Higher Secondary / XIIth (PCM)",
      place: "Jai Academy School (CBSE), Jhansi(U.P)",
      detail: "Percentage: 72.6%",
      date: "2018 - 2019",
      icon: true,
      link: "https://drive.google.com/drive/folders/1-I_nIS88t_Z6M_qnvN2fiKSSX8ZlWx4w?usp=drive_link",
    },
    {
      id: "1",
      degree: "Secondary / Xth",
      place: "Jai Academy School (CBSE), Jhansi(U.P)",
      detail: "CGPA: 8.4",
      date: "2016 - 2017",
      icon: true,
      link: "https://drive.google.com/drive/folders/1-HMKTH-EFdlk28cVjbDQ3MTxGpJy2dnT?usp=drive_link",
    },
  ],

  skills: [
    {
      title: "Languages",
      data: [
        {
          title: "C",
          link: c,
        },
        {
          title: "C++",
          link: cpp,
        },
        {
          title: "Java",
          link: java,
        },
        {
          title: "Python",
          link: python,
        },
        {
          title: "HTML",
          link: html,
        },
        {
          title: "CSS",
          link: css,
        },
        {
          title: "Javascript",
          link: js,
        },
        {
          title: "PHP",
          link: php,
        },
      ],
    },
    {
      title: "Frameworks / Libraries",
      data: [
        {
          title: "ReactJS",
          link: react,
        },
        {
          title: "NodeJS",
          link: node,
        },
        {
          title: "ExpressJS",
          link: express,
        },
        {
          title: "Nextjs",
          link: next,
        },
        {
          title: "Threejs",
          link: three,
        },
        {
          title: "React Native",
          link: react,
        },
        {
          title: "Chakra-Ui",
          link: chakraui,
        },
        {
          title: "Material-Ui",
          link: mui,
        },
        {
          title: "Bootstrap",
          link: bootstrap,
        },
        {
          title: "Spring Boot",
          link: spring,
        },
      ],
    },
    {
      title: "Tools & DB's",
      data: [
        {
          title: "Git",
          link: git,
        },
        {
          title: "GitHub",
          link: github,
        },
        {
          title: "VsCode",
          link: vscode,
        },
        {
          title: "Vercel",
          link: vercel,
        },
        {
          title: "Postman",
          link: postman,
        },
        {
          title: "MySql",
          link: mysql,
        },
        {
          title: "MongoDB",
          link: mongodb,
        },
      ],
    },
    {
      title: "Others",
      data: [
        {
          title: "DB Management",
          link: dbms,
        },
        {
          title: "DSA",
          link: dsa,
        },
        {
          title: "OOP's",
          link: oops,
        },
        {
          title: "Operating System",
          link: os,
        },
        {
          title: "AI / ML",
          link: aiml,
        },
        {
          title: "Cloud Security",
          link: cs,
        },
        {
          title: "Computer Networking",
          link: cn,
        },
      ],
    },
  ],

  certificatesLink:
    "https://drive.google.com/drive/folders/1-AqvIJjr11GAr_EzuWlENLCnwa3-psGm?usp=drive_link",

  certificates: [
    {
      title: "Java Programming: Solving Problems with Software",
      link: "https://drive.google.com/file/d/1-zfwwgq5c03dAapUQn_XNgCP1EO4PQGa/view?usp=sharing",
      img: certJava,
    },
    {
      title: "Databases for Developers: Next Level",
      link: "https://drive.google.com/file/d/1GEOiVixhQqtl5WAWfEga0044FANJmTJh/view?usp=drive_link",
      img: certDbms,
    },
    {
      title: "HTML, CSS, and JavaScript for Web Developers",
      link: "https://drive.google.com/file/d/1-nW6GTz6sR0lRUunomDoyAzj-fpo2RET/view?usp=drive_link",
      img: certHtml,
    },
    {
      title: "Programming for Everybody (Python)",
      link: "https://drive.google.com/file/d/1jpHw9eLyh0wW9DIjptCCfi9sNG6pkSSR/view?usp=drive_link",
      img: certPython,
    },
    {
      title: "Introduction to Packet Tracer",
      link: "https://drive.google.com/file/d/1PuRFBrI5EQh449rgwxc3vq1DUtwp7aOw/view?usp=drive_link",
      img: certCcna,
    },
    {
      title: "IIRS:- Satellite based Navigation Course",
      link: "https://drive.google.com/file/d/1-kTtXZF-HPgiTMsPqAM9ottTsAn5INzE/view?usp=drive_link",
      img: certIirs,
    },
  ],

  links: {
    linkedin: "https://www.linkedin.com/in/saksham-jain-5b87a0179/",
    github: "https://github.com/saksham-jain1",
    gfg: "https://auth.geeksforgeeks.org/user/sj20011002",
    codechef: "https://www.codechef.com/users/saksham_jain1",
    codeforces: "https://codeforces.com/profile/sj20011002",
    leetcode: "https://leetcode.com/sj20011002/",
    codingninjas: "https://www.codingninjas.com/studio/profile/Saksham_5b42",
    hackerrank: "https://www.hackerrank.com/sj20011002",
    email: "mailto:sj20011002@gmail.com",
    green: "https://wa.me/+919889988940",
  },
};

// todo need to update project data.
const projectDetail = [
  {
    id: "15",
    name: "Airbnb Clone",
    detail:
      "Airbnb Clone is a cutting-edge vacation rental platform with a modern design & advance features, designed to showcase my web development skills.",
    link1: "",
    link2: "",
    tech: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Cloudinary CDN",
      "Node.js",
      "TypeScript",
    ],
    status: "in progress",
    type: ["web", "featured"],
    features: [
      "Sleek Tailwind design to demonstrate expertise in modern web design.",
      "User authentication with credentials, Google, and GitHub for secure access control.",
      "Effortless image uploads using Cloudinary CDN to showcase seamless media handling.",
      "Direct POST and DELETE routes in route handlers (app/api) to exhibit server-side development skills.",
      "Data fetching in server React components to highlight advanced front-end and back-end integration.",
      "Handling of templated files like error.tsx and loading.tsx for efficient loading and error management.",
      "Efficient management of relations between server and child components to demonstrate organization and structure.",
    ],
    description:
      "Airbnb Clone is my showcase project, highlighting my expertise in web development. With a modern Tailwind design, secure user authentication, and advanced data handling, it's a testament to my skills as a developer. Explore the project on GitHub to see how I'm pushing the boundaries of web development.",
    futureScope:
      "In the future, I plan to further enhance Airbnb Clone by introducing real-time features and expanding its capabilities. Stay tuned for more updates!",
    img: "",
  },
  {
    id: "14",
    name: "Resume Builder",
    detail:
      "Create stunning resumes effortlessly with the Resume Builder. Built with React.js, HTML, and modular CSS, it offers a user-friendly interface to craft the perfect resume.",
    link1: "",
    link2: "",
    tech: ["React.js", "HTML", "Modular CSS"],
    status: "Complete",
    type: ["web"],
    features: [
      "Intuitive form filling to generate a customized resume.",
      "Drag-and-drop element layout for easy customization.",
      "Color selection for the resume theme, with a default blue-black option and more choices.",
      "Download and print options for hassle-free resume distribution.",
      "Elegant and responsive UI design for an exceptional user experience.",
    ],
    description:
      "The Resume Builder is your go-to tool for creating polished resumes effortlessly. Powered by React.js, it offers a seamless interface for filling out essential information, arranging sections with drag-and-drop simplicity, and choosing from a range of stylish color themes. Once you're satisfied with your resume, download or print it with ease. Experience the elegance of resume creation with our user-friendly design.",
    futureScope:
      "In the future, we plan to enhance the Resume Builder with additional templates, real-time collaboration features, and integration with popular job search platforms. Stay tuned for more updates!",
    img: "https://resumebuilder.example.com/assets/cover-image.jpg",
  },
  {
    id: "13",
    name: "Namaste Stays Hotel Management System",
    detail:
      "A full-stack hotel management system developed during my internship at Principle Global.",
    link1: "https://namastestays.example.com",
    link2: "https://github.com/namastestays",
    tech: ["Spring Boot", "Java", "React", "Chakra UI", "MySQL"],
    status: "Complete",
    type: ["web", "featured"],
    features: [
      "Multi-language support for a global user base.",
      "Elegant, attractive, and responsive design to enhance user experience.",
      "Dark mode and light mode for user preference.",
      "Email confirmation and OTP verification for secure login.",
      "Bcrypt encryption for data security.",
      "Integration with payment gateways for seamless transactions.",
      "Interactive maps for easy location finding and navigation.",
      "Chatbot assistance for user inquiries.",
      "Admin dashboard and hotel owner dashboard to display profit, booking details, and more.",
      "Bill generation functionality for a streamlined checkout process.",
      "Hotel management features, including the ability to add, edit, and delete hotels.",
      "Different user roles and logins for various access levels.",
    ],
    description:
      "Namaste Stays is a cutting-edge hotel management system that simplifies hotel operations. With support for multiple languages, an elegant design, and responsive layout, it caters to a diverse user base. Users can enjoy the convenience of email confirmation, OTP verification, and secure transactions. The system also provides hotel owners with essential insights through dashboards, offers bill generation, and efficient hotel management capabilities. Experience the future of hotel management with Namaste Stays.",
    futureScope:
      "In the future, we plan to expand Namaste Stays by adding real-time booking features, room availability management, and even more customization options for hotel owners. Stay tuned for further updates!",
    img: "https://namastestays.example.com/assets/cover-image.jpg",
  },
  {
    id: "12",
    name: "Basic Minecraft",
    detail:
      "A web-based game offering a simplified Minecraft experience in first-person view (FPV).",
    link1: "",
    link2: "",
    tech: ["React.js", "Three.js"],
    status: "Complete",
    type: ["web", "game", "featured"],
    features: [
      "First-person view (FPV) for immersive gameplay.",
      "Exploration of a block-based world with the ability to walk and jump.",
      "Placing blocks on the ground to create structures and shapes.",
    ],
    description:
      "Basic Minecraft is a web-based game that offers a simplified Minecraft experience. In FPV mode, you can explore a blocky world, jump to new heights, and let your creativity run wild by placing blocks to build structures. It's a unique gaming experience that brings the essence of Minecraft to your web browser.",
    futureScope:
      "In the future, we plan to expand Basic Minecraft by adding more building materials, crafting options, and multiplayer support. Stay tuned for exciting updates!",
    img: "https://basicminecraft.example.com/assets/cover-image.jpg",
  },
  {
    id: "8",
    name: "Pharmacy Store Helper",
    detail:
      "A MERN-based web app simplifying pharmacy store management with a database of 30,000+ medicines.",
    link1: "https://pharmacystorehelper.example.com",
    link2: "https://github.com/pharmacystorehelper",
    tech: ["MERN stack", "Axios", "Cloudinary", "JWT"],
    status: "in progress",
    type: ["web", "featured"],
    features: [
      "User account creation and management for pharmacy shops.",
      "Adjustable font size for user convenience.",
      "Effortless stock management for shop owners.",
      "Generation of medicine purchase orders with shareable links and PDF downloads.",
      "Creation, management, and generation of sales bills.",
      "Comprehensive ledger management for the shop, including file and image uploads to Cloudinary.",
      "JWT capabilities for secure user authentication and data protection.",
    ],
    description:
      "Pharmacy Store Helper is your ultimate solution for pharmacy store management. With a vast database of over 30,000 medicines, users can create shop accounts, customize font sizes, manage stock, generate purchase orders with shareable links and PDFs, handle sales with bill generation, and keep track of the shop's ledger. The integration of JWT ensures secure access and data protection.",
    futureScope:
      "In the future, we plan to enhance Pharmacy Store Helper by adding real-time inventory updates, predictive stock recommendations, and integration with external pharmacy databases. Stay tuned for more exciting features!",
    img: "https://pharmacystorehelper.example.com/assets/cover-image.jpg",
  },
  {
    id: "7",
    name: "Chatting WebApp",
    detail:
      "A user-friendly chatting platform that offers real-time conversations, group chats, personal chats, and more.",
    link1: "https://github.com/saksham-jain1/Mern-Chat-App",
    link2: "https://chatting-app-0.herokuapp.com",
    tech: ["MERN Stack", "Chakra-UI", "Socket.io", "JWT"],
    status: "Complete",
    type: ["web", "featured"],
    features: [
      "Real-time group chat functionality for seamless communication.",
      "Personal chat capabilities for private conversations.",
      "User search to easily find and connect with friends.",
      "User authentication and authorization with JWT for security.",
      "Profile management, including editing and deletion.",
      "Group profile creation and management.",
      "Built-in emojis for expressive messaging.",
      "Dark mode for comfortable nighttime chat sessions.",
    ],
    description:
      "The Chatting WebApp is a full-fledged chat platform built with the MERN stack, featuring a user-friendly interface and a range of communication options. Users can enjoy group chats, personal conversations, and efficient user management. With the power of JWT, your conversations are secure and private. Express yourself with built-in emojis and switch to dark mode for a comfortable chat experience.",
    futureScope:
      "In the future, we plan to enhance the Chatting WebApp by adding multimedia sharing, voice and video calling, and additional security features to ensure a comprehensive and secure communication platform.",
    img: chatApp,
  },
  // * reviwe this
  {
    id: "6",
    name: "My Portfollio",
    detail:
      "The website showcases my professional work and enables visitors to easily connect with me.",
    link1: "https://github.com/saksham-jain1/Portfollio",
    link2: "https://my-portfollio.herokuapp.com/",
    tech: ["MERN Stack", "Chakra-Ui"],
    status: "Complete",
    type: ["web"],
    features: [],
    description: "",
    futureScope: "",
    img: portfollio,
  },
  {
    id: "5",
    name: "ePharmacy Store",
    detail:
      "Ecommerce Website for Medicines with user types: buyer, seller, and admin.",
    link1: "https://github.com/saksham-jain1/pharmacy_management.github.io",
    link2: "",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL", "SMTP server"],
    status: "Complete",
    type: ["web"],
    features: [
      "Medicine purchase functionality for buyers.",
      "Consultation with a doctor.",
      "Different user types with varying permissions.",
      "Usage of HTML, CSS, Bootstrap, JS, PHP, MySql, SMTP server.",
    ],
    description:
      "ePharmacy Store is a simple e-commerce platform for buying medicines. It caters to buyers, sellers, and admins with different permissions. Users can purchase medicines and even consult with a doctor online. The project uses HTML, CSS, Bootstrap, JS, PHP, MySql, and an SMTP server for email functionalities.",
    futureScope: "",
    img: PharmacyProject,
  },
  {
    id: "4",
    name: "Banking Website",
    detail:
      "Basic Banking Website with account creation and money transfers. Developed using HTML, CSS, JS, Bootstrap, PHP, MySql.",
    link1: "https://github.com/saksham-jain1/Banking-Website.github.io",
    link2: "",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    status: "Complete",
    type: ["web"],
    features: [
      "Account creation and money transfer functionality.",
      "Usage of HTML, CSS, JS, Bootstrap, PHP, MySql.",
    ],
    description:
      "The Banking Website is a basic online banking platform developed during the Sparks Foundation internship. Users can create accounts and perform money transfers. The project is built using HTML, CSS, JS, Bootstrap, PHP, and MySql.",
    futureScope: "",
    img: Banking,
  },
  {
    id: "3",
    name: "Trello Clone",
    detail:
      "Clone of Trello Web app for task management. Create lists of cards, edit tasks, and drag tasks between lists. Built with React.js, Chakra-UI, React DND.",
    link1: "https://github.com/saksham-jain1/todo-list",
    link2: "https://todo-list-011.herokuapp.com/",
    tech: ["MERN stack", "Chakra-UI", "React DND", "JWT"],
    status: "Complete",
    type: ["web", "featured"],
    features: [
      "Task management with multiple lists of cards.",
      "Drag and drop functionality for task organization.",
      "Local data storage.",
      "Built using React.js, Chakra-UI, React DND.",
    ],
    description:
      "Trello Clone is a web app that mimics the functionality of the Trello task management platform. Users can create lists of cards, edit tasks, and drag tasks between lists. Data is stored locally for easy access. The project is built with React.js, Chakra-UI, and React DND.",
    futureScope: "",
    img: todoApp,
  },
  {
    id: "2",
    name: "Weather App",
    detail:
      "Weather WebApp displaying hourly and weekly forecasts using OpenWeather API. Created with React.js, Chakra-UI, OpenWeather API.",
    link1: "https://github.com/saksham-jain1/WeatherWebApp",
    link2: "https://weather-web-app-rosy.vercel.app/",
    tech: ["React.js", "Chakra-UI", "OpenWeather API"],
    status: "Complete",
    type: ["web"],
    features: [
      "Hourly and weekly weather forecasts.",
      "Usage of React.js, Chakra-UI, OpenWeather API.",
    ],
    description:
      "The Weather App is a straightforward web application that provides hourly and weekly weather forecasts. It utilizes the OpenWeather API and is built with React.js and Chakra-UI.",
    futureScope: "",
    img: weatherApp,
  },
  {
    id: "1",
    name: "Basic Photo Editor",
    detail: "A basic photo editing web application.",
    link1: "",
    link2: "",
    tech: ["HTML", "CSS", "JS"],
    status: "ongoing",
    type: ["web"],
    features: [],
    description: "",
    futureScope: "",
    img: "",
  },
];

export { projectDetail };

export default data;
