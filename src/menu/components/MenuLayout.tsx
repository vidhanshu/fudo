import { FC, useState, useEffect } from "react";

import PaymentDetailSidebar from "./sidebar/PaymentDetailSidebar";
import Navbar from "./Navbar";
import NoSSR from "@/src/common/components/NoSSR";

const MenuLayout: FC<{
  children: React.ReactNode;
  showSearchBar?: boolean;
}> = ({
  children,
  showSearchBar = true,
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
      if (isMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }, [isMenuOpen]);

    return (
      <div
        className={"bg-background-secondary max-w-screen flex"}
      >
        <div className="
        w-[100%]
        lg:w-[75%]
        "
        >
          <NoSSR>
            <Navbar showSearchBar={showSearchBar} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </NoSSR>
          <main className="px-4 py-10">{children}</main>
        </div>
        <div className={`
        bg-white border-l-[1.5px] border-gray-200 h-screen overflow-y-auto transition-all
        w-[100%] fixed z-10 ${isMenuOpen ? "right-0" : '-right-full'}
        lg:w-[25%] lg:sticky top-0 lg:z-0
        `}
        >
          <NoSSR>
            <PaymentDetailSidebar />
          </NoSSR>
        </div>
      </div>
    );
  };

export default MenuLayout;
