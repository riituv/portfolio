import React from "react";

interface TechLogoProps {
  name: string;
  className?: string;
}

export function TechLogo({ name, className = "size-4" }: TechLogoProps) {
  const normalized = name.trim().toLowerCase();

  let src = "";

  switch (normalized) {
    case "typescript":
      src = "/techIcons/typescript.svg";
      break;
    case "javascript":
      src = "/techIcons/javascript.svg";
      break;
    case "java":
      src = "/techIcons/java.svg";
      break;
    case "html":
    case "html5":
      src = "/techIcons/html5.svg";
      break;
    case "css":
    case "css3":
      src = "/techIcons/css3.svg";
      break;
    case "reactjs":
    case "react.js":
    case "react":
    case "context api":
      src = "/techIcons/reactjs.svg";
      break;
    case "zustand":
      src = "/techIcons/zustand.jpeg";
      break;
    case "nextjs":
    case "next.js":
    case "next":
      src = "/techIcons/nextjs.svg";
      break;
    case "redux":
      src = "/techIcons/redux.svg";
      break;
    case "tailwind css":
    case "tailwind":
      src = "/techIcons/tailwindcss.svg";
      break;
    case "material ui":
    case "mui":
      src = "/techIcons/css3.svg";
      break;
    case "tanstack query":
    case "react query":
      src = "/techIcons/tanstackQuery.png";
      break;
    case "nodejs":
    case "node.js":
    case "node":
      src = "/techIcons/nodejs.svg";
      break;
    case "expressjs":
    case "express.js":
    case "express":
      return (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/techIcons/expressjs-dark.svg" 
            alt={name} 
            className={`${className} object-contain dark:hidden`}
            draggable={false}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/techIcons/expressjs-light.svg" 
            alt={name} 
            className={`${className} object-contain hidden dark:block`}
            draggable={false}
          />
        </>
      );
    case "mongodb":
    case "mongo":
    case "firebase":
      src = "/techIcons/mongodb.svg";
      break;
    case "postgresql":
    case "postgres":
    case "mysql":
      src = "/techIcons/postgresql.svg";
      break;
    case "git & github":
    case "git":
      src = "/techIcons/git.svg";
      break;
    case "github":
    case "ci/cd (github actions)":
    case "github actions":
    case "ci/cd":
      return (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/techIcons/github-dark.svg" 
            alt={name} 
            className={`${className} object-contain dark:hidden`}
            draggable={false}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/techIcons/github-light.svg" 
            alt={name} 
            className={`${className} object-contain hidden dark:block`}
            draggable={false}
          />
        </>
      );
    case "bitbucket":
    case "bitbucket pipelines":
    case "pipelines":
      src = "/techIcons/bitbucket.svg";
      break;
    case "figma":
      src = "/techIcons/figma.svg";
      break;
    case "jira / confluence":
    case "jira":
      src = "/techIcons/jira.svg";
      break;
    case "aws":
      src = "/techIcons/aws.svg";
      break;
    case "babel":
      src = "/techIcons/babel.svg";
      break;
    case "docker":
      src = "/techIcons/docker.svg";
      break;
    case "eslint":
      src = "/techIcons/eslint.svg";
      break;
    case "prettier":
      src = "/techIcons/prettier.svg";
      break;
    case "prisma":
      src = "/techIcons/prisma.svg";
      break;
    case "vite":
    case "vitejs":
      src = "/techIcons/vitejs.svg";
      break;
    default:
      src = "";
  }

  if (!src) {
    return (
      <span className="size-4 flex items-center justify-center font-bold text-indigo-500">•</span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img 
      src={src} 
      alt={name} 
      className={`${className} object-contain`}
      draggable={false}
    />
  );
}
