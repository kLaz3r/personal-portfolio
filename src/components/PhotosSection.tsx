import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

type PhotosSectionProps = {
  imagesArr: {
    src: string;
    width: number;
    height: number;
  }[];
};

const PhotosSection = ({ imagesArr }: PhotosSectionProps) => {
  return (
    <div className="relative min-h-screen  overflow-x-hidden pt-24 xl:h-screen">
      <div className="absolute top-0 left-0 -z-10 h-full w-full">
        <Image
          src="/assets/photos-bg.svg"
          fill
          alt="Photos Section Background"
        />
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center px-6 xl:h-full xl:flex-row-reverse">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            ease: "easeInOut",
          }}
          className="SectionHeading ml-auto flex w-full items-center justify-center xl:w-1/2"
        >
          <h1 className="py-12 text-end text-6xl drop-shadow-lg xl:pl-6 xl:text-start xl:text-8xl">
            I also like <span className="xl:text-secondary">photography</span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            ease: "easeInOut",
          }}
          className="ImageGallery w-full drop-shadow-lg xl:w-1/2"
        >
          <ResponsiveMasonry>
            <Masonry>
              {imagesArr.map((element) => (
                <motion.div key={element.src} className="relative m-1">
                  <Image
                    src={element.src}
                    width={element.width}
                    height={element.height}
                    alt={element.src}
                  />
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </motion.div>
      </div>
    </div>
  );
};

export default PhotosSection;
