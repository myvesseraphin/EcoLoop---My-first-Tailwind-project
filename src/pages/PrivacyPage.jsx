import React from "react";
import { Link } from "react-router-dom";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="border-b-4 border-black py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Link to="/" className="mb-6 inline-flex items-center gap-3">
            <img src="/logo.webp" alt="EcoLoop logo" className="h-14 w-auto" />
            <span className="text-2xl font-bold tracking-tight text-gray-900">EcoLoop</span>
          </Link>
          <h1 className="text-7xl font-black uppercase leading-[0.8] tracking-tighter md:text-9xl">
            Privacy <br />
            <span className="text-gray-300">Policy.</span>
          </h1>
          <p className="mt-8 text-xl font-bold uppercase tracking-widest text-gray-500">
            Last Updated: January 2026
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl space-y-16 px-6 py-20">
        <section>
          <h2 className="mb-6 text-3xl font-black uppercase">01. Our Commitment</h2>
          <p className="text-lg font-medium leading-relaxed text-gray-700">
            EcoLoop collects only the data required to power AI classification,
            safety guidance, and marketplace workflows. We do not sell personal
            information to third-party advertisers.
          </p>
        </section>

        <section>
          <h2 className="mb-6 text-3xl font-black uppercase">02. Data We Collect</h2>
          <ul className="space-y-4 text-lg font-medium text-gray-700">
            <li>Visual data for e-waste recognition and model improvement.</li>
            <li>Sensor telemetry from connected safety devices.</li>
            <li>Wallet and transaction data for payout processing.</li>
            <li>Safety and compliance logs for hazardous handling workflows.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-6 text-3xl font-black uppercase">03. User Rights</h2>
          <p className="text-lg font-medium leading-relaxed text-gray-700">
            You can request export or deletion of your account profile, waste
            history, and related activity records by contacting the EcoLoop team.
          </p>
        </section>

        <section className="rounded-[2rem] border-2 border-black bg-gray-50 p-8">
          <h3 className="text-2xl font-black uppercase">Contact for Privacy Requests</h3>
          <p className="mt-3 text-lg font-medium text-gray-700">
            Email: myvesseraphin@gmail.com
          </p>
          <Link
            to="/"
            className="mt-8 inline-block rounded-full bg-black px-8 py-3 font-bold text-white transition hover:bg-gray-800"
          >
            Back to Home
          </Link>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPage;
