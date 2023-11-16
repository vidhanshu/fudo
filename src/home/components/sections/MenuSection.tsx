import Container from "@/src/common/components/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { MENU } from "../../utils/constants";
import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import useCustomSwiper from "@/src/common/hooks/useCustomSwiper";

const Menu = () => {
  const isDownMd = useMediaQuery({ query: "(max-width:764px)" });
  const { handlePrev, handleNext, sliderRef } = useCustomSwiper();

  return (
    <Container>
      <div className="flex-col gap-4  flex justify-between md:gap-0 md:flex-row md:items-center">
        <div>
          <p className="typo-label-section">Our Menu</p>
          <h1 className="typo-title-section mt-2 max-w-xl">
            Menu that always makes you fall in love.
          </h1>
        </div>
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
      </div>
      <div className="mt-10">
        <Swiper
          spaceBetween={50}
          slidesPerView={isDownMd ? 1 : 3}
          ref={sliderRef}
          loop={true}
        >
          {MENU.map(({ _id, image, name, price }, index) => (
            <SwiperSlide key={_id}>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src={image} fill alt={name} />

                <div className="absolute bottom-0 p-4 text-white w-full bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.01)]">
                  <h4>{name}</h4>
                  <h4 className="text-sm my-2">₹ {price}</h4>
                  <button className="hover:text-primary-main transition-colors">
                    Order now &gt;
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Menu;
