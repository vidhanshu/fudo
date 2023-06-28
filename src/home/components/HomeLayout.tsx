import React, { FC } from "react";
import Hero from "./sections/HeroSection";
import Navbar from "@/src/common/components/Navbar";
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
