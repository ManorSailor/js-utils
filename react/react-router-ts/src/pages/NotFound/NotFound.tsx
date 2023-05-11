import { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./NotFound.css";
import ContentWrapper from "@/components/ContentWrapper";

function NotFound(): ReactElement {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutID = setTimeout(() => navigate("/", { replace: true }), 2000);
    return () => clearTimeout(timeoutID);
  }, [navigate]);

  return (
    <ContentWrapper className="content__not-found">
      <h3 className="not-found__title">
        Oops! Looks like that location does not exist :(
      </h3>
      <p className="not-found__redirect">Redirecting...</p>
    </ContentWrapper>
  );
}

export default NotFound;
