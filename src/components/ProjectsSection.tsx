import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProjectsArr = [
    {
        name: "Food Database",
        img: "/assets/nam-nam-logo.png",
        tech: {
            name: "Next.js",
            link: "https://nextjs.org/",
        },
        api: {
            name: "Edamam",
            link: "https://www.edamam.com/",
        },
        deploy: {
            name: "Netlify",
            link: "https://nam-nam-next.netlify.app/",
        },
        sourceCode: {
            name: "GitHub",
            link: "https://github.com/kLaz3r/nam-nam-next",
        },
    },
    {
        name: "Harry Potter Wiki",
        img: "/assets/book.png",
        tech: {
            name: "Next.js",
            link: "https://nextjs.org/",
        },
        api: {
            name: "HP-API",
            link: "https://hp-api.onrender.com/",
        },
        deploy: {
            name: "Netlify",
            link: "https://harrypotter-wiki.netlify.app/",
        },
        sourceCode: {
            name: "GitHub",
            link: "https://github.com/kLaz3r/potter-wiki",
        },
    },
    {
        name: "Personal Portfolio",
        img: "/assets/logob.png",
        tech: {
            name: "Next.js",
            link: "https://nextjs.org/",
        },
        api: {
            name: "None",
            link: "/",
        },
        deploy: {
            name: "Netlify",
            link: "http://localhost:3000/",
        },
        sourceCode: {
            name: "GitHub",
            link: "https://github.com/kLaz3r/personal-portfolio",
        },
    },
];

const ProjectsSection = () => {
    return (
        <div className="w-full bg-secondary pt-24 text-dark lg:h-screen lg:snap-start">
            <div className="container mx-auto flex flex-col items-center justify-evenly px-6 lg:h-full">
                <h1 className="text-center text-6xl">
                    Here are some of my projects
                </h1>
                <div className="FlexContainer flex h-full w-full flex-col items-center lg:h-auto lg:flex-row lg:gap-12">
                    {ProjectsArr.map((element) => (
                        <div
                            key={element.name}
                            id="Project"
                            className="flex h-screen w-full snap-start flex-col items-center justify-evenly pt-24 lg:h-auto lg:pt-6"
                        >
                            <div
                                id="ImageWrapper"
                                className="relative h-32 w-full drop-shadow-xl"
                            >
                                <Image
                                    src={element.img}
                                    alt={element.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div id="ProjectInfo " className="w-full">
                                <h1 className="pt-12 pb-12 text-center text-5xl lg:text-4xl">
                                    {element.name}
                                </h1>
                                <ul className="space-y-3">
                                    <li className="flex w-full items-center justify-between rounded-3xl pl-4 shadow-xl">
                                        <span className="text-xl">Tech: </span>
                                        <Link
                                            className="rounded-3xl bg-dark px-4 py-2 text-secondary"
                                            href={element.tech.link}
                                        >
                                            {element.tech.name}
                                        </Link>
                                    </li>
                                    <li className="flex w-full items-center justify-between rounded-3xl pl-4 shadow-xl">
                                        <span className="text-xl">API: </span>
                                        <Link
                                            className="rounded-3xl bg-dark px-4 py-2 text-secondary"
                                            href={element.api.link}
                                        >
                                            {element.api.name}
                                        </Link>
                                    </li>
                                    <li className="flex w-full items-center justify-between rounded-3xl pl-4 shadow-xl">
                                        <span className="text-xl">
                                            Deploy:{" "}
                                        </span>
                                        <Link
                                            className="rounded-3xl bg-dark px-4 py-2 text-secondary"
                                            href={element.deploy.link}
                                        >
                                            {element.deploy.name}
                                        </Link>
                                    </li>
                                    <li className="flex w-full items-center justify-between rounded-3xl pl-4 shadow-xl">
                                        <span className="text-xl">
                                            Source Code:{" "}
                                        </span>
                                        <Link
                                            className="rounded-3xl bg-dark px-4 py-2 text-secondary"
                                            href={element.sourceCode.link}
                                        >
                                            {element.sourceCode.name}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsSection;
