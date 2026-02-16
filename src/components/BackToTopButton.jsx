import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 460);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
      aria-label="Back to top"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
};

export default BackToTopButton;
