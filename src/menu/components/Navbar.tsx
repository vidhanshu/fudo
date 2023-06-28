import Image from "next/image";
import React from "react";
import { Search } from "lucide-react";
import { BsCart3 } from "react-icons/bs";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";

import { useCartContext } from "@/src/common/contexts/useCartContext";
import NotificationBadge from "@/src/common/components/NotificationBadge";

const Navbar: React.FC<{
  isMenuOpen: boolean;
  setIsMenuOpen:  React.Dispatch<React.SetStateAction<boolean>>
}> = ({isMenuOpen, setIsMenuOpen}) => {
  const { items } = useCartContext();

  return (
    <header className="bg-white border-b-[1.5px] border-gray-200 py-2 px-4">
      <nav className="flex justify-between items-center">
        <Image src="/home/logo.svg" alt="logo" width={100} height={100} />

        <div className="hidden md:flex flex-grow max-w-sm gap-2 border-[1px] border-gray-200 px-4 py-2 rounded-full">
          <input
            placeholder="Search category or Menu"
            className="w-full focus:outline-none"
          />
          <Search color="gray" />
        </div>

        <div className="flex gap-2 items-center">
        <button
          onClick={() => setIsMenuOpen((p) => !p)}
          className="fixed right-[16px] top-[20px] sm:hidden z-20"
        >
          <CiMenuBurger size={30} className={isMenuOpen ? "hidden" : ""} />
          <CiMenuFries size={30} className={!isMenuOpen ? "hidden" : ""} />
        </button>
          <NotificationBadge className="hidden lg:block mr-4" count={items?.length || 0}>
            <BsCart3 size={25} color="gray" />
          </NotificationBadge>
          <div className="hidden lg:flex flex-col">
            <h4 className="typo-title-xs">Vidhanshu</h4>
            <span className="text-xs text-gray-500">Sunday, 15 January 23</span>
          </div>
          <Image
            className="hidden lg:block rounded-full"
            src="/home/avatar.png"
            alt="logo"
            width={50}
            height={50}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
