/* eslint-disable react/jsx-props-no-spreading */
import { ReactElement } from "react";

import "./ProductItem.css";
import ProductCard from "@components/ProductCard";

function ProductItem(props: Product): ReactElement {
  return (
    <li className="product-list__item">
      <ProductCard {...props} />
    </li>
  );
}

export default ProductItem;
