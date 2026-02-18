
import type { FC } from "react";
import Button from "../../components/common/Button";
import { useCart } from "../../hooks/useCart";
import type { Product } from "../../types/product.types";
import { formatCurrency } from "../../utils/formatCurrency";

interface Props {
  product: Product & { quantity: number };
}

const CartItem: FC<Props> = ({ product }) => {
  const { removeItem, addItem, decreaseQuantity } = useCart();

  return (
    <div className="flex justify-between items-center border-b py-4">
      <div className="flex items-center gap-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h2 className="font-semibold">{product.name}</h2>
          <p className="text-gray-500">
            {formatCurrency(product.price)} × {product.quantity} ={" "}
            {formatCurrency(product.price * product.quantity)}
          </p>
          <div className="flex gap-2 mt-2">
            <Button onClick={() => decreaseQuantity(product._id)}>-</Button>
            <Button onClick={() => addItem(product)}>+</Button>
            <Button variant="danger" onClick={() => removeItem(product._id)}>
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
