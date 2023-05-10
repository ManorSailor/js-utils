import { ReactElement } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import ContentWrapper from "@components/ContentWrapper";

function Home(): ReactElement {
  return (
    <ContentWrapper className="content__home">
      <h3 className="home__header">Welcome to Home!</h3>
      <Link to="/products">Explore Products</Link>
    </ContentWrapper>
  );
}

export default Home;
