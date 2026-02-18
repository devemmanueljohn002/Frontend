
import type { Product } from "../../types/product.types";
import Button from "../common/Button";

interface Props {
  product: Product;
}

const ProductDetails = ({ product }: Props) => {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      <img
        src={product.image}
        alt={product.name}
        className="rounded-xl w-full object-cover"
      />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-gray-800">
          {product.name}
        </h1>

        <p className="text-amber-600 text-2xl font-semibold">
          ₦{product.price.toLocaleString()}
        </p>

        <p className="text-gray-600 leading-relaxed">
          {product.description}
        </p>

        <p className="text-sm text-gray-500">
          Stock: {product.stock}
        </p>

        <div className="mt-6">
          <Button className="w-full">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
