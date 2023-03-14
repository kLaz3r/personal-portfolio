import Image from "next/image";
import Link from "next/link";
import React from "react";

const skills = [
  {
    name: "HTML",
    link: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS",
    link: "https://www.w3schools.com/css/",
  },
  {
    name: "C/C++",
    link: "https://www.cplusplus.com/",
  },
  {
    name: "SQL",
    link: "https://www.mysql.com/",
  },
  {
    name: "JavaScript",
    link: "https://www.javascript.com/",
  },
  {
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React.js",
    link: "https://reactjs.org/",
  },
  {
    name: "Next.js",
    link: "https://nextjs.org/",
  },
];

const AboutSection = () => {
  return (
    <div className="h-screen snap-start bg-about-bg bg-cover pt-24">
      <div className="container mx-auto flex h-full flex-col items-center justify-center gap-6 px-6 lg:flex-row">
        <div className="ImageWrapper relative hidden h-56 drop-shadow-lg lg:block lg:w-1/2 xl:h-72">
          <Image
            alt="About Image"
            src="/assets/logob.png"
            className="object-contain"
            fill
          />
        </div>
        <div className="AboutInfo drop-shadow-lg lg:w-1/2">
          <p className="pb-3 text-2xl sm:text-3xl md:text-4xl lg:text-2xl xl:text-3xl">
            I consider myself to be an ambitious front end developer. At the age
            of 4 I got my first computer, on it I learned to read, install games
            and fix bugs. From then until now, I have gathered a lot of
            experience in the art of using a computer efficiently. I started
            learning computer science and programming when I realised that I
            enjoyed doing it and was extremely passionate about it.
          </p>
          <div className="Skills border-t border-dashed border-secondary py-3">
            <p className="pb-3 text-4xl">Here are my skills:</p>
            <div className="grid grid-cols-2 xl:grid-cols-4">
              {skills.map((element) => (
                <Link
                  key={element.name}
                  className="m-3 rounded-xl bg-secondary px-3 py-2 text-center text-2xl text-dark"
                  href={element.link}
                >
                  {element.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;