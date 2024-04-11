import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import ProductCard from "@/components/common/ProductCard";
import { MOST_POPULAR_PRODUCTS } from "@/constants";

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
        {MOST_POPULAR_PRODUCTS.map((product) => (
          <SwiperSlide>
            <ProductCard
              key={`most-popular-products-${product.id}`}
              imageContainerClassName="h-[185px] md:h-[220px] lg:h-[280px] xl:h-[340px]"
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          </SwiperSlide>
        ))}
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
