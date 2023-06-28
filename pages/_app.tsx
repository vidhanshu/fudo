import "@/styles/globals.css";
import "swiper/css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { CartContextProvider } from "@/src/common/contexts/CartContext";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  return (
  <>
    <CartContextProvider>
      {getLayout(
        <Component {...pageProps} />
      )}
    </CartContextProvider>
  </>
  );
}
