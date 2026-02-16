import React from "react";
import ErrorPage from "../components/ErrorPage";

const NotFoundPage = () => (
  <ErrorPage
    code="404"
    title="Page Not Found"
    message="The page you are trying to open does not exist or may have been moved."
    ctaText="Back to Home"
    ctaLink="/"
  />
);

export default NotFoundPage;
