import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import type { RootState } from "../store/rootReducer";
import { addToCart, clearCart, removeFromCart } from "../Features/cart/cartSlice";

export const useCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector(
    (state: RootState) => state.carts.items || []
  );

  const addItem = (product: any) => {
    dispatch(addToCart(product));
  };

  const removeItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const clear = () => {
    dispatch(clearCart());
  };

  const totalItems = cartItems.reduce(
    (acc, items) => acc + items.quantity,
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
