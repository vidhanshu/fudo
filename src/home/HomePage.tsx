import ProtectedCustomerRoute from "../common/components/ProtectedCustomerRoute";
import Categories from "./components/sections/CategoriesSection";
import Faq from "./components/sections/FaqSection";
import HowToOrder from "./components/sections/HowToOrderSection";
import Menu from "./components/sections/MenuSection";
import WhatCustomerSay from "./components/sections/WhatCustomerSaySection";

export default function HomePage() {
  return (
      <>
        <HowToOrder />
        <Menu />
        <Categories />
        <WhatCustomerSay />
        <Faq />
      </>
  );
}
