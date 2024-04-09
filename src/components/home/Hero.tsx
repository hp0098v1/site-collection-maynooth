import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { Button } from "@/components/ui/button";
import { HERO_SOCIAL_ICONS } from "@/constants";

const Hero = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return (
        '<span class="' +
        className +
        '">' +
        (index > 9 ? index + 1 : `${index + 1} 0`) +
        "</span>"
      );
    },
  };

  return (
    <section className="bg-hero-background w-[95%] rounded-tl-2xl mt-4">
      <div className="container py-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="flex flex-col items-center justify-center sm:items-start lg:justify-between lg:py-40">
          <div>
            <p className="text-lg sm:text-2xl lg:text-3xl text-center sm:text-start mb-2 sm:mb-4">
              محصولات جدید
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center sm:text-start">
              محصولی جدید و جذاب
            </h2>
          </div>
          <Button
            variant="outline"
            className="rounded-none uppercase mt-6 mb-6 sm:mt-8 sm:mb-10 font-bold"
          >
            الان خرید کنید
          </Button>

          <div className="flex items-center gap-4 sm:gap-5">
            {HERO_SOCIAL_ICONS.map((item) => (
              <a
                className="cursor-pointer"
                key={`footer-social-icon-${item.id}`}
              >
                <img src={item.src} alt={item.alt} />
              </a>
            ))}
          </div>
        </div>

        <div className="w-full h-[250px] lg:h-[630px]">
          <Swiper
            direction={"vertical"}
            pagination={pagination}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <img
                className="w-auto h-[230px] lg:w-[600px] lg:h-[600px]"
                loading="lazy"
                src="/assets/images/home/hero-image.png"
                alt="Hero"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-auto h-[230px] lg:w-[600px] lg:h-[600px]"
                loading="lazy"
                src="/assets/images/home/hero-image.png"
                alt="Hero"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-auto h-[230px] lg:w-[600px] lg:h-[600px]"
                loading="lazy"
                src="/assets/images/home/hero-image.png"
                alt="Hero"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[230px] h-[230px] lg:w-[600px] lg:h-[600px]"
                loading="lazy"
                src="/assets/images/home/hero-image.png"
                alt="Hero"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
