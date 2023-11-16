import MenuLayout from "@/src/menu/components/MenuLayout";
import CategorySection from "@/src/menu/components/sections/CategorySection";
import React from "react";

const Menu = () => {
  return (
    <CategorySection />
  );
};

export default Menu;

Menu.getLayout = (page: React.ReactElement) => {
  return <MenuLayout>{page}</MenuLayout>;
};
