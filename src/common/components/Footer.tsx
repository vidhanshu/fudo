import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import Container from "./Container";
import Link from "next/link";

const Footer = () => {
  return (
    <Container className="flex flex-col gap-4">
      <Image src="/home/logo.svg" alt="logo" width={100} height={100} />
      <hr />
      <div className="max-w-lg">
        <h4 className="typo-title-md">About us</h4>
        <p className="typo-detail-section mt-2">
          We are the India’s largest restaurant management systems, who provides
          full-fledged software to make your restaurant completely online. We
          provide dedicated admin panels for admin, kitchens, waiters
        </p>
      </div>
      <hr />
      <ul className="flex gap-10">
        <li className="text-xs md:text-sm hover:text-primary-main">
          <Link href="/">Home</Link>
        </li>
        <li className="text-xs md:text-sm hover:text-primary-main">
          <Link href="/">About us</Link>
        </li>
        <li className="text-xs md:text-sm hover:text-primary-main">
          <Link href="/">Menu</Link>
        </li>
        <li className="text-xs md:text-sm hover:text-primary-main">
          <Link href="/">Order now</Link>
        </li>
      </ul>
      <hr />
      <div className="flex justify-between gap-4 flex-wrap items-center">
        <span className="flex gap-4">
          <span className="p-2 border-[1px] rounded-lg">
            <FaFacebook size={20} />
          </span>
          <span className="p-2 border-[1px] rounded-lg">
            <FaTwitter size={20} />
          </span>
          <span className="p-2 border-[1px] rounded-lg">
            <FaInstagram size={20} />
          </span>
          <span className="p-2 border-[1px] rounded-lg">
            <FaLinkedin size={20} />
          </span>
        </span>

        <p className="text-sm text-gray-500">
          ©2023 Fudo . All rights reserved.
        </p>
      </div>
    </Container>
  );
};

export default Footer;
