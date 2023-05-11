import { ReactElement, createContext } from "react";
import { Outlet } from "react-router-dom";
import useProducts from "@/hooks/useProducts";

const ProductsContext = createContext<Product[]>([]);

function ProductsProvider(): ReactElement {
  const products = useProducts();

  return (
    <ProductsContext.Provider value={products}>
      <Outlet />
    </ProductsContext.Provider>
  );
}

export { ProductsContext, ProductsProvider };
