import Layout from "@/components/Layout";
import Head from "next/head";
import Hero from "@/components/Hero";

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
                <Hero />
            </Layout>
        </>
    );
}
