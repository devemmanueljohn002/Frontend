import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/rootReducer";
import type { CartItem } from "../Features/cart/cartSlice";
import { addToCart, removeFromCart, clearCart } from "../Features/cart/cartSlice";
import type { AppDispatch } from "../store/store";

export const useCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const addItem = (product: CartItem) => {
    dispatch(addToCart(product));
  };

  const removeItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const clear = () => {
    dispatch(clearCart());
  };

  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return {
    cartItems,
    addItem,
    removeItem,
    clear,
    totalItems,
  };
};
