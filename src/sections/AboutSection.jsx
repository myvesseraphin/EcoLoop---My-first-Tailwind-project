import React from "react";
import {
  BrainCircuit,
  Check,
  Cpu,
  HandCoins,
  MapPinned,
  Network,
  Recycle,
  ScanSearch,
  ShieldAlert,
  ShieldCheck,
  Trophy,
  Wrench,
} from "lucide-react";

const features = [
  {
    icon: ScanSearch,
    title: "Multi-Object AI Detection",
    description:
      "Detects and classifies multiple parts in one photo with confidence scores for safer decisions.",
  },
  {
    icon: Recycle,
    title: "Universal Waste ID",
    description:
      "Classifies e-waste, plastics, metals, batteries, and liquids with one consistent scanning flow.",
  },
  {
    icon: ShieldAlert,
    title: "Toxic Material Red Alerts",
    description:
      "Flags mercury, lead solder, swollen batteries, and burn damage before handling starts.",
  },
  {
    icon: Wrench,
    title: "Safe Disassembly Mode",
    description:
      "Step-by-step guided teardown with required tools, safety warnings, and do-not-touch zones.",
  },
  {
    icon: HandCoins,
    title: "Dual-Path Value Guidance",
    description:
      "Generative AI gives a commercial value path and an upcycling innovation blueprint path.",
  },
  {
    icon: MapPinned,
    title: "Live Pricing + Marketplace Map",
    description:
      "Real-time copper, aluminium, gold, and motherboard pricing with nearest recycler map and availability.",
  },
  {
    icon: Trophy,
    title: "Eco-Hero Rewards",
    description:
      "Gamified points, badges, and leaderboard keep users engaged in consistent recycling actions.",
  },
  {
    icon: BrainCircuit,
    title: "Community Intelligence",
    description:
      "User corrections and local updates continuously improve model quality and local market relevance.",
  },
];

const partners = ["/reb.webp", "/coat.webp", "/Rema.webp", "/RSA_2021.webp"];

const systemBlocks = [
  {
    icon: Cpu,
    title: "Embedded Hardware",
    subtitle: "Eco-Check + Safety Scanner",
    tags: ["Conductivity", "Turbidity", "MQ Sensors"],
    points: [
      "Eco-Check handheld verifies liquid purity and recovered metal quality.",
      "Smart Safety Scanner detects VOC, methane, CO, and battery gas leakage.",
      "Field-first design gives immediate alerts before hazardous handling.",
    ],
  },
  {
    icon: Network,
    title: "Technical Integration",
    subtitle: "AI + IoT + Mobile Architecture",
    tags: ["YOLO + TFLite", "Gemma AI", "MQTT + LoRaWAN"],
    points: [
      "YOLO and TensorFlow Lite power low-latency recognition with confidence scores.",
      "Gemma AI generates valuation support, safety guidance, and upcycling blueprints.",
      "ESP32/Arduino pipelines stream telemetry into React Native + Node.js services.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Access & Reliability",
    subtitle: "Offline-Ready and Inclusive",
    tags: ["Offline First", "Local Sync", "Kinyarwanda + English"],
    points: [
      "Offline scans, tutorials, and local pricing cache keep users productive anywhere.",
      "Sync restores cloud records automatically when connectivity returns.",
      "Designed for students, technicians, and collectors in low-connectivity contexts.",
    ],
  },
];

const AboutSection = () => {
  return (
    <>
      <section id="features" className="relative overflow-hidden bg-gray-50 py-20 md:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-45"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "24px 24px, 48px 48px",
            backgroundPosition: "0 0, 12px 12px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col items-center justify-between gap-6 text-center md:mb-20 md:flex-row md:items-end md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
                The EcoLoop Ecosystem
              </h2>
              <p className="mt-4 text-lg font-normal text-gray-600 md:mt-6 md:text-xl">
                End-to-end intelligence for students, technicians, and scrap collectors.
              </p>
            </div>
            <div className="ml-10 mb-4 hidden h-[1px] flex-grow bg-gray-300 md:block" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl md:rounded-[2.5rem] md:p-9"
                >
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 transition-colors duration-500 group-hover:bg-black md:h-16 md:w-16">
                    <Icon className="h-7 w-7 text-black transition-colors duration-500 group-hover:text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-gray-600 md:text-base">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-14 rounded-[2rem] border-2 border-black bg-white p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.08)] md:mt-16 md:p-10">
            <div className="mb-8 flex flex-col items-center gap-4 text-center md:mb-10 md:items-start md:text-left">
              <span className="inline-flex rounded-full border border-black/20 bg-black px-4 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white">
                Architecture
              </span>
              <h3 className="text-2xl font-black tracking-tight text-gray-900 md:text-4xl">
                Full Platform Coverage
              </h3>
              <p className="max-w-3xl text-sm font-medium text-gray-500 md:text-base">
                Software intelligence, hardware safety systems, and resilient connectivity are
                designed as one unified phygital loop.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {systemBlocks.map((block) => {
                const Icon = block.icon;

                return (
                  <article
                    key={block.title}
                    className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 transition-all duration-300 hover:border-black"
                  >
                    <div className="mb-4 flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-black text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-black uppercase tracking-tight text-gray-900">
                          {block.title}
                        </h4>
                        <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                          {block.subtitle}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2.5 text-sm font-medium leading-relaxed text-gray-600">
                      {block.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-black" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {block.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-gray-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-white py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-10 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 md:mb-12">
            Aligned with National Vision
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-70 transition-all duration-300 hover:opacity-100 md:gap-24">
            {partners.map((partner) => (
              <img
                key={partner}
                src={partner}
                alt="Partner"
                className="h-10 w-auto grayscale transition hover:grayscale-0 md:h-16"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
