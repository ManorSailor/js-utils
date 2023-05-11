import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "@components/Navbar";
import { Home, Product, Products, NotFound } from "./pages";

import useProducts from "./hooks/useProducts";

function App(): ReactElement {
  const products = useProducts();

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
