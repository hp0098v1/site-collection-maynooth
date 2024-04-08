import { Button } from "@/components/ui/button";
import Appliances from "@/components/common/Appliances";
import ProductCard from "@/components/common/ProductCard";

import { NEW_IN_PRODUCTS } from "@/constants";

const Showcase = () => {
  return (
    <div className="container mt-8">
      <h2 className="text-2xl md:text-4xl font-bold text-center">محصولات</h2>
      <p className="text-xs md:text-sm text-center line-clamp-2 w-[200px] mx-auto mt-2">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با
        تولید سادگ
      </p>

      <Appliances />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-8">
        {NEW_IN_PRODUCTS.map((product) => (
          <ProductCard
            key={`new-in-product-${product.id}`}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8 md:mt-12">
        <Button variant="outline" className="bg-transparent rounded-none">
          رفتن به خرید
        </Button>
      </div>
    </div>
  );
};

export default Showcase;
