import React from "react";
import { Poppins } from "next/font/google";

import HowToOrder from "@/src/home/components/sections/HowToOrder";
import Menu from "@/src/home/components/sections/Menu";
import Categories from "@/src/home/components/sections/Categories";
import WhatCustomerSay from "@/src/home/components/sections/WhatCustomerSay";
import HomeLayout from "@/src/home/components/HomeLayout";

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
    </div>
  );
}

Home.getLayout = function (page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
