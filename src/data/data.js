import chatApp from "../assets/chatApp.png";
import Banking from "../assets/Banking.png";
import PharmacyProject from "../assets/PharmacyProject.png";
import portfollio from "../assets/portfollio.png";
import weatherApp from "../assets/weatherApp.png";
import todoApp from "../assets/todoApp.png";
import c from "../assets/c.png";
import cpp from "../assets/c++.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import php from "../assets/php.png";

import react from "../assets/react.png";
import next from "../assets/next.png";
import express from "../assets/express.png";
import node from "../assets/node.png";
import three from "../assets/three.png";
import chakraui from "../assets/chakra-ui.jpg";
import mui from "../assets/mui.png";
import spring from "../assets/spring-boot.png";
import bootstrap from "../assets/bootstrap.png";

import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import postman from "../assets/postman.png";
import vercel from "../assets/vercel.svg";
import vscode from "../assets/vscode.png";
import github from "../assets/github.png";
import git from "../assets/git.png";

import dsa from "../assets/dsa.png";
import dbms from "../assets/dbms.jpg";
import os from "../assets/os.webp";
import cs from "../assets/cs.png";
import cn from "../assets/cn.png";
import aiml from "../assets/aiml.png";
import oops from "../assets/oops.webp";

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
      id: "9",
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
      id: "8",
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
      id: "7",
      name: "Pharmacy Website",
      detail:
        "A simple Ecommerce Website for Medicines which has 3 types of user: buyer, seller, admin with different permissions and usage. Here a user can buy medicine consult a Dr. and much more. This is created using HTML/CSS, Bootstap, JS, PHP, MySql, SMTP server",
      link1: "https://github.com/saksham-jain1/pharmacy_management.github.io",
      link2: "",
      status: "completed",
      img: PharmacyProject,
    },
    {
      id: "6",
      name: "Banking Website",
      detail:
        "A Basic Banking Website created during sparks foundation internship. A user can create account in this and can do money transfer. This created using HTML/CSS, JS, BootStrap, PHP, MySql.",
      link1: "https://github.com/saksham-jain1/Banking-Website.github.io",
      link2: "",
      status: "completed",
      img: Banking,
    },
    {
      id: "5",
      name: "Todo App",
      detail:
        "A clone of Trello Web app where a user can manage day to day tasks, can make multiple lists of Cards, edit tasks, drag from one list to another. And all the data will be stored locally. This is created with Reactjs, Chakra-Ui, React DND",
      link1: "https://github.com/saksham-jain1/todo-list",
      link2: "https://todo-list-011.herokuapp.com/",
      status: "completed",
      img: todoApp,
    },
    {
      id: "4",
      name: "Weather App",
      detail:
        "A simple Weather WebApp which shows hourly and weakly weather data forecast using OpenWeather API. This is created using Reactjs, Chakra-Ui, OpenWeather API.",
      link1: "https://github.com/saksham-jain1/WeatherWebApp",
      link2: "https://weather-web-app-rosy.vercel.app/",
      status: "completed",
      img: weatherApp,
    },
    {
      id: "3",
      name: "Movie Recomendation System",
      detail: "",
      link1: "#",
      link2: "",
      status: "ongoing",
      img: "",
    },
    {
      id: "2",
      name: "Basic Photo Editor",
      detail: "",
      link1: "#",
      link2: "",
      status: "ongoing",
      img: "",
    },
    {
      id: "1",
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

  certificates: [
    {
      title: "Java Programming: Solving Problems with Software",
      img: "https://drive.google.com/file/d/1-zfwwgq5c03dAapUQn_XNgCP1EO4PQGa/view?usp=sharing",
    },
    { title: "Databases for Developers: Next Level", img: "" },
    {
      title: "HTML, CSS, and JavaScript for Web Developers",
      img: "",
    },
    {
      title: "Programming for Everybody",
      img: "",
    },
    {
      title: "CCNAv7: Introduction to Networks",
      img: "",
    },
    {
      title: "Introduction to Packet Tracer",
      img: "",
    },
  ],

  links: {
    linkedin: "",
    github: "",
    gfg: "",
    codechef: "",
    codeforces: "",
    mail: "",
    whatsapp: "",
  },
};

const projectDetail = [{}];

export { projectDetail };

export default data;
