import axios from "axios";
import { motion } from "framer-motion";
import Head from "next/head";
import React, { useState } from "react";
import Layout from "~/components/Layout";

type Status = {
  submitted: boolean;
  submitting: boolean;
  info: {
    error: boolean;
    msg: string | null;
  };
};

const Contact = () => {
  const [status, setStatus] = useState<Status>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });
  const handleServerResponse = (ok: boolean, msg: string | null) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        ...status,
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/xjvddgdv",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <>
      <Head>
        <title>Stefan Nasturas | Contact</title>
      </Head>
      <Layout>
        <div className="h-screen bg-contact-bg-mobile bg-cover pt-24 lg:bg-contact-bg-pc">
          <div className="container mx-auto h-full px-6 py-9">
            <motion.form
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 50, ease: "easeInOut" }}
              className="h-full"
              name="contact"
              onSubmit={handleOnSubmit}
            >
              <div className="mx-auto flex h-full max-w-lg flex-col justify-center gap-6">
                <h1 className="pb-3 text-center text-4xl">Contact Me</h1>
                <div className="input-group w-full justify-center">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    onChange={handleOnChange}
                    value={inputs.email}
                    className="w-full rounded-lg border-b-2 border-solid border-secondary bg-dark py-2 px-3 text-light outline-none drop-shadow-xl transition-all placeholder:text-secondary focus:border-light focus:placeholder:text-light"
                  />
                </div>
                <div className="input-group max-h-56 w-full flex-grow justify-center">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    required
                    onChange={handleOnChange}
                    value={inputs.message}
                    className="h-full w-full rounded-xl border-b-2 border-solid border-secondary bg-dark py-2 px-3 text-light outline-none drop-shadow-xl transition-all placeholder:text-secondary focus:border-light focus:placeholder:text-light"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="mx-auto w-1/2 rounded-lg border-2 border-dark bg-secondary py-3 px-2 text-xl text-dark transition-all hover:border-secondary hover:bg-dark hover:text-secondary active:border-secondary active:bg-dark active:text-secondary"
                >
                  {!status.submitting
                    ? !status.submitted
                      ? "Submit"
                      : "Submitted"
                    : "Submitting..."}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
