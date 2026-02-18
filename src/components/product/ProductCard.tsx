import { Link } from "react-router-dom";
import Button from "../common/Button";
import type { Product } from "../../types/product.types";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="h-60 w-full object-cover"
      />

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-800">
          {product.name}
        </h3>

        <p className="text-amber-600 font-bold text-lg">
          ₦{product.price.toLocaleString()}
        </p>

        <div className="flex justify-between mt-3">
          <Link to={`/products/${product._id}`}>
            <Button variant="outline">View</Button>
          </Link>

          <Button>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
