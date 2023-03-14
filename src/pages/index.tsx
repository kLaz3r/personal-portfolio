import Head from "next/head";
import HeroSection from "src/components/HeroSection";
import Layout from "src/components/Layout";
import PhotosSection from "src/components/PhotosSection";
import ProjectsSection from "src/components/ProjectsSection";
import AboutSection from "~/components/AboutSection";

import fs from "fs";
import sizeOf from "image-size";

type HomeProps = {
  imagesArr: {
    src: string;
    width: number;
    height: number;
  }[];
};

export default function Home({ imagesArr }: HomeProps) {
  console.log(imagesArr);
  return (
    <>
      <Head>
        <title>Stefan Nasturas Web Developer</title>
        <meta name="description" content="Personal Portfolio Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeroSection />
        <ProjectsSection />
        <PhotosSection imagesArr={imagesArr} />
        <AboutSection />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  try {
    const files = await fs.promises.readdir("./public/assets/PhotosSection/");
    const imagesArr = files.map((element) => {
      const { width, height } = sizeOf(
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
