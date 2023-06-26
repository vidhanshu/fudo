import Container from "@/src/common/components/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { CATEGORIES } from "../../utils/constants";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useCallback, useRef } from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import SectionTitle from "../../common/SectionTitle";

const Categories = () => {
  const isDownlg = useMediaQuery({ query: "(max-width:900px)" });
  const isDownMd = useMediaQuery({ query: "(max-width:764px)" });

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
    <Container>
      <div className="flex flex-col justify-between gap-4 md:gap-0 md:flex-row md:items-center">
        <SectionTitle
          label="Categories offered"
          title="Explore our categories"
        />
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
          slidesPerView={isDownMd ? 2 : isDownlg ? 4 : 6}
          ref={sliderRef}
          autoplay={{ delay: 1000 }}
          loop={true}
        >
          {CATEGORIES.map(({ _id, name, Icon }, index) => (
            <SwiperSlide key={_id}>
              <Link
                href="/"
                className="group h-[150px] rounded-lg bg-primary-light flex flex-col gap-4 items-center justify-center p-4 hover:bg-primary-main hover:text-white transition-all"
              >
                <div className="p-4 bg-white rounded-full">
                  <Icon color="black" size={25} />
                </div>
                <div>
                  <h4 className="text-sm">
                    {name} <span className="hidden group-hover:inline">→</span>
                  </h4>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Categories;
