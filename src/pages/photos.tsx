import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Layout from "src/components/Layout";

import fs from "fs";
import sizeOf from "image-size";

type PhotosProps = {
  imagesArr: {
    src: string;
    width: number;
    height: number;
  }[];
};

const Photos = ({ imagesArr }: PhotosProps) => {
  console.log(imagesArr);
  return (
    <>
      <Head>
        <title>Stefan Nasturas | Photos</title>
        <meta name="description" content="Personal Portfolio Photos Page" />
      </Head>
      <Layout>
        <div className="bg-photos-bg bg-cover bg-fixed bg-clip-padding bg-no-repeat pt-24">
          <div className="container mx-auto px-5 pt-6">
            <ResponsiveMasonry>
              <Masonry>
                {imagesArr.map((element, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 50,
                      ease: "easeInOut",
                    }}
                    key={element.src}
                    className="ImageWrapper m-1 drop-shadow-lg"
                  >
                    <Image
                      src={element.src}
                      width={element.width}
                      height={element.height}
                      alt={element.src}
                      priority={index < 3 ? true : false}
                    />
                  </motion.div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Photos;

export async function getStaticProps() {
  try {
    const files = await fs.promises.readdir("./public/images/");
    const imagesArr = files.map((element) => {
      const { width, height } = sizeOf(`./public/images/${element}`);
      return {
        src: `/images/${element}`,
        width,
        height,
      };
    });
    return {
      props: {
        imagesArr: imagesArr.reverse(),
      },
    };
  } catch (err) {
    console.log(err);
  }
  return {
    props: {},
  };
}
