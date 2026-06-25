export interface AboutData {
  name: string;
  badge: string;
  headingStart: string;
  headingHighlight: string;
  headingEnd?: string;
  title: string;
  description: string[];
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
  avatarUrl: string;
  resumeUrl: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  iconColorClass: string;
  skills: string[];
}

export interface SkillsData {
  badge: string;
  heading: string;
  description: string;
  categories: SkillCategory[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

export interface ExperiencesData {
  badge: string;
  heading: string;
  description: string;
  experiences: Experience[];
}

export interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  isClientProject?: boolean;
}

export interface ProjectsData {
  badge: string;
  heading: string;
  description: string;
  projects: Project[];
  categories: string[];
}

export interface ContactDetails {
  email: string;
  location: string;
  linkedin?: string;
}

export interface ContactData {
  badge: string;
  heading: string;
  description: string;
  infoTitle: string;
  infoDescription: string;
  details: ContactDetails;
}

export const aboutData: AboutData = {
  name: 'Ritu',
  badge: 'About Me',
  headingStart: 'Engineering scalable web applications with ',
  headingHighlight: 'precision & performance',
  title: "Hello there! I'm Ritu, a Software Engineer.",
  description: [
    'Software Engineer with ~2 years of experience specializing in building high-performance web applications using React, TypeScript, and the MERN stack.',
    'Currently, a Jr. Software Engineer at TecUnique, leading frontend modules, optimizing application load speeds, and automating pipelines to ship clean, scalable code.'
  ],
  socials: {
    github: 'https://github.com/riituv',
    linkedin: 'https://www.linkedin.com/in/riituv/',
  },
  avatarUrl: '/developer_avatar.png',
  resumeUrl: '/RituVyas-SoftwareEngineer.pdf',
}

export const skillsData: SkillsData = {
  badge: "My Arsenal",
  heading: "Technical Expertise",
  description: "Here are the core languages, frameworks, and workflows I use to bring ideas to life.",
  categories: [
    {
      title: "Languages",
      iconName: "Code2",
      iconColorClass: "text-indigo-500 dark:text-indigo-400",
      skills: ["TypeScript", "JavaScript", "Java", "HTML", "CSS"],
    },
    {
      title: "Frontend Development",
      iconName: "Layers",
      iconColorClass: "text-cyan-500 dark:text-cyan-400",
      skills: ["ReactJS", "NextJS", "Redux", "Context API", "Zustand", "Tailwind CSS", "Material UI", "TanStack Query"],
    },
    {
      title: "Backend & Systems",
      iconName: "Cpu",
      iconColorClass: "text-emerald-500 dark:text-emerald-400",
      skills: ["NodeJS", "ExpressJS", "MongoDB", "PostgreSQL"],
    },
    {
      title: "Tools & DevOps",
      iconName: "Terminal",
      iconColorClass: "text-amber-500 dark:text-amber-400",
      skills: ["Git & GitHub", "Bitbucket", "CI/CD (GitHub Actions)", "Bitbucket Pipelines", "Figma", "JIRA / Confluence"],
    },
  ]
};

export const experiencesData: ExperiencesData = {
  badge: "My Journey",
  heading: "Work Experience",
  description: "A timeline of my professional career, technical growth, and contributions in software engineering.",
  experiences: [
    {
      role: "Jr. Software Engineer",
      company: "TecUnique Pvt. Ltd.",
      location: "Vadodara, Gujarat",
      duration: "July 2024 - Present",
      description: [
        "Led the end-to-end development of a scalable internal product integrated with Jira, built using React and TypeScript, delivering a seamless and intuitive user experience.",
        "Actively contributed across the entire product lifecycle — from market research and requirement analysis to implementation, testing, and release planning.",
        "Implemented Context API and TanStack Query to streamline state management and data fetching, minimizing redundant API calls and enhancing client-side caching efficiency.",
        "Refactored and optimized core modules, improving application load time by 70% and significantly enhancing responsiveness and performance."
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "TecUnique Pvt. Ltd.",
      location: "Vadodara, Gujarat",
      duration: "Dec 2023 - June 2024",
      description: [
        "Collaborated closely with stakeholders and cross-functional teams to define and refine product features aligned with user needs and industry standards.",
        "Automated CI/CD pipelines using Bitbucket Pipelines, cutting deployment time and ensuring faster, more reliable releases.",
        "Consistently contributed to code reviews, architectural discussions, and documentation, fostering maintainability and scalability."
      ],
    },
  ]
};

export const projectsData: ProjectsData = {
  badge: 'My Creations',
  heading: 'Featured Projects',
  description:
    'A detailed catalog of full-stack engineering, interactive frontend applications, and academic research.',
  projects: [
    {
      title: 'Jira-Integrated Internal Product',
      category: 'Frontend',
      description:
        'A scalable internal product integrated with Jira APIs to track and manage software development cycles, specification planning, and feature requirements dynamically.',
      tags: [
        'React',
        'TypeScript',
        'Context API',
        'TanStack Query',
        'Jira REST API',
        'Bitbucket CI/CD',
      ],
      isClientProject: true,
    },
    {
      title: 'Ecommerce Platform',
      category: 'Backend',
      description:
        'A full-stack eCommerce platform featuring secure user authentication, product filtering, and REST API integration. Optimized API requests using Axios & custom caching layers, reducing page load times by 30%.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Axios'],
    },
    {
      title: 'Resume Builder',
      category: 'Frontend',
      description:
        'A dynamic resume builder allowing users to build and export professional resumes using custom predefined templates, featuring instant live previews and responsive forms.',
      tags: ['React.js', 'Tailwind CSS', 'Responsive Design'],
    },
    {
      title: 'DeVerse Publishing Research',
      category: 'Research',
      description:
        "Co-authored and published a research paper titled 'Towards a Decentralized Future: The Role of DeVerse in Publishing Evolution', exploring blockchain and Web3-based decentralized document publication.",
      tags: ['Web3', 'Decentralized Systems', 'IEEE Xplore', 'Academic Writing'],
      liveUrl: 'https://ieeexplore.ieee.org/document/10716143',
    },
  ],
  categories: ['All', 'Frontend', 'Backend', 'Research'],
}

export const contactData: ContactData = {
  badge: "Get In Touch",
  heading: "Let's Collaborate",
  description: "Have a question, feedback, or a project in mind? Drop me a line and let's start building.",
  infoTitle: "Contact Information",
  infoDescription: "I'm currently open to full-time opportunities, freelance partnerships, and collaborations. Don't hesitate to reach out!",
  details: {
    email: "rituvyas141@gmail.com",
    location: "India",
    linkedin: "https://www.linkedin.com/in/riituv/"
  }
};