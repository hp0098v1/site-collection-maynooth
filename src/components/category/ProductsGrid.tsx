import ProductCard from "@/components/common/ProductCard";
import { Button } from "@/components/ui/button";
import { Product } from "@/constants";

type Props = {
  products: Product[];
};

const ProductsGrid = ({ products }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={`category-products-grid-${product.id}`}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            badge={product.badge}
            hasAction={true}
            imageContainerClassName="lg:h-[240px] xl:h-[300px]"
          />
        ))}
      </div>

      <Button
        variant="outline"
        className="block mt-8 bg-transparent rounded-none mx-auto"
      >
        مشاهده بیشتر
      </Button>
    </div>
  );
};

export default ProductsGrid;
