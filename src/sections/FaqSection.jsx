import React from "react";

const faqs = [
  {
    question: "How accurate is the AI recognition?",
    answer:
      "Our neural network achieves up to 98.4% accuracy and distinguishes polymers, metals, and key electronic components.",
  },
  {
    question: "How do I get paid for my waste?",
    answer:
      "Funds can be transferred to your digital wallet once certified recyclers verify and pick up classified materials.",
  },
  {
    question: "Can I use EcoLoop when internet is unstable?",
    answer:
      "Yes. Core scan workflows, tutorial content, and local pricing cache are available offline and sync when connection returns.",
  },
  {
    question: "What is the role of the Eco-Check and Safety Scanner?",
    answer:
      "The Eco-Check validates liquid and metal quality, while the smart scanner monitors dangerous gases for immediate safety alerts.",
  },
];

const FaqSection = () => {
  return (
    <section className="border-t border-gray-200 bg-gray-50 py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center md:mb-20">
          <h2 className="text-3xl font-black uppercase tracking-tight text-black md:text-5xl">
            Common Inquiries
          </h2>
          <p className="mt-6 text-lg font-medium text-gray-500">
            Everything you need to know about the EcoLoop ecosystem.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-gray-200 bg-white p-6 transition-colors hover:border-black md:p-8"
            >
              <h4 className="mb-4 text-lg font-black uppercase tracking-tight text-black md:text-xl">
                {faq.question}
              </h4>
              <p className="text-sm font-medium leading-relaxed text-gray-600 md:text-base">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center md:mt-16">
          <p className="text-sm font-bold text-gray-500">
            Still have questions?
            <a
              href="#contact-us"
              className="ml-2 px-2 py-1 text-black underline transition-all hover:bg-black hover:text-white"
            >
              Speak with the team -&gt;
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
