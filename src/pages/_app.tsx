import { type AppType } from "next/dist/shared/lib/utils";

import { AnimatePresence } from "framer-motion";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps, router }) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
  );
};

export default MyApp;
