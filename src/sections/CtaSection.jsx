import React from "react";

const CtaSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-12">
      <div className="group relative overflow-hidden rounded-[2.5rem] border-2 border-gray-900 bg-white p-8 text-center shadow-2xl shadow-gray-200 md:rounded-[4rem] md:p-24">
        <div className="relative z-10">
          <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 md:text-sm">
            Join the Circular Economy
          </span>
          <h2 className="mb-8 text-4xl font-bold tracking-tighter text-gray-900 md:text-7xl">
            Join the <span className="underline decoration-4 underline-offset-8">Loop.</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-base font-light leading-relaxed text-gray-500 md:text-xl">
            Recovering critical minerals for renewable infrastructure while
            keeping our environment safe.
          </p>
          <a
            href="#contact-us"
            className="inline-flex transform items-center gap-3 rounded-full bg-gray-900 px-10 py-5 text-base font-bold text-white shadow-xl transition-all hover:-translate-y-2 hover:bg-black md:px-14 md:py-6 md:text-lg"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
