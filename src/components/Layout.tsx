import { motion } from "framer-motion";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
