import HeroSection from "@/components/HeroSection";
import Layout from "@/components/Layout";
import PhotosSection from "@/components/PhotosSection";
import ProjectsSection from "@/components/ProjectsSection";
import Head from "next/head";

export default function Home({ imagesArr }) {
    console.log(imagesArr);
    return (
        <>
            <Head>
                <title>Stefan Nasturas Web Developer</title>
                <meta name="description" content="Personal Portfolio" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <HeroSection />
                <ProjectsSection />
                <PhotosSection imagesArr={imagesArr} />
            </Layout>
        </>
    );
}

export async function getStaticProps(context) {
    const fs = require("fs");
    const sizeOf = require("image-size");
    try {
        const files = await fs.promises.readdir(
            "./public/assets/PhotosSection/"
        );
        const imagesArr = files.map((element) => {
            let { width, height } = sizeOf(
                `./public/assets/PhotosSection/${element}`
            );
            return {
                src: `/assets/PhotosSection/${element}`,
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
