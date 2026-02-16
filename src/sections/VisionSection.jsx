import React from "react";

const pillars = [
  {
    id: "01",
    title: "Transparency",
    description:
      "Track every gram of waste from scan to sale for accountable circular recovery.",
  },
  {
    id: "02",
    title: "Incentive",
    description:
      "Reward users and communities for safe recycling and responsible material flow.",
  },
  {
    id: "03",
    title: "Education",
    description:
      "AI-assisted instructions make safe disassembly and handling practical for everyone.",
  },
];

const VisionSection = () => {
  return (
    <>
      <section className="relative bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="mb-10 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
              Advancing Global Goals Through{" "}
              <span className="border-b-4 border-gray-900 text-gray-900">
                Local Innovation.
              </span>
            </h2>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-12">
              <div className="group">
                <div className="mb-6 h-px w-12 bg-gray-900 transition-all duration-700 group-hover:w-full" />
                <h4 className="mb-3 text-lg font-bold text-gray-900">Vision 2050 & NST2</h4>
                <p className="text-base font-light text-gray-500">
                  Supporting ICT-driven innovation and strengthening the green
                  economy sector in Rwanda.
                </p>
              </div>
              <div className="group">
                <div className="mb-6 h-px w-12 bg-gray-900 transition-all duration-700 group-hover:w-full" />
                <h4 className="mb-3 text-lg font-bold text-gray-900">Target SDGs</h4>
                <p className="text-base font-light text-gray-500">
                  Directly contributing to SDG 7, SDG 12, SDG 6, and SDG 9
                  through safe and scalable circular systems.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border-2 border-gray-900 bg-white p-8 text-gray-900 shadow-2xl md:rounded-[3rem] md:p-14 lg:col-span-5">
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <h3 className="relative z-10 mb-8 text-2xl font-bold leading-snug md:text-3xl">
              "Transforming waste from a hazard into a harvest."
            </h3>
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <span className="text-xs font-bold uppercase text-gray-500">
                  Resource Recovery
                </span>
                <span className="text-lg font-bold md:text-xl">200kg Cu + 50kg Al</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <span className="text-xs font-bold uppercase text-gray-500">
                  Water Safety Risk
                </span>
                <span className="text-lg font-bold text-green-600 md:text-xl">
                  Reduced
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="purpose" className="bg-white py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="text-center lg:text-left">
              <h2 className="mb-8 text-5xl font-black leading-[0.9] tracking-tighter text-black md:text-7xl">
                Decentralizing <br className="hidden lg:block" />
                the Circular <br className="hidden lg:block" />
                Economy.
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-lg font-medium leading-relaxed text-gray-500 md:text-xl lg:mx-0">
                Traditional systems are centralized and opaque. EcoLoop puts
                AI-driven valuation tools directly into the hands of every
                citizen.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <div className="flex-1 rounded-[1.5rem] border-2 border-black bg-white p-6 md:p-8">
                  <span className="mb-1 block text-4xl font-black tracking-tighter text-black md:text-5xl">
                    98%
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    AI Accuracy
                  </span>
                </div>
                <div className="flex-1 rounded-[1.5rem] bg-black p-6 text-white shadow-xl md:p-8">
                  <span className="mb-1 block text-4xl font-black tracking-tighter md:text-5xl">
                    127
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                    Global Partners
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border-2 border-dashed border-black bg-gray-50 p-8 md:p-10">
              <h3 className="mb-8 text-xl font-bold leading-snug tracking-tight text-black md:text-2xl">
                "We believe a sustainable future is possible only when every
                household is incentivized to recycle correctly."
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white md:h-14 md:w-14">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-tight text-black">
                    EcoLoop Founders
                  </p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    Board of Directors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-16 text-3xl font-black uppercase tracking-tighter text-white md:mb-20 md:text-5xl">
            Our Core Pillars
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group rounded-[2rem] border-4 border-transparent bg-white p-8 text-left transition-all hover:border-gray-500 md:p-12"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-black text-xl font-black text-white transition-transform group-hover:-rotate-12 md:h-16 md:w-16 md:text-2xl">
                  {pillar.id}
                </div>
                <h3 className="mb-4 text-2xl font-black uppercase tracking-tighter md:text-3xl">
                  {pillar.title}
                </h3>
                <p className="text-base font-bold leading-tight text-gray-500 md:text-lg">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionSection;
