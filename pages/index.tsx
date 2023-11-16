import React from "react";
import HomePage from "@/src/home/HomePage";
import HomeLayout from "@/src/home/components/HomeLayout";
import jwt from "jsonwebtoken";

const Page = () => {
  return <HomePage />;
};

Page.getLayout = function (page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Page;

export function getServerSideProps({ req, res }: any) {
  try {
    if (req.cookies.token) {
      const decoded = jwt.verify(
        req.cookies.token,
        process.env.JWT_SECRET || ""
      );
      if (decoded) {
        return {
          props: {},
        };
      }
    }
  } catch (error) {
    console.log(error);
  }
  return {
    redirect: {
      destination: "/signin?next=/",
      permanent: false,
    },
  };
}
