import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Preloader from "./components/Preloader";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ServerErrorPage from "./pages/ServerErrorPage";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return null;
};

const RouteMetadata = () => {
  const location = useLocation();

  useEffect(() => {
    const routeMeta = {
      "/": {
        title: "EcoLoop | Turn Waste into Worth",
        description:
          "EcoLoop combines AI and IoT to classify waste, improve handling safety, and power circular economy value chains.",
      },
      "/privacy": {
        title: "Privacy Policy | EcoLoop",
        description:
          "Read how EcoLoop handles data privacy, safety records, and user rights across the platform.",
      },
      "/terms": {
        title: "Terms of Use | EcoLoop",
        description:
          "Review terms governing EcoLoop platform usage, safety responsibilities, and operational rules.",
      },
      "/500": {
        title: "Server Error | EcoLoop",
        description:
          "EcoLoop encountered a server issue. Please retry shortly or return to the homepage.",
      },
    };

    const fallbackMeta = {
      title: "Page Not Found | EcoLoop",
      description: "The requested page was not found on EcoLoop.",
    };

    const currentMeta = routeMeta[location.pathname] ?? fallbackMeta;
    document.title = currentMeta.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", currentMeta.description);
    }
  }, [location.pathname]);

  return null;
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteMetadata />
      {loading ? <Preloader /> : null}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/500" element={<ServerErrorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
