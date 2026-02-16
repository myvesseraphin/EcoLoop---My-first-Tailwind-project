import React from "react";

const Preloader = () => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
    <div className="relative flex items-center justify-center">
      <div className="h-44 w-44 animate-spin rounded-full border-b-4 border-t-4 border-slate-200" />
      <div className="absolute h-36 w-36 animate-spin rounded-full border-l-4 border-r-4 border-black [animation-duration:1.2s]" />
      <div className="animate-spin-reverse absolute h-28 w-28 rounded-full border-b-2 border-t-2 border-slate-400 [animation-duration:2s]" />
      <div className="absolute flex animate-pulse items-center justify-center">
        <img src="/logo-modified.webp" alt="EcoLoop Logo" className="h-14 w-14 object-contain" />
      </div>
    </div>
  </div>
);

export default Preloader;
