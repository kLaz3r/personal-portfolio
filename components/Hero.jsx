import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <div className=" h-screen pt-24 pb-6 border-b border-secondary">
            <div
                id="FlexContainer"
                className=" container px-6 mx-auto flex flex-col md:flex-row h-full w-full justify-between items-center"
            >
                <div id="HeroHeading" className="py-6 h-1/2 lg:w-1/2 lg:h-auto">
                    <div
                        id="Flex"
                        className="flex h-full flex-col justify-center items-start"
                    >
                        <h4 className="text-7xl sm:text-8xl lg:text-9xl">
                            Hi, I am{" "}
                            <span className="text-secondary">Stefan.</span>
                        </h4>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl">
                            I am a frontend web developer
                        </h2>
                        <p className="text-xl mt-6 lg:text-2xl">
                            This is my portfolio, here you can take a look at my
                            work and learn more about me.
                        </p>
                    </div>
                </div>
                <div
                    id="HeroImage"
                    className="relative h-1/2 w-full lg:w-1/2 lg:h-3/4 z-0"
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

export default Hero;
