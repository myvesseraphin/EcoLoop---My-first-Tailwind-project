import React, { useState } from "react";

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.currentTarget;

    try {
      const data = new FormData(form);
      const response = await fetch("https://formspree.io/f/xgoowpro", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setIsSubmitted(true);
      form.reset();
    } catch {
      // eslint-disable-next-line no-alert
      alert("Oops! There was a problem submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact-us"
      className="relative overflow-hidden border-t border-gray-100 bg-white py-20 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="text-center lg:text-left">
            <span className="mb-6 block text-xs font-black uppercase tracking-[0.4em] text-black">
              Connect
            </span>
            <h1 className="mb-8 text-6xl font-black leading-[0.95] tracking-tighter text-black md:text-8xl">
              Join the <br />
              <span className="bg-black px-3 text-white">Loop.</span>
            </h1>

            <div className="mt-12 inline-block space-y-8 text-left md:space-y-12 lg:block">
              <div className="group flex items-center gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:scale-110 md:h-16 md:w-16">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    Email
                  </h4>
                  <p className="text-lg font-bold text-black md:text-xl">
                    myvesseraphin@gmail.com
                  </p>
                </div>
              </div>

              <div className="group flex items-center gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white text-black transition-transform group-hover:scale-110 md:h-16 md:w-16">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    HQ
                  </h4>
                  <p className="text-lg font-bold text-black md:text-xl">Kigali, Rwanda</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border-2 border-black bg-white p-8 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] md:p-14 md:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
            {isSubmitted ? (
              <div className="mb-8 flex animate-bounce items-center gap-4 rounded-2xl border-2 border-green-500 bg-green-50 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-tighter text-green-900">
                    Message Sent!
                  </h4>
                  <p className="text-xs font-bold text-green-700">
                    The EcoLoop team will contact you shortly.
                  </p>
                </div>
              </div>
            ) : null}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="ml-1 text-[10px] font-black uppercase tracking-widest text-black">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full rounded-xl border-2 border-transparent bg-gray-50 px-6 py-4 font-bold text-black outline-none transition-all placeholder-gray-300 focus:border-black focus:bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="ml-1 text-[10px] font-black uppercase tracking-widest text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="email@domain.com"
                    className="w-full rounded-xl border-2 border-transparent bg-gray-50 px-6 py-4 font-bold text-black outline-none transition-all placeholder-gray-300 focus:border-black focus:bg-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="ml-1 text-[10px] font-black uppercase tracking-widest text-black">
                  Subject
                </label>
                <select
                  name="subject"
                  className="w-full cursor-pointer appearance-none rounded-xl border-2 border-transparent bg-gray-50 px-6 py-4 font-bold text-black outline-none transition-all focus:border-black focus:bg-white"
                >
                  <option>General Inquiry</option>
                  <option>Partnership</option>
                  <option>Technical Support</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="ml-1 text-[10px] font-black uppercase tracking-widest text-black">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-xl border-2 border-transparent bg-gray-50 px-6 py-4 font-bold text-black outline-none transition-all placeholder-gray-300 focus:border-black focus:bg-white"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-black py-5 text-sm font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-gray-800 active:scale-[0.98] disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message ->"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
