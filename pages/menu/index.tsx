import MenuLayout from "@/src/menu/components/MenuLayout";
import CategorySection from "@/src/menu/components/sections/CategorySection";
import { Poppins } from "next/font/google";
import React from "react";

const PoppinsFont = Poppins({
  subsets: ["devanagari", "latin-ext", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Menu = () => {
  return (
    <div className={PoppinsFont.className}>
      <CategorySection />
    </div>
  );
};

export default Menu;

Menu.getLayout = (page: React.ReactElement) => {
  return <MenuLayout>{page}</MenuLayout>;
};
