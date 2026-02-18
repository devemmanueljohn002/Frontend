import Button from "../../components/common/Button";
import { useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/formatCurrency";

const Cart = () => {
  const { cartItems, removeItem, totalItems } = useCart();

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (!cartItems.length) {
    return <div className="text-center py-10">Cart is empty.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">
        Cart ({totalItems})
      </h1>

      {cartItems.map((item) => (
        <div
          key={item._id}
          className="flex justify-between items-center border-b py-4"
        >
          <div>
            <h2 className="font-semibold">{item.name}</h2>
            <p>
              {item.quantity} × {formatCurrency(item.price)}
            </p>
          </div>

          <Button
            variant="danger"
            onClick={() => removeItem(item._id)}
          >
            Remove
          </Button>
        </div>
      ))}

      <div className="mt-6 text-right">
        <h2 className="text-xl font-bold">
          Total: {formatCurrency(totalAmount)}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
