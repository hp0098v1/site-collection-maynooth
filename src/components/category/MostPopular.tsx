import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import ProductCard from "@/components/common/ProductCard";

const MostPopular = () => {
  return (
    <div className="container mt-12">
      <div className="mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          محبوب ترین محصولات
        </h2>
        <p className="text-xs md:text-sm text-center line-clamp-2 w-[200px] mx-auto mt-2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی
          با تولید سادگ
        </p>
      </div>

      <MostPopularSlider />
    </div>
  );
};

const MostPopularSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">
      <Swiper
        style={{ direction: "rtl" }}
        slidesPerView={2}
        breakpoints={{
          // 440: { slidesPerView: 2 },
          660: { slidesPerView: 3 },
          800: { slidesPerView: 4 },
        }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <ProductCard
            imageContaineeClassName="h-[185px] md:h-[220px] lg:h-[300px]"
            title="bla bla"
            price={200}
            imageUrl="/assets/images/category/most-popular/product-1.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            imageContaineeClassName="h-[185px] md:h-[220px] lg:h-[300px]"
            title="bla bla"
            price={200}
            imageUrl="/assets/images/category/most-popular/product-2.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            imageContaineeClassName="h-[185px] md:h-[220px] lg:h-[300px]"
            title="bla bla"
            price={200}
            imageUrl="/assets/images/category/most-popular/product-3.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            imageContaineeClassName="h-[185px] md:h-[220px] lg:h-[300px]"
            title="bla bla"
            price={200}
            imageUrl="/assets/images/category/most-popular/product-4.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            imageContaineeClassName="h-[185px] md:h-[220px] lg:h-[300px]"
            title="bla bla"
            price={200}
            imageUrl="/assets/images/category/most-popular/product-1.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            imageContaineeClassName="h-[185px] md:h-[220px] lg:h-[300px]"
            title="bla bla"
            price={200}
            imageUrl="/assets/images/category/most-popular/product-2.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            imageContaineeClassName="h-[185px] md:h-[220px] lg:h-[300px]"
            title="bla bla"
            price={200}
            imageUrl="/assets/images/category/most-popular/product-3.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            imageContaineeClassName="h-[185px] md:h-[220px] lg:h-[300px]"
            title="bla bla"
            price={200}
            imageUrl="/assets/images/category/most-popular/product-4.png"
          />
        </SwiperSlide>
      </Swiper>
      <div className="absolute -top-8 right-4 flex items-center gap-1">
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

export default MostPopular;
