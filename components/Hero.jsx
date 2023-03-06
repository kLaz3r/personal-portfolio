import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <div className="h-screen pt-24 pb-6 border-b border-secondary">
            <div
                id="FlexContainer"
                className="flex flex-col md:flex-row h-full w-full justify-between items-center"
            >
                <div id="HeroHeading" className="py-6 px-6 h-1/2">
                    <div
                        id="Flex"
                        className="flex h-full flex-col justify-center items-start"
                    >
                        <h4 className="text-7xl text-">
                            Hi, I am{" "}
                            <span className="text-secondary">Stefan.</span>
                        </h4>
                        <h2 className="text-4xl">
                            I am a frontend web developer
                        </h2>
                        <p className="text-xl mt-6">
                            This is my portfolio, here you can take a look at my
                            work and learn more about me.
                        </p>
                    </div>
                </div>
                <div id="HeroImage" className="relative h-1/2 w-full z-0">
                    <Image
                        className="object-contain"
                        src="/assets/portrait.png"
                        fill
                        alt="portrait"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
