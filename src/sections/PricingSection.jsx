import React from "react";

const plans = [
  {
    title: "Starter",
    price: "Free",
    description: "For students and households starting safe recycling.",
    features: [
      "Multi-object AI scan with confidence score",
      "Universal Waste ID across materials",
      "Toxic alerts and basic safety prompts",
      "Eco-Hero points and learning mode",
    ],
    cta: "Start for Free",
    dark: false,
  },
  {
    title: "Professional",
    price: "$12/mo",
    description: "For technicians, collectors, and repair teams.",
    features: [
      "Everything in Starter",
      "Safe disassembly guidance and advanced alerts",
      "Live copper/aluminium/gold price updates",
      "Marketplace listing and recycler map access",
      "Eco-Check and scanner device integration",
    ],
    cta: "Start Pro Trial",
    dark: true,
    badge: "Most Popular",
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "For institutions and large-scale circular operations.",
    features: [
      "Multi-site dashboards and governance controls",
      "API + MQTT/LoRaWAN integration",
      "Offline sync, local language, and audit exports",
      "Dedicated onboarding and support",
    ],
    cta: "Contact Sales",
    dark: false,
  },
];

const PricingSection = () => {
  return (
    <>
      <section className="border-b border-gray-100 bg-white py-20 text-center md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.3em] text-black md:text-xs">
            Flexible Plans
          </span>
          <h1 className="mb-8 text-5xl font-bold tracking-tighter text-black md:text-7xl">
            Pricing for a <span className="underline decoration-4">Better Planet.</span>
          </h1>
          <p className="text-lg font-medium leading-relaxed text-gray-500 md:text-xl">
            Plans are structured for real adoption from individuals to
            organizations running high-volume recovery programs.
          </p>
        </div>
      </section>

      <section id="pricing" className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative flex flex-col rounded-[2rem] p-8 md:p-10 ${
                plan.dark
                  ? "bg-black text-white shadow-2xl md:-mb-4 md:-mt-4"
                  : "border border-gray-200 bg-white transition-all duration-300 hover:border-black"
              }`}
            >
              {plan.badge ? (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black bg-white px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-black">
                  {plan.badge}
                </div>
              ) : null}
              <div className="mb-8">
                <h3 className="mb-2 text-2xl font-black uppercase tracking-tight">
                  {plan.title}
                </h3>
                <p className={`text-sm font-medium ${plan.dark ? "text-gray-400" : "text-gray-500"}`}>
                  {plan.description}
                </p>
              </div>
              <div className="mb-8">
                <span className={`text-5xl font-black ${plan.dark ? "text-white" : "text-black"}`}>
                  {plan.price.replace("/mo", "")}
                </span>
                {plan.price.includes("/mo") ? (
                  <span className={`font-bold ${plan.dark ? "text-gray-500" : "text-gray-400"}`}>
                    /mo
                  </span>
                ) : null}
              </div>
              <ul className="mb-12 flex-grow space-y-3.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-3 text-sm font-bold ${
                      plan.dark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <svg
                      className={`h-5 w-5 ${plan.dark ? "text-white" : "text-black"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact-us"
                className={`w-full rounded-full py-4 text-center text-xs font-black uppercase tracking-widest transition-all ${
                  plan.dark
                    ? "bg-white text-black hover:bg-gray-200"
                    : "border-2 border-black text-black hover:bg-black hover:text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PricingSection;
