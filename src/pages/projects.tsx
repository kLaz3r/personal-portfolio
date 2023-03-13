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
        <div className="">
          {ProjectsList.map((element) => {
            return (
              <div
                key={element.name}
                className="Project h-screen w-full snap-start bg-wave-mobile-1 bg-cover py-6 pt-24 even:bg-wave-mobile-2 lg:bg-wave-pc-1 lg:even:bg-wave-pc-2"
              >
                <div className="container mx-auto flex h-full flex-col px-6 pt-6">
                  <div className="ImageWrapper relative h-56 w-full rounded-lg border-8 border-solid border-dark">
                    <Image src={element.img} alt={element.name} fill />
                  </div>
                  <div className="ProjectInfo flex flex-grow flex-col justify-evenly text-center">
                    <h1 className="text-4xl drop-shadow-lg">{element.name}</h1>
                    <p className="pb-3 text-xl drop-shadow-lg">
                      {element.desc}
                    </p>
                    <div className="row flex w-full flex-row items-center justify-between border-b-2 border-dashed border-secondary pb-2 text-3xl drop-shadow-lg">
                      <h3>Tech:</h3>
                      <Link
                        className="rounded-xl bg-secondary px-3 py-1 text-dark"
                        href={element.tech.link}
                      >
                        {element.tech.name}
                      </Link>
                    </div>
                    <div className="row flex w-full flex-row justify-between border-b-2 border-dashed border-secondary pb-2 text-3xl drop-shadow-lg">
                      <h3>API:</h3>
                      <Link
                        className="rounded-xl bg-secondary px-3 py-1 text-dark"
                        href={element.api.link}
                      >
                        {element.api.name}
                      </Link>
                    </div>
                    <div className="row flex w-full flex-row justify-between border-b-2 border-dashed border-secondary pb-2 text-3xl drop-shadow-lg">
                      <h3>Deploy:</h3>
                      <Link
                        className="rounded-xl bg-secondary px-3 py-1 text-dark"
                        href={element.deploy.link}
                      >
                        {element.deploy.name}
                      </Link>
                    </div>
                    <div className="row flex w-full flex-row justify-between border-b-2 border-dashed border-secondary pb-2 text-3xl drop-shadow-lg">
                      <h3>Source Code:</h3>
                      <Link
                        className="rounded-xl bg-secondary px-3 py-1 text-dark"
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
