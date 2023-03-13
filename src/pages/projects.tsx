import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectsList from "src/Projects.json";
import Layout from "~/components/Layout";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Stefan Nasturas | Projects</title>
        <meta name="description" content="Personal Portfolio Projects Page" />
      </Head>
      <Layout>
        <div className=" bg-projects-bg bg-cover bg-fixed bg-clip-padding bg-no-repeat">
          {ProjectsList.map((element, index) => {
            return (
              <div
                key={element.name}
                className="Project h-screen w-full snap-start bg-cover pt-24 "
              >
                <div className="container mx-auto flex h-full flex-col items-center px-5 pt-6 lg:flex-row lg:gap-6">
                  <div className="ImageWrapper relative mx-auto w-full md:w-3/4 lg:w-1/2">
                    <Image
                      src={element.img}
                      alt={element.name}
                      width="1920"
                      height="1080"
                      priority={index < 1 ? true : false}
                    />
                  </div>
                  <div className="ProjectInfo flex flex-grow flex-col items-center justify-evenly text-center lg:w-1/2">
                    <h1 className="text-4xl drop-shadow-lg lg:py-3 lg:text-6xl">
                      {element.name}
                    </h1>
                    <p className="pb-3 text-xl drop-shadow-lg lg:py-3 lg:text-3xl">
                      {element.desc}
                    </p>
                    <div className="row flex w-full flex-row items-center justify-between border-b-2 border-dashed border-secondary pb-2 text-3xl drop-shadow-lg lg:my-3 lg:pb-4 lg:text-5xl">
                      <p>Tech:</p>
                      <Link
                        className="rounded-xl bg-secondary px-3 py-1 text-dark lg:px-6 lg:py-2"
                        href={element.tech.link}
                      >
                        {element.tech.name}
                      </Link>
                    </div>
                    <div className="row flex w-full flex-row items-center justify-between border-b-2 border-dashed border-secondary pb-2 text-3xl drop-shadow-lg lg:my-3 lg:pb-4 lg:text-5xl">
                      <p>API:</p>
                      <Link
                        className="rounded-xl bg-secondary px-3 py-1 text-dark lg:px-6 lg:py-2"
                        href={element.api.link}
                      >
                        {element.api.name}
                      </Link>
                    </div>
                    <div className="row flex w-full flex-row items-center justify-between border-b-2 border-dashed border-secondary pb-2 text-3xl drop-shadow-lg lg:my-3 lg:pb-4 lg:text-5xl">
                      <p>Deploy:</p>
                      <Link
                        className="rounded-xl bg-secondary px-3 py-1 text-dark lg:px-6 lg:py-2"
                        href={element.deploy.link}
                      >
                        {element.deploy.name}
                      </Link>
                    </div>
                    <div className="row flex w-full flex-row items-center justify-between border-b-2 border-dashed border-secondary pb-2 text-3xl drop-shadow-lg lg:my-3 lg:pb-4 lg:text-5xl">
                      <p>Source Code:</p>
                      <Link
                        className="rounded-xl bg-secondary px-3 py-1 text-dark lg:px-6 lg:py-2"
                        href={element.sourceCode.link}
                      >
                        {element.sourceCode.name}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export default Projects;
