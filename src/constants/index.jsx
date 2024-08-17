import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPython,
  FaAws,
  FaJs,
  FaJava,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa"; // Use 'fa' for Fa icons
import { TbBrandLeetcode, TbBrandCpp } from "react-icons/tb"; // Correct import for TbBrandLeetcode
import { CgMail } from "react-icons/cg";
import { SiMysql, SiPowerbi, SiPandas } from "react-icons/si";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  // { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  // { label: "Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "#resume" },
];

export const HERO = {
  name: "Abhhirram Veedhi",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate Full Stack developer who enjoys building attractive and effective user interfaces. For over a year, I've been turning ideas into engaging web experiences.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Inventory Managment",
    description:
      "Developed a Full Stack web application with MERN, focusing on robust CRUD functions. Implemented secure user authentication with MongoDB for safe access and efficient inventory management.",
    image: projectImage1,
    githubLink: "https://github.com/abhhirramVeedhi/Inventory-MERN-Project.git",
  },
  {
    id: 2,
    name: "Watchlist Helper",
    description:
      "Built a movie data website tailored to user preferences using React hooks, an external API, and a local database.",
    image: projectImage2,
    githubLink: "https://github.com/abhhirramVeedhi/WatchlistHelper.git",
  },
  {
    id: 3,
    name: "T20 WorldCup Top 11",
    description:
      "Created a Power BI report analyzing player metrics from ESPNcricinfo data scraped via Brightdata. Used the insights to build a winning T20 cricket team with a 90% success rate.",
    image: projectImage3,
    githubLink: "https://github.com/abhhirramVeedhi/T20WC_Top11.git",
  },
  {
    id: 4,
    name: "Task Manager",
    description:
      "Built a to-do list application using React, featuring an interactive and visually appealing design with CSS. Users can easily add, edit, and delete tasks, with real-time updates and smooth transitions for a seamless experience.",
    image: projectImage4,
    githubLink: "https://github.com/abhhirramVeedhi/To-Do-List.git",
  },
  {
    id: 5,
    name: "NFT Fandom",
    description:
      "Developed a to-do list application with React, featuring a dynamic and interactive user interface. Utilized CSS animations and transitions to enhance user experience, allowing for smooth task management and visual feedback.",
    image: projectImage5,
    githubLink: "https://github.com/abhhirramVeedhi/NFT-Fandom.git",
  },
  {
    id: 6,
    name: "Speech Emotion Recognization",
    description:
      "Developed a Speech Emotion Recognition system using Python with Multi-Layer Perceptron (MLP) and Support Vector Machine (SVM) models. Implemented emotion classification to analyze speech data effectively.",
    image: projectImage6,
    githubLink:
      "https://github.com/abhhirramVeedhi/Speech_Emotion_Recognization.git",
  },
];

// export const BIO = [
//   "I’m Abhhirram Veedhi, a final-year student at Vellore Institute of Technology, Vellore, pursuing a Bachelor of Technology in Information Technology with a CGPA of 8.44. I’m passionate about technology and development, and I’ve had the opportunity to work on several exciting projects. I developed a Full Stack inventory management system using MERN, created a T20 cricket data analytics dashboard with Power BI, and built a Speech Emotion Recognition system using Python. My skills span Python, JavaScript, and various frameworks like React JS and Power BI. I’ve also earned certifications in AWS Cloud Practitioner and MERN Full Stack. Beyond tech, I enjoy hiking and karate, with notable achievements including summiting Kalsubai Mountain and earning an Orange Belt in karate.",
// ];

export const SKILLS = [
  {
    icon: <FaPython className="text-4xl text-yellow-600 lg:text-5xl" />,
    name: "Python",
    experience: "2+years",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React.js",
    experience: "1.5+years",
  },
  {
    icon: <SiExpress className="text-4xl text-white lg:text-5xl" />,
    name: "Express.js",
    experience: "1.5+years",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "1.5+years",
  },
  {
    icon: <FaJs className="text-4xl text-yellow-300 lg:text-5xl" />,
    name: "JavaScript",
    experience: "1.5+years",
  },
  {
    icon: <SiMysql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "MySQL",
    experience: "1+year",
  },
  {
    icon: <TbBrandCpp className="text-4xl text-green-400 lg:text-5xl" />,
    name: "C++",
    experience: "1+year",
  },
  {
    icon: <FaJava className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Java",
    experience: "1+year",
  },
  {
    icon: <FaAws className="text-4xl text-orange-700 lg:text-5xl" />,
    name: "Amazon Web Services",
    experience: "<1year",
  },
  {
    icon: <SiPowerbi className="text-4xl text-yellow-500 lg:text-5xl" />,
    name: "PowerBI",
    experience: "<1year",
  },
  {
    icon: <SiPandas className="text-4xl text-white-700 lg:text-5xl" />,
    name: "Python Pandas",
    experience: "<1year",
  },
];

// export const EXPERIENCES = [
//   {
//     title: "Lead Frontend Developer",
//     company: "Innovative Tech Solutions",
//     duration: "July 2020 - Present",
//     description:
//       "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
//   },
//   {
//     title: "Frontend Engineer",
//     company: "Digital Creations",
//     duration: "February 2016 - June 2020",
//     description:
//       "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
//   },
//   {
//     title: "Junior Web Developer",
//     company: "Bright Future Technologies",
//     duration: "August 2014 - January 2016",
//     description:
//       "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
//   },
// ];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Vellore Institute of Technology",
    duration: "September 2021 - July 2025",
    description:
      "Currently pursuing a B.Tech in Information Technology, gaining a solid foundation in various technological and engineering principles. Actively involved in academic and practical projects that enhance problem-solving and technical skills.",
  },
  {
    degree: "Higher Secondary Classes 11th & 12th ",
    institution: "Tirumala Juniour College",
    duration: "June 2019 - April 2021",
    description:
      "Completed senior secondary education with a strong academic record. Focused on foundational courses in Mathematics, Physics, and Chemistry, building a solid base for further studies in technology and engineering.",
  },
];

export const CERTIFICATIONS = [
  {
    title: (
      <span>
        AWS Cloud Practitioner <FaAws className="inline-block text-4xl mr-2" />
      </span>
    ),
    institution: "Amazon Web Services",
    duration: "January 2024",
    link: "https://drive.google.com/file/d/1YvC8qdgH9hlc_WKMwqGz5YtkI2FzE8NQ/view",
    description:
      "The AWS Cloud Practitioner certification validates foundational cloud knowledge and understanding of AWS services and their use cases, essential for cloud-based solutions.",
  },
  {
    title: (
      <span>
        MERN Full Stack Developer{" "}
        <SiMongodb className="inline-block text-2xl mr-2" />{" "}
        <SiExpress className="inline-block text-2xl mr-2" />{" "}
        <RiReactjsLine className="inline-block text-2xl mr-2" />{" "}
        <FaNodeJs className="inline-block text-2xl mr-2" />
      </span>
    ),
    institution: "Ethnus",
    duration: "December 2023",
    link: "https://drive.google.com/file/d/1cHsFVzoX3v8_QPWOSS5HPXq10wccZq3H/view",
    description:
      "The MERN Full Stack Developer certification showcases expertise in building and managing full-stack web applications using MongoDB, Express.js, React, and Node.js.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://leetcode.com/u/Abhhirram_Veedhi/",
    icon: <TbBrandLeetcode fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/abhhirram_veedhi/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "mailto:abhhirram2003@gmail.com",
    icon: <CgMail fontSize={25} className="hover:opacity-80" />,
  },

  {
    href: "https://github.com/abhhirramVeedhi",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/abhhirram-veedhi-445276280/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
