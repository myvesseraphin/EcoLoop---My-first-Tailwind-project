import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = ({ code, title, message, ctaText, ctaLink }) => (
  <div className="h-screen overflow-hidden bg-white px-6 text-center flex flex-col items-center justify-center">
    <span className="pointer-events-none absolute select-none text-[15rem] font-black leading-none tracking-tighter text-slate-50">
      {code}
    </span>
    <div className="relative z-10">
      <h1 className="mb-3 text-5xl font-black tracking-tighter text-slate-900">
        {title}
      </h1>
      <p className="mx-auto max-w-sm font-bold leading-relaxed text-slate-500">
        {message}
      </p>
      <Link
        to={ctaLink}
        className="mt-10 inline-block rounded-[1.5rem] bg-[#2D70FD] px-12 py-5 font-black text-white shadow-2xl"
      >
        {ctaText}
      </Link>
    </div>
  </div>
);

export default ErrorPage;
