import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./store/slice/productSlice";

export default function App() {
  const products = useSelector((store) => store.product.products);
  const dispatch = useDispatch();
  console.log("product in component", products)

  const onClickProducts = () =>{
    dispatch(fetchProducts())
  }
  return (
    <div>
      <button onClick={onClickProducts}>Get Products</button>
      
    </div>
  );
}


