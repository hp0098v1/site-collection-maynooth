import { useRef } from "react";

import { useNavigate } from "react-router-dom";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "@/components/ui/button";

const SummerSale = () => {
  const navigate = useNavigate();

  const navigateToCategory = () => navigate("/category/1");

  return (
    <section className="container px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center w-full sm:w-[90%] ">
        <div className="flex flex-col gap-4 justify-center items-center w-full min-h-[300px]  h-full bg-[url('/assets/images/home/summer-sale/summer-sale-bg.png')] bg-no-repeat bg-center">
          <h2 className="self-center text-3xl font-medium ">فروش تابستانه</h2>
          <Button
            onClick={navigateToCategory}
            variant="ghost"
            className="text-primary border-b border-primary hover:border-primary! hover:text-primary!"
          >
            مشاهده محصولات
          </Button>
        </div>
        <SummerSaleSwiper />
      </div>
    </section>
  );
};

const SummerSaleSwiper = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative size-full">
      <Swiper
        style={{ direction: "rtl" }}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
        }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <SummerSaleCard />
        </SwiperSlide>
        <SwiperSlide>
          <SummerSaleCard />
        </SwiperSlide>
        <SwiperSlide>
          <SummerSaleCard />
        </SwiperSlide>
        <SwiperSlide>
          <SummerSaleCard />
        </SwiperSlide>
      </Swiper>
      <div className="absolute -bottom-12 left-14 sm:left-8 flex justify-end items-center gap-1 w-[90%]">
        <button ref={prevRef}>
          <img src="/assets/icons/arrow-right.svg" alt="Arrow Right" />
        </button>
        <span>|</span>
        <button ref={nextRef}>
          <img src="/assets/icons/arrow-left.svg" alt="Arrow Left" />
        </button>
      </div>
    </div>
  );
};

const SummerSaleCard = () => {
  return (
    <div className="bg-white shadow-lg border border-white/10 min-h-[300px] p-4">
      <div className="relative size-[90%]">
        <img
          loading="lazy"
          src="/assets/images/home/summer-sale/sale-1.png"
          alt="sale 1"
        />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-primary text-primary-foreground rounded-full size-12">
          30 %
        </div>
      </div>

      <h3 className="text-sm sm:text-base text-center mt-2">صندلی 1</h3>
      <p className="font-bold sm:text-lg text-center">200</p>

      <Button variant="outline" className="bg-transparent rounded-none mt-2">
        افزودن به سبد
      </Button>
    </div>
  );
};

export default SummerSale;
