import { useEffect, useState } from "react";

function useProducts(): Product[] {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=3")
      .then((res) => res.json())
      .then(({ products }: DummyJSONResponse) => setProducts(products))
      .catch((err: Error) => err);
  }, []);

  return products;
}

export default useProducts;
