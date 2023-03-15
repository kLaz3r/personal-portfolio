import Head from "next/head";
import React from "react";
import Layout from "~/components/Layout";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Stefan Nasturas | Contact</title>
      </Head>
      <Layout>
        <div className="h-screen bg-contact-bg-mobile bg-cover pt-24 lg:bg-contact-bg-pc">
          <div className="container mx-auto h-full px-6 py-9">
            <form
              method="POST"
              data-netlify="true"
              className="mx-auto flex h-full max-w-lg flex-col justify-center gap-6"
              name="contact"
            >
              <h1 className="pb-3 text-center text-4xl">Contact Me</h1>
              <div className="input-group w-full justify-center">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                  className="w-full rounded-lg border-b-2 border-solid border-secondary bg-dark py-2 px-3 text-light outline-none drop-shadow-xl transition-all placeholder:text-secondary focus:border-light focus:placeholder:text-light"
                />
              </div>
              <div className="input-group w-full justify-center">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                  className="w-full rounded-lg border-b-2 border-solid border-secondary bg-dark py-2 px-3 text-light outline-none drop-shadow-xl transition-all placeholder:text-secondary focus:border-light focus:placeholder:text-light"
                />
              </div>
              <div className="input-group w-full justify-center">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                  className="w-full rounded-lg border-b-2 border-solid border-secondary bg-dark py-2 px-3 text-light outline-none drop-shadow-xl transition-all placeholder:text-secondary focus:border-light focus:placeholder:text-light"
                />
              </div>
              <div className="input-group max-h-56 w-full flex-grow justify-center">
                <textarea
                  name="message"
                  id="subject"
                  placeholder="Message"
                  required
                  className="h-full w-full rounded-xl border-b-2 border-solid border-secondary bg-dark py-2 px-3 text-light outline-none drop-shadow-xl transition-all placeholder:text-secondary focus:border-light focus:placeholder:text-light"
                />
              </div>
              <button
                type="submit"
                className="mx-auto w-1/2 rounded-lg border-2 border-dark bg-secondary py-3 px-2 text-xl text-dark transition-all hover:border-secondary hover:bg-dark hover:text-secondary active:border-secondary active:bg-dark active:text-secondary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
