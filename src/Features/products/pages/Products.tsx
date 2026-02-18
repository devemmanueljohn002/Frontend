import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch } from "../../../store/store";
import type { RootState } from "../../../store/rootReducer";
import { fetchProducts } from "../productSlice";
import ProductGrid from "../../../components/product/ProductGrid";
import Loader from "../../../components/common/Loader";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Our Furniture</h1>
      {loading ? <Loader /> : <ProductGrid products={products} />}
    </div>
  );
};

export default Products;
