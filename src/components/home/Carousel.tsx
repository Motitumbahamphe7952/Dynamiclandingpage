import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
//@ts-ignore
import "swiper/css"; 
import type { Swiper as SwiperType } from "swiper";
import { useNavigate } from "react-router-dom";

import img from "../../assets/heroimage.jpg";
import carousel from "../../assets/carousal1.jpg";
import carousel1 from "../../assets/carousal2.jpg";
import carousel2 from "../../assets/carousal3.jpg";
import carousel3 from "../../assets/carousal4.png";
import carousel5 from "../../assets/carousal6.png";

const images = [
  { id: 1, src: img },
  { id: 2, src: carousel },
  { id: 3, src: carousel1 },
  { id: 4, src: carousel2 },
  { id: 5, src: carousel3 },
  { id: 6, src: carousel5 },
];

export default function Carousel() {
  const navigate = useNavigate();
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <>
      <div id="next-section" className="max-w-[536px] h-[120px] mx-auto px-4 mt-14 text-center">
        <h1 className="text-[32px] md:text-[48px] font-bold leading-tight">
          <span className="text-[#4682B4] block">Work smart. Live well.</span>
          Thrive together.
        </h1>
      </div>
      <div className="max-w-[670px] h-[56px] mx-auto px-4 mt-5 text-center">
        <p className=" text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] text-neutral-500">
          Our culture is{" "}
          <span className="font-semibold text-black">built on trust</span>,
          balance, and purpose. Because burnout isn't a badge of honor — it's a
          barrier to doing our best work.
        </p>
      </div>

      <div
        className="relative overflow-hidden mt-10"
        onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay?.start()}
      >
        <Swiper
          spaceBetween={10}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          className="swiper-container"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3.5,
            },
          }}
        >
          {images.map(({ id, src }) => (
            <SwiperSlide key={id}>
              <div
                onClick={() => navigate(`/carousel/${id}`)}
                className="cursor-pointer"
              >
                <img
                  alt={`Slide ${id}`}
                  src={src}
                  className="w-full h-[180px] md:h-[300px] lg:h-[400px] xl:h-[480px] object-cover rounded-lg shadow"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Decorative Rounded Tops */}
        <div className="absolute top-[-84px] left-[-80px] right-[-60px] h-[120px] bg-white rounded-[45%] z-[99]"></div>
        <div className="absolute bottom-[-84px] left-[-80px] right-[-60px] h-[120px] bg-white rounded-[45%] z-[99]"></div>
      </div>
    </>
  );
}
