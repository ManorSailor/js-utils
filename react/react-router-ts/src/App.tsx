import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";

import { ProductsProvider } from "@/context/ProductsProvider";

import Navbar from "@/components/Navbar";
import { Home, Product, Products, NotFound } from "./pages";

function App(): ReactElement {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={(<Home />) as ReactElement} />
        <Route
          path="/products"
          element={(<ProductsProvider />) as ReactElement}
        >
          <Route index element={(<Products />) as ReactElement} />
          <Route path=":id" element={(<Product />) as ReactElement} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
