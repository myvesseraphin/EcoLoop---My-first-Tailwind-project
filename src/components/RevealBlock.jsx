import React, { useEffect, useRef, useState } from "react";

const RevealBlock = ({ children, className = "" }) => {
  const [visible, setVisible] = useState(false);
  const blockRef = useRef(null);

  useEffect(() => {
    const node = blockRef.current;
    if (!node) {
      return undefined;
    }

    if (typeof window !== "undefined" && !("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={blockRef} className={`reveal-block ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
};

export default RevealBlock;
