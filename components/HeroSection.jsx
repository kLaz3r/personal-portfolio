import Image from "next/image";
import React from "react";

const HeroSection = () => {
    return (
        <div className="h-screen snap-start pt-24 pb-6">
            <Image
                className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
                src="/assets/hero-bg.svg"
                fill
                alt="Hero Background"
            />
            <div
                id="FlexContainer"
                className=" container mx-auto flex h-full w-full flex-col items-center justify-between px-6 md:flex-row"
            >
                <div id="HeroHeading" className="h-1/2 py-6 lg:h-auto lg:w-1/2">
                    <div
                        id="Flex"
                        className="flex h-full flex-col items-start justify-center"
                    >
                        <h4 className="text-7xl sm:text-8xl lg:text-9xl">
                            Hi, I am{" "}
                            <span className="text-secondary">Stefan.</span>
                        </h4>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl">
                            I am a frontend web developer
                        </h2>
                        <p className="mt-6 text-xl lg:text-2xl">
                            This is my portfolio, here you can take a look at my
                            work and learn more about me.
                        </p>
                    </div>
                </div>
                <div
                    id="HeroImage"
                    className="relative z-0 h-1/2 w-full drop-shadow-lg lg:h-4/5 lg:w-1/2"
                >
                    <Image
                        className="object-contain"
                        src="/assets/portrait.png"
                        fill
                        alt="portrait"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
