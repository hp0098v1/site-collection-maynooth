import Appliances from "@/components/common/Appliances";
import ProductsGrid from "@/components/category/ProductsGrid";
import ProductsFilters from "@/components/category/ProductsFilters";

import { CATEGORY_PRODUCTS } from "@/constants";

const Products = () => {
  return (
    <div className="container mt-12">
      <Appliances isBordered={false} />

      <div>
        <div className="mt-4 sm:hidden">
          <img
            className="bg-primary p-2 rounded-md cursor-pointer object-cover"
            loading="lazy"
            src="/assets/icons/filters.svg"
            alt="Filters"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[25%_1fr] gap-8 mt-6">
          <ProductsFilters />
          <ProductsGrid products={CATEGORY_PRODUCTS} />
        </div>
      </div>
    </div>
  );
};

export default Products;
