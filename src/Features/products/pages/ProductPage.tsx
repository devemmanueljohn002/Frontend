import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../../store/store";
import type { RootState } from "../../../store/rootReducer";
import Loader from "../../../components/common/Loader";
import ProductDetails from "../../../components/product/ProductDetails";
import { fetchProductById } from "../productSlice";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { selectedProduct, loading } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (id) dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (loading || !selectedProduct) return <Loader />;

  return (
    <div className="max-w-5xl mx-auto py-10">
      <ProductDetails product={selectedProduct} />
    </div>
  );
};

export default ProductPage;
