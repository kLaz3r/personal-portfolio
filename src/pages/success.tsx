import Head from "next/head";
import Link from "next/link";
import React from "react";
import Layout from "~/components/Layout";

const Success = () => {
  return (
    <>
      <Head>
        <title>Stefan Nasturas | Success</title>
      </Head>
      <Layout>
        <div className="h-screen bg-success-bg bg-cover">
          <div className="container mx-auto h-screen px-6">
            <div className="flex h-full w-full items-center justify-center">
              <div className="rounded-xl bg-primary py-6 px-6 opacity-90">
                <h1 className="pb-3 text-6xl">Thank You!</h1>
                <p className="pb-3 text-xl">
                  The form has been submitted successfully.
                </p>
                <Link
                  className="flex w-full flex-row items-center justify-start text-2xl font-bold text-secondary"
                  href="/"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 15 15"
                    fill="none"
                    className="mr-2 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <p>Back to Home</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Success;
