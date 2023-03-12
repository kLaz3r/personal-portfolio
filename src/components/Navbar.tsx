import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="fixed z-50 h-24 w-screen border-b border-secondary bg-dark">
            <div className="container mx-auto flex h-full flex-row items-center justify-between px-6">
                <div className="ImageWrapper relative h-full w-32">
                    <Image
                        className="object-contain"
                        src="/assets/logog.png"
                        alt="Logo"
                        fill
                    />
                </div>
                <div className="NavItemsContainer">
                    <div
                        onClick={() => setMenuOpen(!isMenuOpen)}
                        className="HamburgerIconWrapper relative z-50 h-7 w-10 lg:hidden"
                    >
                        {/* <Image
                        className="object-contain"
                        src="/assets/hamburger.svg"
                        alt="hamburger menu"
                        fill
                    /> */}
                        <div className="space-y-2">
                            <div
                                className={`h-1 w-10 transition-all ${
                                    isMenuOpen ? "bg-secondary" : "bg-light"
                                }`}
                            ></div>
                            <div
                                className={`h-1 w-10 transition-all ${
                                    isMenuOpen ? "bg-secondary" : "bg-light"
                                }`}
                            ></div>
                            <div
                                className={`h-1 w-10 transition-all ${
                                    isMenuOpen ? "bg-secondary" : "bg-light"
                                }`}
                            ></div>
                        </div>
                    </div>
                    <div
                        className={`NavItemsModal ${
                            isMenuOpen
                                ? "visible opacity-95"
                                : "invisible -translate-x-full opacity-0"
                        } absolute top-0 left-0 z-40 flex h-screen w-screen flex-col items-start justify-center gap-12 bg-dark py-6 pl-12 text-6xl transition-all`}
                    >
                        <Link href="/">Home</Link>
                        <Link href="/projects">Projects</Link>
                        <Link href="/photos">Photos</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                    <div className="NavItems hidden gap-6 text-3xl font-normal lg:flex">
                        <Link
                            className="transition-all hover:text-secondary"
                            href="/"
                        >
                            Home
                        </Link>
                        <Link
                            className="transition-all hover:text-secondary"
                            href="/projects"
                        >
                            Projects
                        </Link>
                        <Link
                            className="transition-all hover:text-secondary"
                            href="/photos"
                        >
                            Photos
                        </Link>
                        <Link
                            className="transition-all hover:text-secondary"
                            href="/about"
                        >
                            About
                        </Link>
                        <Link
                            className="transition-all hover:text-secondary"
                            href="/contact"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
