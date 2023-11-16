import { useCallback, useRef } from "react";
import { SwiperRef } from "swiper/react";
import { IWithSwiperProps } from "../type";

const useCustomSwiper = (): IWithSwiperProps => {
  const sliderRef = useRef<SwiperRef>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return {
    sliderRef,
    handlePrev,
    handleNext,
  };
};

export default useCustomSwiper;
