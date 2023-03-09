import Image from "next/image";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const PhotosSection = ({ imagesArr }) => {
    return (
        <div className="relative snap-start min-h-screen w-screen pt-24">
            <div className="-z-10 absolute top-0 left-0 w-full h-full">
                <Image
                    src="/assets/photos-bg.svg"
                    fill
                    alt="Photos Section Background"
                />
            </div>
            <div className="container mx-auto xl:h-full flex flex-col xl:flex-row justify-center items-center px-6">
                <div className="SectionHeading flex justify-center items-center w-1/2 ml-auto">
                    <h1 className="text-6xl text-end py-12 drop-shadow-lg xl:pr-6 xl:text-8xl">
                        I also like{" "}
                        <span className="xl:text-secondary">photography</span>
                    </h1>
                </div>
                <div className="ImageGallery w-full xl:w-1/2">
                    <ResponsiveMasonry>
                        <Masonry>
                            {imagesArr.map((element) => (
                                <div key={element.src} className="relative m-1">
                                    <Image
                                        src={element.src}
                                        width={element.width}
                                        height={element.height}
                                        alt={element.src}
                                    />
                                </div>
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>
        </div>
    );
};

export default PhotosSection;
