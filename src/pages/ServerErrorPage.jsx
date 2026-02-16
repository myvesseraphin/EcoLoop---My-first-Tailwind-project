import React from "react";
import ErrorPage from "../components/ErrorPage";

const ServerErrorPage = () => (
  <ErrorPage
    code="500"
    title="Server Error"
    message="Something went wrong on our side. Please try again in a few minutes."
    ctaText="Back to Home"
    ctaLink="/"
  />
);

export default ServerErrorPage;
