import { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import CategoryCard from "../CategoryCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { CATEGORIES, MENU } from "@/src/common/utils/constants";
import MenuCard from "../MenuCard";

const CategorySection = () => {
  const sliderRef = useRef<any>(null);
  const isDownlg = useMediaQuery({ query: "(max-width:900px)" });
  const isDownMd = useMediaQuery({ query: "(max-width:764px)" });

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="typo-title-md">Categories</h1>
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

      <div className="mt-6">
        <Swiper spaceBetween={30} slidesPerView={isDownMd ? 2 : isDownlg ? 4 : 6} ref={sliderRef}>
          {CATEGORIES.map((category) => (
            <SwiperSlide key={category._id}>
              <CategoryCard {...category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="
          grid gap-4 mt-10
          grid-cols-1
          lg:grid-cols-3 
        "
      >
        {
          MENU.map((item) => (
            <MenuCard key={item._id} item={item}/>
          ))
        }
      </div>
    </div>
  );
};

export default CategorySection;
