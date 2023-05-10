/* eslint-disable react/jsx-props-no-spreading */
import { ReactElement } from "react";

import "./ProductList.css";
import ProductItem from "@components/ProductItem";

function ProductList({ products }: { products: Product[] }): ReactElement {
  return (
    <ul className="product-list">
      {products?.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </ul>
  );
}

export default ProductList;
