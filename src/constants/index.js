import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Agile Developer",
    icon: backend,
  },
  {
    title: "Microservices Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Microservices",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Designing a modular microservices architecture to separate core functionalities such as user management, problem reporting, and notification services.",
  "Ensuring each microservice is independently deployable, scalable, and maintainable, improving development speed and reducing system complexity.",
  "Using RESTful APIs for communication between services and enabling seamless data flow across the system.",
  "Adopting a domain-driven design approach to allow each service to evolve independently based on its responsibilities.",
    ],
  },
  {
    title: "Backend",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
       "Developing backend services using Node.js (Express) for user and problem modules, and FastAPI (Python) for the notifications and reporting system.",
  "Integrating Firebase for real-time database management, user authentication, and data synchronization across services.",
  "Implementing secure and structured REST APIs to link the frontend with each backend service efficiently.",
  "Ensuring error handling, validation, and performance optimization across all backend processes.",
    ],
  },
  {
    title: "Frontend",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
       "Building the frontend using React.js and React Native to support both web and mobile platforms with a consistent user experience.",
  "Designing role-based interfaces for admins, assistants, technicians, and chefs to provide relevant features and workflows.",
  "Using reusable components and modern UI/UX practices for maintainability and responsiveness.",
  "Connecting the frontend with microservices using API calls and real-time data updates from Firebase.",
    ],
  },
  {
    title: "Agile",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
        "Following the Agile Scrum methodology with structured sprints, daily meetings, and iterative development cycles.",
  "Organizing tasks and goals into seven sprints to deliver features incrementally and maintain steady progress.",
  "Conducting sprint reviews and retrospectives to gather feedback and continuously improve the product.",
  "Encouraging team collaboration and adaptability to respond to changes and technical challenges during the project."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  
  {
    name: "Release 1: Gestion des utilisateurs",
    description:
      "Release 1 focused on user management functionalities, including authentication and role-based access",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "http://localhost:5173/",
  },
  {
    name: "Release 2: Gestion des Problémes",
    description:
      "Release 2 introduced problem reporting, tracking, and technician assignment",
    tags: [
     {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "http://localhost:5174/",
  },
  {
    name: "Release 3: Gestion des Notifications",
    description:
      "Release 3 integrated a notification system and statistics dashboard to enhance communication and monitoring capabilities.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "FAstAPI",
        color: "green-text-gradient",
      },
      {
        name: "Ollama",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "Html",
        color: "red-text-gradient",
      },
      {
        name: "Css",
        color: "yellow-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "http://127.0.0.1:8000",
  },
];

export { services, technologies, experiences, testimonials, projects };
