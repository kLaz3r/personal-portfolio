import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectsSection = () => {
    return (
        <div className="w-full pt-24 lg:h-screen bg-secondary text-dark lg:snap-start">
            <div className="container flex flex-col justify-evenly items-center mx-auto px-6 lg:h-full">
                <h1 className="text-center text-6xl">
                    Here are some of my projects
                </h1>
                <div className="FlexContainer w-full h-full flex flex-col lg:flex-row lg:gap-12 items-center lg:h-auto">
                    <div
                        id="Project"
                        className="w-full snap-start pt-24 h-screen flex flex-col items-center justify-evenly lg:h-auto lg:pt-6"
                    >
                        <div
                            id="ImageWrapper"
                            className="relative h-32 w-full drop-shadow-xl"
                        >
                            <Image
                                src="/assets/nam-nam-logo.png"
                                alt="Nam-nam logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div id="ProjectInfo " className="w-full">
                            <h1 className="text-5xl text-center pt-12 pb-12 lg:text-4xl">
                                Food Database
                            </h1>
                            <ul className="space-y-3">
                                <li className="flex w-full shadow-xl justify-between items-center rounded-3xl pl-4">
                                    <span className="text-xl">Tech: </span>
                                    <Link
                                        className="px-4 py-2 bg-dark text-secondary rounded-3xl"
                                        href="https://nextjs.org/"
                                    >
                                        Next.js
                                    </Link>
                                </li>
                                <li className="flex w-full shadow-xl justify-between items-center rounded-3xl pl-4">
                                    <span className="text-xl">API: </span>
                                    <Link
                                        className="px-4 py-2 bg-dark text-secondary rounded-3xl"
                                        href="https://www.edamam.com/"
                                    >
                                        Edamam
                                    </Link>
                                </li>
                                <li className="flex w-full shadow-xl justify-between items-center rounded-3xl pl-4">
                                    <span className="text-xl">Deploy: </span>
                                    <Link
                                        className="px-4 py-2 bg-dark text-secondary rounded-3xl"
                                        href="https://nam-nam-next.netlify.app/"
                                    >
                                        Netlify
                                    </Link>
                                </li>
                                <li className="flex w-full shadow-xl justify-between items-center rounded-3xl pl-4">
                                    <span className="text-xl">
                                        Source Code:{" "}
                                    </span>
                                    <Link
                                        className="px-4 py-2 bg-dark text-secondary rounded-3xl"
                                        href="https://github.com/kLaz3r/nam-nam-next"
                                    >
                                        Github
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        id="Project"
                        className="w-full snap-start pt-24 h-screen flex flex-col items-center justify-evenly lg:h-auto lg:pt-6"
                    >
                        <div
                            id="ImageWrapper"
                            className="relative h-32 w-full drop-shadow-xl"
                        >
                            <Image
                                src="/assets/book.png"
                                alt="Harry Potter logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div id="ProjectInfo" className="w-full">
                            <h1 className=" text-center text-5xl pt-12 pb-12 lg:text-4xl">
                                Harry Potter Wiki
                            </h1>
                            <ul className="space-y-3 w-full">
                                <li className="flex w-full shadow-xl justify-between items-center rounded-3xl pl-4">
                                    <span className="text-xl">Tech: </span>
                                    <Link
                                        className="px-4 py-2 bg-dark text-secondary rounded-3xl"
                                        href="https://nextjs.org/"
                                    >
                                        Next.js
                                    </Link>
                                </li>
                                <li className="flex w-full shadow-xl justify-between items-center rounded-3xl pl-4">
                                    <span className="text-xl">API: </span>
                                    <Link
                                        className="px-4 py-2 bg-dark text-secondary rounded-3xl"
                                        href="https://hp-api.onrender.com/"
                                    >
                                        HP-API
                                    </Link>
                                </li>
                                <li className="flex w-full shadow-xl justify-between items-center rounded-3xl pl-4">
                                    <span className="text-xl">Deploy: </span>
                                    <Link
                                        className="px-4 py-2 bg-dark text-secondary rounded-3xl"
                                        href="https://harrypotter-wiki.netlify.app/"
                                    >
                                        Netlify
                                    </Link>
                                </li>
                                <li className="flex w-full shadow-xl justify-between items-center rounded-3xl pl-4">
                                    <span className="text-xl">
                                        Source Code:{" "}
                                    </span>
                                    <Link
                                        className="px-4 py-2 bg-dark text-secondary rounded-3xl"
                                        href="https://github.com/kLaz3r/potter-wiki"
                                    >
                                        Github
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        id="Project"
                        className="w-full snap-start pt-24 h-screen flex flex-col items-center justify-evenly lg:h-auto lg:pt-6"
                    >
                        <div
                            id="ImageWrapper"
                            className="relative h-32 w-full drop-shadow-xl"
                        >
                            <Image
                                src="/assets/logob.png"
                                alt="Harry Potter logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div id="ProjectInfo" className="w-full">
                            <h1 className=" text-center text-5xl pt-12 pb-12 lg:text-4xl">
                                Personal Portfolio
                            </h1>
                            <ul className="space-y-3 w-full">
                                <li className="flex w-full shadow-xl justify-between items-center rounded-3xl pl-4">
                                    <span className="text-xl">Tech: </span>
                                    <Link
                                        className="px-4 py-2 bg-dark text-secondary rounded-3xl"
                                        href="https://nextjs.org/"
                                    >
                                        Next.js
                                    </Link>
                                </li>
                                <li className="flex w-full shadow-xl justify-between items-center rounded-3xl pl-4">
                                    <span className="text-xl">API: </span>
                                    <Link
                                        className="px-4 py-2 bg-dark text-secondary rounded-3xl"
                                        href="/"
                                    >
                                        None
                                    </Link>
                                </li>
                                <li className="flex w-full shadow-xl justify-between items-center rounded-3xl pl-4">
                                    <span className="text-xl">Deploy: </span>
                                    <Link
                                        className="px-4 py-2 bg-dark text-secondary rounded-3xl"
                                        href="/"
                                    >
                                        Netlify
                                    </Link>
                                </li>
                                <li className="flex w-full shadow-xl justify-between items-center rounded-3xl pl-4">
                                    <span className="text-xl">
                                        Source Code:{" "}
                                    </span>
                                    <Link
                                        className="px-4 py-2 bg-dark text-secondary rounded-3xl"
                                        href="https://github.com/kLaz3r/personal-portfolio"
                                    >
                                        Github
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsSection;
