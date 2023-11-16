import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/autoplay";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { CartContextProvider } from "@/src/common/contexts/cart/CartContext";
import { ToastContainer } from "react-toastify";
import SocketProvider from "@/src/common/contexts/socket/SocketContext";
import FontProvider from "@/src/common/components/FontProvider";
import AuthContextProvider from "@/src/common/contexts/auth/AuthContext";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  return (
    <AuthContextProvider>
      <CartContextProvider>
        <SocketProvider>
          <FontProvider>
            {getLayout(
              <>
                <Component {...pageProps} />
                <ToastContainer />
              </>
            )}
          </FontProvider>
        </SocketProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
}
