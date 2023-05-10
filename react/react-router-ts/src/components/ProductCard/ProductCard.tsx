import { ReactElement } from "react";
import { Link } from "react-router-dom";

import "./ProductCard.css";

function ProductCard({ id, title, price, thumbnail }: Product): ReactElement {
  return (
    <Link to={`/products/${id}`}>
      <article className="product-card">
        <img src={thumbnail} alt={title} className="product-card__thumbnail" />
        <p className="product-card__title">{title}</p>
        <p className="product-card__price">${price}</p>
      </article>
    </Link>
  );
}

export default ProductCard;
