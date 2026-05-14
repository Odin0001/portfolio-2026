import {
  SiCplusplus,
  SiFramer,
  SiGithub,
  SiNeovim,
  SiNextdotjs,
  SiReact,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiZig,
  SiDjango,
  SiVuedotjs,
  SiPostgresql,
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
  {
    id: 0,
    name: "Athar Creative Agency",
    description:
      "A cutting-edge marketing website built with Next.js and GSAP animations. Features smooth scroll interactions, dynamic content loading, and responsive design.",
    technologies: [SiNextdotjs, SiTailwindcss],
    techNames: ["Next.js", "Tailwind CSS"],
    techLinks: ["https://nextjs.org/", "https://tailwindcss.com/"],
    github: "https://github.com/nuIIpointerexception/www.seekvisualartist.com",
    demo: "https://www.athar.agency",
    image: "/projects/athar.webp",
    available: true,
  },
  {
    id: 1,
    name: "MJ Maguire & Associates",
    description:
      "A sleek, modern website for a debt collection agency, built with Next.js and GSAP for smooth animations. The site features a clean design, responsive layout, and complex form handling.",
    technologies: [SiNextdotjs, SiTailwindcss],
    techNames: ["Next.js", "Tailwind CSS"],
    techLinks: ["https://nextjs.org/", "https://tailwindcss.com/"],
    github: "https://github.com/nuIIpointerexception/codewars",
    demo: "https://www.mjmaguire.com/",
    image: "/projects/mjmaguire.webp",
    available: true,
  },
  {
    id: 2,
    name: "Smart Staffing Support",
    description:
      "A modern website for a BPO and outsourcing agency, built with Next.js and TailwindCSS. The site features a clean user experience, responsive layout, and interactive elements to engage visitors.",
    technologies: [SiNextdotjs, SiTailwindcss],
    techNames: ["Next.js", "Tailwind CSS"],
    techLinks: ["https://nextjs.org/", "https://tailwindcss.com/"],
    github: "https://github.com/nuIIpointerexception/",
    demo: "https://www.smartstaffingsupport.com",
    image: "/projects/smart-staffing-support.webp",
    available: true,
  },
  {
    id: 3,
    name: "United Legal Group",
    description:
      "A modern website for a legal and debt collection services agency, built with Next.js, TailwindCSS and Framer Motion. The site features professional design, responsive layout, and basic animations.",
    technologies: [SiNextdotjs, SiTailwindcss],
    techNames: ["Next.js", "Tailwind CSS"],
    techLinks: ["https://nextjs.org/", "https://tailwindcss.com/"],
    github: "https://github.com/nuIIpointerexception/",
    demo: "https://www.unitedlegalgroup.com",
    image: "/projects/ulg.webp",
    available: true,
  },
  {
    id: 4,
    name: "Unity Collect",
    description:
      "A Django and Vue.js-powered debt collection suite featuring end-to-end client, legal, and payment management with built-in communication and automation tools.",
    technologies: [SiDjango, SiVuedotjs, SiPostgresql],
    techNames: ["Django", "Vue.js", "PostgreSQL"],
    techLinks: [
      "https://www.djangoproject.com/",
      "https://vuejs.org/",
      "https://www.postgresql.org/",
    ],
    github: "https://github.com/nuIIpointerexception/",
    demo: "https://github.com/nuIIpointerexception/",
    image: "/projects/unity.webp",
    available: false,
  },
  // {
  //     id: 5,
  //     name: "Unity Collect (Mobile App)",
  //     description:
  //         "A mobile application for the Unity Collect software, built with React Native. The app provides a seamless experience for debt collection agencies on the go, allowing users to manage leads, clients, payments, and more from their mobile devices.",
  //     technologies: [SiDjango, SiReact, SiPostgresql],
  //     techNames: ["Django", "React Native", "PostgreSQL"],
  //     techLinks: ["https://www.djangoproject.com/", "https://reactnative.dev/", "https://www.postgresql.org/"],
  //     github: "https://github.com/nuIIpointerexception/",
  //     demo: "https://github.com/nuIIpointerexception/",
  //     image: "/projects/unity-app.webp",
  //     available: false,
  // },
  {
    id: 6,
    name: "Leads Generator",
    description:
      "A web scraper for generating leads for the Unity Collect software, built with Django and PostgreSQL. The scraper extracts relevant information from various sources to populate the leads database.",
    technologies: [SiDjango, SiPostgresql],
    techNames: ["Django", "PostgreSQL"],
    techLinks: [
      "https://www.djangoproject.com/",
      "https://www.postgresql.org/",
    ],
    github: "https://github.com/nuIIpointerexception/",
    demo: "https://github.com/nuIIpointerexception/",
    image: "/projects/scraper.webp",
    available: false,
  },
  {
    id: 7,
    name: "HR System",
    description:
      "A comprehensive HR management and performance tracking system, built with Django, React, and PostgreSQL. The system allows agencies to manage employee information, track performance metrics, and generate reports.",
    technologies: [SiDjango, SiReact, SiPostgresql],
    techNames: ["Django", "React", "PostgreSQL"],
    techLinks: [
      "https://www.djangoproject.com/",
      "https://reactjs.org/",
      "https://www.postgresql.org/",
    ],
    github: "https://github.com/nuIIpointerexception/",
    demo: "https://github.com/nuIIpointerexception/",
    image: "/projects/performance.webp",
    available: false,
  },
  {
    id: 8,
    name: "Data Selling Platform",
    description:
      "A data selling platform, built with Django, React, and PostgreSQL. The platform sell their data to others, providing a marketplace for data exchange.",
    technologies: [SiDjango, SiReact, SiPostgresql],
    techNames: ["Django", "React", "PostgreSQL"],
    techLinks: [
      "https://www.djangoproject.com/",
      "https://reactjs.org/",
      "https://www.postgresql.org/",
    ],
    github: "https://github.com/nuIIpointerexception/",
    demo: "https://github.com/nuIIpointerexception/",
    image: "/projects/data-selling.webp",
    available: false,
  },
  {
    id: 9,
    name: "Business Builder SaaS",
    description:
      "A voice-to-action SaaS platform for building and managing businesses, built with Django, React, and PostgreSQL. The platform offers tools for launching an entire business online through just your voice.",
    technologies: [SiDjango, SiReact, SiPostgresql],
    techNames: ["Django", "React", "PostgreSQL"],
    techLinks: [
      "https://www.djangoproject.com/",
      "https://reactjs.org/",
      "https://www.postgresql.org/",
    ],
    github: "https://github.com/nuIIpointerexception/",
    demo: "https://github.com/nuIIpointerexception/",
    image: "/projects/business-builder.webp",
    available: false,
  },
  {
    id: 10,
    name: "IMDb Clone",
    description:
      "A comprehensive movie database website with search, filtering, and detailed movie information. Built with a modern tech stack for scalability.",
    technologies: [SiNextdotjs, SiTailwindcss],
    techNames: ["Next.js", "Tailwind CSS"],
    techLinks: ["https://nextjs.org/", "https://tailwindcss.com/"],
    github: "https://github.com/nuIIpointerexception/",
    demo: "https://github.com/nuIIpointerexception/",
    image: "/projects/imdb.webp",
    available: true,
  },
  {
    id: 11,
    name: "Coming Soon",
    description:
      "I'm currently working on a couple of projects. I'll update this section as soon as I'm done.",
    technologies: [],
    techNames: [],
    techLinks: ["https://www.ziglang.org/"],
    github: "https://github.com/nuIIpointerexception/",
    demo: "https://github.com/nuIIpointerexception/",
    image: "/projects/construction.webp",
    available: false,
  },
];
