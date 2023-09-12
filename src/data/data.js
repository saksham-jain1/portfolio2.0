import chatApp from "../assets/chatApp.png";
import Banking from "../assets/Banking.png";
import PharmacyProject from "../assets/PharmacyProject.png";
import portfollio from "../assets/portfollio.png";
import weatherApp from "../assets/weatherApp.png";
import todoApp from "../assets/todoApp.png";

const data = {
  name: "",
  about: "",
  academics: [
    {
      id: "1",
      degree: "Bachelor of Technology (Computer Science Engineering)",
      place: "Medi-Caps University, Indore(M.P)",
      detail: "CGPA: 8.9 (till Aug 2022)",
      date: "2019 - present",
      icon: true,
    },
    {
      id: "2",
      degree: "CCNAv7: Introduction to Networks (Educational Traning)",
      place: "Cisco Networking Academy",
      detail: "Percentage: 98.38%",
      date: "July 2022 - Aug 2022",
      icon: false,
    },
    {
      id: "3",
      degree: "Higher Secondary / XIIth (PCM)",
      place: "Jai Academy School (CBSE), Jhansi(U.P)",
      detail: "Percentage: 72.6%",
      date: "2018 - 2019",
      icon: true,
    },
    {
      id: "4",
      degree: "Secondary / Xth",
      place: "Jai Academy School (CBSE), Jhansi(U.P)",
      detail: "CGPA: 8.4",
      date: "2016 - 2017",
      icon: true,
    },
  ],
  experience: [
    {
      id: "1",
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
      id: "2",
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
      id: "3",
      degree: "Cyber Security Research Intern",
      place: "SISTMR Australia - Remote",
      detail: [
        "Learned About Kali Linux, WireShark and basics of Cyber Security",
      ],
      Tag: ["Linux", "Security"],
      date: "Feb-2022 - May-2022",
    },
    {
      id: "4",
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
        "C",
        "C++",
        "Java",
        "Python",
        "HTML/CSS",
        "JavaScript",
        "PHP",
        "SQL",
      ],
    },
    {
      title: "Frameworks/Libraries",
      data: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "REACT Native",
        "Chakra-Ui",
        "Material-Ui",
        "Bootstrap",
      ],
    },
    {
      title: "Tools",
      data: ["Git", "GitHub", "VsCode", "Heroku", "Postman"],
    },
    {
      title: "Databases",
      data: ["MySql", "MongoDB"],
    },
    {
      title: "Others",
      data: [
        "Database Management",
        "Data Structures & Algorithms",
        "Object Oriented Programming",
        "Operating System",
        "Compitetive Programming",
      ],
    },
  ],
};

export default data;
