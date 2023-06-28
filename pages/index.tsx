import React from "react";
import { Poppins } from "next/font/google";

import HowToOrder from "@/src/home/components/sections/HowToOrderSection";
import Menu from "@/src/home/components/sections/MenuSection";
import Categories from "@/src/home/components/sections/CategoriesSection";
import WhatCustomerSay from "@/src/home/components/sections/WhatCustomerSaySection";
import HomeLayout from "@/src/home/components/HomeLayout";
import Faq from "@/src/home/components/sections/FaqSection";

const PoppinsFont = Poppins({
  subsets: ["devanagari", "latin-ext", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <div className={PoppinsFont.className}>
      <HowToOrder />
      <Menu />
      <Categories />
      <WhatCustomerSay />
      <Faq />
    </div>
  );
}

Home.getLayout = function (page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
