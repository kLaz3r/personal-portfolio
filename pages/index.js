import HeroSection from "@/components/HeroSection";
import Layout from "@/components/Layout";
import SkillsSection from "@/components/SkillsSection";
import Head from "next/head";

export default function Home() {
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
                <SkillsSection />
            </Layout>
        </>
    );
}
