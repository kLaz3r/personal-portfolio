import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="h-24 fixed z-50 w-screen bg-dark border-secondary border-b">
            <div className="container mx-auto h-full flex flex-row justify-between items-center px-6">
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
                        className="HamburgerIconWrapper relative h-7 w-10 z-50 lg:hidden"
                    >
                        {/* <Image
                        className="object-contain"
                        src="/assets/hamburger.svg"
                        alt="hamburger menu"
                        fill
                    /> */}
                        <div className="space-y-2">
                            <div
                                className={`w-10 h-1 transition-all ${
                                    isMenuOpen ? "bg-secondary" : "bg-light"
                                }`}
                            ></div>
                            <div
                                className={`w-10 h-1 transition-all ${
                                    isMenuOpen ? "bg-secondary" : "bg-light"
                                }`}
                            ></div>
                            <div
                                className={`w-10 h-1 transition-all ${
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
                        } transition-all absolute z-40 top-0 left-0 pl-12 py-6 text-6xl gap-12 bg-dark flex flex-col h-screen w-screen justify-center items-start`}
                    >
                        <Link href="/">Home</Link>
                        <Link href="/projects">Projects</Link>
                        <Link href="/photos">Photos</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                    <div className="NavItems hidden gap-6 lg:flex text-3xl font-normal">
                        <Link
                            className="hover:text-secondary transition-all"
                            href="/"
                        >
                            Home
                        </Link>
                        <Link
                            className="hover:text-secondary transition-all"
                            href="/projects"
                        >
                            Projects
                        </Link>
                        <Link
                            className="hover:text-secondary transition-all"
                            href="/photos"
                        >
                            Photos
                        </Link>
                        <Link
                            className="hover:text-secondary transition-all"
                            href="/about"
                        >
                            About
                        </Link>
                        <Link
                            className="hover:text-secondary transition-all"
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
