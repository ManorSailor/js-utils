import { ReactElement } from "react";

import "./Products.css";
import ContentWrapper from "@/components/ContentWrapper";
import ProductList from "@/components/ProductList";

function Products(): ReactElement {
  return (
    <ContentWrapper className="content__products">
      <h3 className="products-header">Our Products</h3>
      <ProductList />
    </ContentWrapper>
  );
}

export default Products;
