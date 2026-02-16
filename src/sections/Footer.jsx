import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white pb-12 pt-20 md:pt-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 lg:gap-24">
          <div className="md:col-span-5 lg:col-span-6">
            <a href="#hero" className="mb-8 flex items-center gap-1">
              <img src="/logo.webp" alt="Logo" className="h-12 w-auto md:h-16" />
              <span className="-ml-0.5 text-2xl font-bold tracking-tight text-gray-900">EcoLoop</span>
            </a>
            <p className="max-w-sm text-base font-light leading-relaxed text-gray-500 md:text-lg">
              Leading the world into a circular economy through AI and IoT
              technology. Turning waste into worth.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-7 lg:col-span-6">
            <div>
              <h4 className="mb-8 text-[10px] font-bold uppercase tracking-widest text-gray-900">
                Platform
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="#hero" className="text-sm text-gray-500 transition hover:text-gray-900 md:text-base">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-sm text-gray-500 transition hover:text-gray-900 md:text-base"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-sm text-gray-500 transition hover:text-gray-900 md:text-base"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#contact-us"
                    className="text-sm text-gray-500 transition hover:text-gray-900 md:text-base"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-8 text-[10px] font-bold uppercase tracking-widest text-gray-900">
                Legal
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link to="/privacy" className="text-sm text-gray-500 transition hover:text-gray-900 md:text-base">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm text-gray-500 transition hover:text-gray-900 md:text-base">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-gray-50 pt-10 md:mt-20 md:flex-row">
          <p className="text-xs font-light text-gray-400 md:text-sm">
            &copy; 2026 EcoLoop Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
