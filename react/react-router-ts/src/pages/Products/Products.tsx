import { ReactElement } from "react";

import "./Products.css";
import ContentWrapper from "@components/ContentWrapper";
import ProductList from "@components/ProductList";

function Products({ products }: { products: Product[] }): ReactElement {
  return (
    <ContentWrapper className="content__products">
      <h3 className="products-header">Our Products</h3>
      <ProductList products={products} />
    </ContentWrapper>
  );
}

export default Products;
