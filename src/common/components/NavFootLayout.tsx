import Navbar from "@/src/home/components/Navbar";
import React, { FC } from "react";
import Footer from "./Footer";

const NavFootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default NavFootLayout;
