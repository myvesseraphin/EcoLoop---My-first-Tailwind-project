import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto grid h-[4.75rem] max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-6 md:h-[5.25rem]">
        <a href="#hero" className="flex items-center gap-0.5 md:gap-1">
          <img src="/logo.webp" alt="EcoLoop logo" className="h-10 w-auto md:h-12" />
          <span className="-ml-0.5 text-lg font-black leading-none tracking-tight text-gray-900 md:text-xl">
            EcoLoop
          </span>
        </a>

        <div className="hidden items-center justify-center gap-8 md:flex">
          <a href="#hero" className="text-lg font-bold text-gray-900">
            Home
          </a>
          <a
            href="#features"
            className="text-lg font-medium text-gray-500 transition-colors hover:text-gray-900"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-lg font-medium text-gray-500 transition-colors hover:text-gray-900"
          >
            Pricing
          </a>
          <a
            href="#contact-us"
            className="text-lg font-medium text-gray-500 transition-colors hover:text-gray-900"
          >
            Contact Us
          </a>
        </div>

        <div className="flex items-center justify-end gap-2">
          <a
            href="#contact-us"
            className="hidden rounded-full bg-gray-900 px-6 py-2.5 text-sm font-bold text-white shadow-lg transition hover:bg-black hover:shadow-gray-400 lg:inline-flex"
          >
            Get Started
          </a>
          <button
            type="button"
            onClick={() => setMobileMenu((prev) => !prev)}
            className="inline-flex items-center justify-center p-2 text-gray-900 md:hidden"
            aria-label="Toggle menu"
          >
            {!mobileMenu ? (
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            ) : (
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileMenu ? (
        <div className="space-y-4 border-t border-gray-100 bg-white p-6 md:hidden">
          <a href="#hero" onClick={() => setMobileMenu(false)} className="block text-lg font-bold text-gray-900">
            Home
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenu(false)}
            className="block text-lg font-medium text-gray-500"
          >
            Features
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenu(false)}
            className="block text-lg font-medium text-gray-500"
          >
            Pricing
          </a>
          <a
            href="#contact-us"
            onClick={() => setMobileMenu(false)}
            className="block text-lg font-medium text-gray-500"
          >
            Contact Us
          </a>
          <a
            href="#contact-us"
            onClick={() => setMobileMenu(false)}
            className="block rounded-xl bg-gray-900 py-4 text-center font-bold text-white"
          >
            Get Started
          </a>
          <div className="flex gap-4 pt-3">
            <Link to="/privacy" className="text-sm font-semibold text-gray-500">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm font-semibold text-gray-500">
              Terms
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
