import React, { FC } from "react";
import Navbar from "./Navbar";
import Hero from "./sections/Hero";
import Footer from "@/src/common/components/Footer";

const HomeLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="bg-hero-gradient">
        <Navbar />
        <Hero />
      </div>
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
