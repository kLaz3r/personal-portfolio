import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Photos = ({ imagesArr }) => {
    console.log(imagesArr);
    return (
        <Layout>
            <div className="pt-24">
                <div className="container mx-auto px-5 pt-6">
                    <ResponsiveMasonry>
                        <Masonry>
                            {imagesArr.map((element) => (
                                <div key={element} className="ImageWrapper">
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
        </Layout>
    );
};

export default Photos;

export async function getStaticProps(context) {
    const fs = require("fs");
    const sizeOf = require("image-size");
    try {
        const files = await fs.promises.readdir("./public/images/");
        const imagesArr = files.map((element) => {
            let { width, height } = sizeOf(`./public/images/${element}`);
            return {
                src: `/images/${element}`,
                width,
                height,
            };
        });
        return {
            props: {
                imagesArr,
            }, // will be passed to the page component as props
        };
    } catch (err) {
        console.log(err);
    }
    return {
        props: {},
    };
}
