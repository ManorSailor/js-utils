/* eslint-disable react/jsx-props-no-spreading */
import { ReactElement, useContext } from "react";

import { ProductsContext } from "@/context/ProductsProvider";

import "./ProductList.css";
import ProductItem from "@/components/ProductItem";

function ProductList(): ReactElement {
  const products = useContext(ProductsContext);

  return (
    <ul className="product-list">
      {products?.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </ul>
  );
}

export default ProductList;
