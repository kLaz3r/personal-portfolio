import { Analytics } from "@vercel/analytics/react";
import { type AppType } from "next/dist/shared/lib/utils";
import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps, router }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
      <Analytics />
    </>
  );
};

export default MyApp;
