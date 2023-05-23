import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProjectsArr = [
  {
    name: "Food Database",
    img: "/assets/nam-nam-logo.png",
    tech: {
      name: "Next.js & TS",
      link: "https://nextjs.org/",
    },
    api: {
      name: "Edamam",
      link: "https://www.edamam.com/",
    },
    deploy: {
      name: "Vercel",
      link: "https://nam-nam-next.vercel.app/",
    },
    sourceCode: {
      name: "GitHub",
      link: "https://github.com/kLaz3r/nam-nam-next",
    },
  },
  {
    name: "RetroWeb",
    desc: "A web app that lets you play retro games.",
    img: "/assets/retroweb.png",
    tech: {
      name: "Next.js",
      link: "https://nextjs.org/",
    },
    api: {
      name: "None",
      link: "",
    },
    deploy: {
      name: "Vercel",
      link: "https://retroweb-one.vercel.app/",
    },
    sourceCode: {
      name: "GitHub",
      link: "https://github.com/kLaz3r/retroweb",
    },
  },
  {
    name: "Harry Potter Wiki",
    img: "/assets/book.png",
    tech: {
      name: "Next.js & TS",
      link: "https://nextjs.org/",
    },
    api: {
      name: "HP-API",
      link: "https://hp-api.onrender.com/",
    },
    deploy: {
      name: "Vercel",
      link: "https://potter-wiki-five.vercel.app/",
    },
    sourceCode: {
      name: "GitHub",
      link: "https://github.com/kLaz3r/potter-wiki",
    },
  },
];

const ProjectsSection = () => {
  return (
    <div className="w-full overflow-x-hidden bg-secondary pt-24 text-dark lg:h-screen">
      <div className="container mx-auto flex flex-col items-center justify-evenly px-6 lg:h-full">
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 50, ease: "easeInOut" }}
          className="text-center text-6xl drop-shadow-lg"
        >
          Here are some of my projects
        </motion.h1>
        <div className="FlexContainer flex h-full w-full flex-col items-center lg:h-auto lg:flex-row lg:gap-12">
          {ProjectsArr.map((element) => (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 50, ease: "easeInOut" }}
              key={element.name}
              className="flex h-screen w-full  flex-col items-center justify-evenly pt-24 lg:h-auto  lg:pt-6"
            >
              <div className="relative h-32 w-full drop-shadow-xl">
                <Image
                  src={element.img}
                  alt={`${element.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-full">
                <h1 className="pt-12 pb-12 text-center text-5xl drop-shadow-lg lg:text-4xl">
                  {element.name}
                </h1>
                <ul className="space-y-3">
                  <li className="flex w-full items-center justify-between rounded-3xl pl-4 shadow-xl">
                    <span className="text-xl">Tech: </span>
                    <Link
                      className="border-transparent rounded-3xl border-2 bg-dark px-4 py-2 text-secondary transition hover:border-dark hover:bg-secondary hover:text-dark "
                      href={element.tech.link}
                    >
                      {element.tech.name}
                    </Link>
                  </li>
                  <li className="flex w-full items-center justify-between rounded-3xl pl-4 shadow-xl">
                    <span className="text-xl">API: </span>
                    <Link
                      className="border-transparent rounded-3xl border-2 bg-dark px-4 py-2 text-secondary transition hover:border-dark hover:bg-secondary hover:text-dark "
                      href={element.api.link}
                    >
                      {element.api.name}
                    </Link>
                  </li>
                  <li className="flex w-full items-center justify-between rounded-3xl pl-4 shadow-xl">
                    <span className="text-xl">Deploy: </span>
                    <Link
                      className="border-transparent rounded-3xl border-2 bg-dark px-4 py-2 text-secondary transition hover:border-dark hover:bg-secondary hover:text-dark "
                      href={element.deploy.link}
                    >
                      {element.deploy.name}
                    </Link>
                  </li>
                  <li className="flex w-full items-center justify-between rounded-3xl pl-4 shadow-xl">
                    <span className="text-xl">Source Code: </span>
                    <Link
                      className="border-transparent rounded-3xl border-2 bg-dark px-4 py-2 text-secondary transition hover:border-dark hover:bg-secondary hover:text-dark "
                      href={element.sourceCode.link}
                    >
                      {element.sourceCode.name}
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
