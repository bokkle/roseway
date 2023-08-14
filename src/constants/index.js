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
  solidity,
  twitter,
  fitbit,
  pixelforge,
  etherwave,
  carrent,
  jobit,
  staghorn,
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
    name: "Solidity",
    icon: solidity,
  }
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
    date: "Jan 2021 - March 2022",
    points: [
      "Optimized and beautified both the web and mobile applications",
      "Enhanced overall user experiece with advanced optimizations like code splitting and efficient lazy loading, significantly boosting application speed and overall performance",
    ],
  },
  {
    title: "Game Development",
    company_name: "Pixel Forge",
    icon: pixelforge,
    iconBg: "#383E56",
    date: "May 2022 - June 2023",
    points: [
      "Designed and integrated interactive gameplay mechanics, elevating player engagement and immersion in Pixel Forge's upcoming metaverse game",
      "Optimized performance by fine-tuning code logic, implementing efficient algorithms, and ensuring cross-browser compatibility, resulting in a smooth and responsive player experience",
    ],
  },
  {
    title: "Blockchain Development",
    company_name: "EtherWave",
    icon: etherwave,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing ERC-20, ERC-721, and ERC-1155 tokens in conjunction with their corresponding frontend interfaces",
      "Ensuring seamless and cohesive integration between the digital assets and their user interfaces",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "After going through 2 teams of blockchain developers, I thought it was impossible, you guys proved me wrong...",
    name: "Sara Moniz",
    designation: "CCO",
    company: "Apex Innovations",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mitch does.",
    name: "Chris Shihad",
    designation: "CEO",
    company: "DEF Consulting",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "You optimized our website and traffic increased by nearly 60%. We can't thank you enough!",
    name: "Danika Li",
    designation: "CEO",
    company: "NeoTokyo Apparel",
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
    // source_code_link: "https://cars-showcase-4q6s84wkz-js-mastery-pro.vercel.app/",
  },
  {
    name: "Arborist Website",
    description:
      "A sophisticated website tailored for Staghorn Tree Service, an esteemed Canadian arborist company, harmonizing digital innovation with their arboricultural excellence.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: staghorn,
    source_code_link: "https://bokkle.github.io/staghorn/",
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
    // source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
