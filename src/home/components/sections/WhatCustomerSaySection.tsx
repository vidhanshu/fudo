import Container from "@/src/common/components/Container";
import Image from "next/image";
import { useCallback, useRef } from "react";
import {
  BsChevronLeft,
  BsChevronRight,
  BsStar,
  BsStarFill,
} from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { CUSTOMERS } from "../../utils/constants";

const WhatCustomerSay = () => {
  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <Container className="flex flex-col lg:flex-row gap-4 justify-between items-center">
      <div className="relative">
        <Image
          src="/home/customer-say.svg"
          width={500}
          height={500}
          alt="what customer say"
        />

        <div className="hidden xl:flex absolute -right-20 top-3/4 bg-white shadow-sm-all flex-col gap-3 w-fit h-fit items-center px-4 py-2 rounded-lg justify-center">
          <h4 className="text-sm font-semibold">Reviews</h4>

          <div className="flex translate-x-4">
            <Image
              src="/home/avatar.png"
              alt="avatar"
              className="rounded-full border-3 border-white"
              width={50}
              height={50}
            />
            <Image
              src="/home/avatar.png"
              alt="avatar"
              className="-translate-x-3 rounded-full border-3 border-white"
              width={50}
              height={50}
            />
            <Image
              src="/home/avatar.png"
              alt="avatar"
              className="-translate-x-6 rounded-full border-3 border-white"
              width={50}
              height={50}
            />
            <div className="-translate-x-9 rounded-full border-3 border-white bg-primary-main text-white w-[50px] h-[50px] text-[10px] flex justify-center items-center">
              127.5k+
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="typo-label-section">What they say</p>
        <h1 className="typo-title-section mt-2 max-w-xl">
          What Our Customer Say About Us.
        </h1>
        <div className="flex gap-4">
          <button onClick={handlePrev} className="bg-gray-200 p-3 rounded-full">
            <BsChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="bg-primary-main p-3 rounded-full text-white"
          >
            <BsChevronRight size={20} />
          </button>
        </div>
        <Swiper
          className="max-w-[calc(100vw-32px)] md:max-w-xl"
          slidesPerView={1}
          ref={sliderRef}
          loop={true}
        >
          {CUSTOMERS.map(({ _id, image, name, rating, review }) => (
            <SwiperSlide key={_id}>
              <div className="flex gap-2 items-center">
                <Image
                  src={image}
                  alt="avatar"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <h1 className="font-semibold text-lg">{name}</h1>
              </div>
              <span className="flex gap-2 items-center text-secondary my-4">
                <BsStarFill size={15} />
                <BsStarFill size={15} />
                <BsStarFill size={15} />
                <BsStar size={15} />
                <span className="text-black">4.8</span>
              </span>
              <p className="typo-detail-hero">&ldquo;{review}&ldquo;</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default WhatCustomerSay;
