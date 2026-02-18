
import ProductCard from "./ProductCard";
import Loader from "../common/Loader";
import type { Product } from "../../types/product.types";

interface Props {
  products: Product[];
  loading?: boolean;
}

const ProductGrid = ({ products, loading }: Props) => {
  if (loading) return <Loader />;

  if (!products.length) {
    return (
      <div className="text-center py-10 text-gray-500">
        No products found.
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
