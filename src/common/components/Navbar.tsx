import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Nunito } from "next/font/google";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";

import CustomButton from "@/src/common/components/CustomButton";
import Container from "@/src/common/components/Container";

const NunitoFont = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState(0);

  const { asPath } = useRouter();

  const options = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Menu",
      path: "/menu",
    },
    {
      name: "Order",
      path: "/order",
    },
  ];

  useEffect(() => {
    options.forEach((option, index) => {
      if (option.path === asPath) {
        setActive(index);
      }
    });
  }, [asPath]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header>
      <Container
        as="nav"
        className="flex justify-between items-center py-4 bg-transparent"
      >
        <Image src="/home/logo.svg" alt="logo" width={100} height={100} />

        <ul
          className={`
                    ${NunitoFont.className}
                    fixed p-10 w-full h-full flex flex-col backdrop-blur-3xl z-10 top-0 gap-10 transition-all duration-300 
                    ${isMenuOpen ? "left-0" : "-left-full"}
                    sm:hidden
                    md:flex md:static md:p-0 md:w-auto md:h-auto md:flex-row md:bg-transparent md:z-0 md:backdrop-none md:transition-none
                `}
        >
          {options.map(({ name, path }, index) => (
            <li
              key={path}
              className={`
                            font-semibold text-[1.1rem] relative
                            ${
                              active === index
                                ? `
                                    text-primary-main 
                                    after:hidden after:md:block after:content-[""] after:absolute 
                                    after:w-2 after:h-2 after:rounded-full after:-bottom-4 after:bg-primary-main 
                                    after:left-0 after:right-0 after:mx-auto
                                `
                                : ""
                            }
                        `}
            >
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>

        <CustomButton className="hidden sm:block" size="md">
          Order Now
        </CustomButton>

        <button
          onClick={() => setIsMenuOpen((p) => !p)}
          className="fixed right-[16px] top-[20px] sm:hidden z-20"
        >
          <CiMenuBurger size={30} className={isMenuOpen ? "hidden" : ""} />
          <CiMenuFries size={30} className={!isMenuOpen ? "hidden" : ""} />
        </button>
      </Container>
    </header>
  );
};

export default Navbar;
