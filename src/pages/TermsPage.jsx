import React from "react";
import { Link } from "react-router-dom";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="border-b-4 border-black py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Link to="/" className="mb-6 inline-flex items-center gap-3">
            <img src="/logo.webp" alt="EcoLoop logo" className="h-14 w-auto" />
            <span className="text-2xl font-bold tracking-tight text-gray-900">EcoLoop</span>
          </Link>
          <h1 className="text-7xl font-black uppercase leading-[0.8] tracking-tighter md:text-9xl">
            Terms of <br />
            <span className="text-gray-300">Use.</span>
          </h1>
          <p className="mt-8 text-xl font-bold uppercase tracking-widest text-gray-500">
            Effective Date: January 2026
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl space-y-16 px-6 py-20">
        <section>
          <h2 className="mb-6 text-3xl font-black uppercase">01. The Agreement</h2>
          <p className="text-lg font-medium leading-relaxed text-gray-700">
            By using EcoLoop you agree to these terms. EcoLoop is a phygital
            platform for e-waste identification, hazard mitigation, and circular
            economy participation.
          </p>
        </section>

        <section>
          <h2 className="mb-6 text-3xl font-black uppercase">02. Code of Conduct</h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="mb-4 border-b-4 border-black pb-2 text-2xl font-black uppercase">
                The Dos
              </h3>
              <ul className="space-y-3 text-base font-bold text-gray-700">
                <li>Provide accurate material data when using AI tools.</li>
                <li>Follow all safety prompts and handling instructions.</li>
                <li>List only legally-owned materials for exchange or sale.</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 border-b-4 border-black pb-2 text-2xl font-black uppercase">
                The Don&apos;ts
              </h3>
              <ul className="space-y-3 text-base font-bold text-gray-500">
                <li>Do not spoof or manipulate valuation workflows.</li>
                <li>Do not use the platform for illegal dumping activity.</li>
                <li>Do not disable or bypass safety sensor systems.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-black p-10 text-white">
          <h2 className="mb-4 text-3xl font-black uppercase">03. Liability & Safety</h2>
          <p className="text-lg font-bold leading-relaxed text-gray-300">
            EcoLoop provides AI-driven guidance, but physical safety remains the
            user&apos;s responsibility. Proper protective equipment is mandatory when
            handling hazardous materials.
          </p>
        </section>

        <section>
          <Link
            to="/"
            className="inline-block rounded-full bg-black px-8 py-3 font-bold text-white transition hover:bg-gray-800"
          >
            Back to Home
          </Link>
        </section>
      </main>
    </div>
  );
};

export default TermsPage;
