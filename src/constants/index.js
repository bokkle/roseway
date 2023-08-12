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
  twitter,
  fitbit,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Mobile App Development",
    icon: mobile,
  },
  {
    title: "Game Development",
    icon: backend,
  },
  {
    title: "Blockchain Development",
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
    title: "Full Stack Development",
    company_name: "Fitbit",
    icon: fitbit,
    iconBg: "#383E56",
    date: "May 2020 - April 2021",
    points: [
      "Engineered improvements to tracking capabilities and user experience through advanced algorithm optimization",
      "Implemented seamless interface enhancements, ensuring a cohesive experience between the app and the watch",
    ],
  },
  {
    title: "Frontend Development",
    company_name: "Twitter",
    icon: twitter,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Optimized and beautified both the web and mobile applications",
      "Enhanced overall user experiece with advanced optimizations like code splitting and efficient lazy loading, significantly boosting application speed and overall performance",
    ],
  },
  {
    title: "Web Development",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2022 - Oct 2022",
    points: [
      "Assisted Shopify in improving the functionality of their funnel, as well as enhance overall user satisfaction on their platform.",
      "Collaborated with Shopify's design and development teams to implement performance enhancements, streamline navigation, and ensure seamless functionality across different devices.",
    ],
  },
  {
    title: "Full stack Development",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Utilizing expertise in emerging technologies to conceive, design, and execute immersive solutions that redefine user interactions and engagement within the Meta VR ecosystem.",
      "Collaborate closely with designers, engineers, and content creators to create dynamic applications, continuously pushing the envelope of virtual reality capabilities and maintaining Meta's leadership in immersive technology innovation.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "After going through 3 teams of blockchain developers, I thought it was impossible, you guys proved me wrong.",
    name: "Sara Moniz",
    designation: "CFO",
    company: "Apex Innovations",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mitch does.",
    name: "Chris Shihad",
    designation: "CEO",
    company: "DEF Strategies",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After you optimized our website our traffic increased by nearly 60%. We can't thank you enough!",
    name: "Danika Jiang",
    designation: "CTO",
    company: "Gen Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
