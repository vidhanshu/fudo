import Navbar from "@/src/common/components/Navbar";
import React, { FC } from "react";
import Footer from "./Footer";

const NavFootLayout: FC<{
  children: React.ReactNode;
  hideFooter?: boolean;
  hideNav?: boolean;
  className?: string;
}> = ({ children, className = "", hideFooter = false, hideNav = false }) => {
  return (
    <div className={className}>
      {!hideNav && <Navbar />}
      {children}
      {!hideFooter && <Footer />}
    </div>
  );
};

export default NavFootLayout;
