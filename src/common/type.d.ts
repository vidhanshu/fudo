import React from "react";
import { ICartItem } from "../menu/type";
import { SwiperRef } from "swiper/react";

export type PaymentMethodType = "cash" | "card" | "upi";

export interface ICartType {
  items: ICartItem[];
  paymentMethod: PaymentMethodType;
}

export interface IWithSwiperProps {
  sliderRef: RefObject<SwiperRef>;
  handlePrev: () => void;
  handleNext: () => void;
}
