import { ReactElement, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "@components/Navbar";
import { Home, Product, Products, NotFound } from "./pages";

function App(): ReactElement {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=3")
      .then((res) => res.json())
      .then(({ products }: DummyJSONResponse) => setProducts(products))
      .catch((err: Error) => err);
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={(<Home />) as ReactElement} />
        <Route path="/products">
          <Route
            index
            element={(<Products products={products} />) as ReactElement}
          />
          <Route
            path=":id"
            element={(<Product products={products} />) as ReactElement}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
