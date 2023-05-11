/* eslint-disable react/jsx-props-no-spreading */
import { ReactElement, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ProductsContext } from "@/context/ProductsProvider";
import ProductCard from "@/components/ProductCard";

function Product(): ReactElement {
  const navigate = useNavigate();
  const { id: productID } = useParams();
  const products = useContext(ProductsContext);

  const product = products?.find((p) => p.id === parseInt(productID ?? "", 10));

  return (
    <>
      {product && <ProductCard {...product} />}

      <button className="btn" onClick={() => navigate("/products")}>
        Go Back
      </button>
    </>
  );
}

export default Product;
