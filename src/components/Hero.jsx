import React from "react";

const computer = "/Computer.png";
const phone = "/Phone.png";

const particles = [
  { top: "6%", left: "-6%", width: 12, height: 12, animationDelay: "0s" },
  { top: "20%", left: "-10%", width: 18, height: 18, animationDelay: "0.6s" },
  { top: "40%", left: "-4%", width: 10, height: 10, animationDelay: "1.2s" },
  { top: "-6%", left: "72%", width: 14, height: 14, animationDelay: "0.3s" },
  { top: "-10%", left: "88%", width: 10, height: 10, animationDelay: "1s" },
  { top: "60%", left: "102%", width: 20, height: 20, animationDelay: "0.4s" },
  { top: "72%", left: "110%", width: 12, height: 12, animationDelay: "0.8s" },
  { top: "50%", left: "95%", width: 16, height: 16, animationDelay: "1.6s" },
  { top: "92%", left: "10%", width: 14, height: 14, animationDelay: "0.9s" },
  { top: "82%", left: "36%", width: 10, height: 10, animationDelay: "1.4s" },
  { top: "48%", left: "60%", width: 8, height: 8, animationDelay: "2s" },
  { top: "28%", left: "84%", width: 12, height: 12, animationDelay: "1.1s" },
  { top: "14%", left: "60%", width: 9, height: 9, animationDelay: "1.8s" },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4.75rem)] w-full overflow-hidden bg-white md:min-h-[calc(100vh-5.25rem)]"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-12 px-10 py-10 md:flex-row md:gap-16 md:py-14">
        <div className="flex-1 text-left">
          <h1 className="mb-8 text-6xl font-black leading-[1.1] tracking-tighter text-slate-900 md:text-7xl">
            Smarter Waste. <br />
            <span className="text-slate-400">Safer Future.</span>
          </h1>
          <p className="mb-10 max-w-md text-lg font-medium leading-relaxed text-slate-500">
            AI + IoT platform to identify e-waste, reduce hazards, and turn
            discarded materials into value.
          </p>
          <a
            href="#contact-us"
            className="inline-block rounded-full bg-slate-900 px-10 py-4 text-[15px] font-bold text-white shadow-xl shadow-slate-200 transition-all hover:bg-black active:scale-95"
          >
            Get Started
          </a>
        </div>

        <div className="relative h-[400px] w-full flex-1 md:h-[500px]">
          <div className="absolute left-0 top-0 z-10 h-full w-full">
            <img src={computer} alt="EcoLoop dashboard" className="h-full w-full object-contain" />
          </div>

          <div className="pointer-events-none absolute inset-0 z-[15]">
            {particles.map((particle, index) => (
              <span key={`particle-${index}`} className="particle" style={particle} />
            ))}
          </div>

          <div className="absolute -bottom-12 -right-8 z-20 h-[70%] w-[38%] transition-transform duration-500 hover:scale-105">
            <img
              src={phone}
              alt="EcoLoop mobile view"
              className="h-full w-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-[60px] w-full fill-slate-50/80 md:h-[100px]"
        >
          <path d="M0,0 C300,100 900,10 1200,80 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
