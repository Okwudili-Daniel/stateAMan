import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/storeApi";
import { useDispatch } from "react-redux";
import { addProduct } from "../global/ReduxState"

export const storeHooks = () => {
  const dispatch = useDispatch();
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const product = dispatch(addProduct(data)).payload;

  return { product };
};