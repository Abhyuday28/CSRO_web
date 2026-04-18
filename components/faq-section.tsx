"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Who is CSRO ideal for?",
    answer:
      "CSRO is built for homeowners, families, and offices looking for a reliable, premium water purifier with clean aesthetics."
  },
  {
    question: "Can I schedule a free demo before buying?",
    answer:
      "Yes. The site is designed to drive lead generation, so users can quickly request a demo and connect with the CSRO team."
  },
  {
    question: "What trust markers back the brand?",
    answer:
      "CSRO highlights 10,000+ families served along with ISI, MSME, and Make in India trust credentials."
  },
  {
    question: "How long does installation take?",
    answer:
      "Standard CSRO installations take about 90 minutes, including setup, testing, and a quick product walkthrough."
  },
  {
    question: "Does CSRO protect minerals in water?",
    answer:
      "Yes. The system filters impurities while preserving healthy minerals so your water stays fresh and naturally balanced."
  },
  {
    question: "Is it suitable for hard water areas?",
    answer:
      "CSRO works well in hard water regions with advanced filtration steps that soften and purify without stripping mineral quality."
  },
  {
    question: "What maintenance should I expect?",
    answer:
      "Routine servicing is simple: filter checks and replacements every 6–12 months, plus optional support plans for peace of mind."
  },
  {
    question: "Can the system be installed in offices?",
    answer:
      "Absolutely. CSRO is designed for homes and small offices that need consistent, high-quality drinking water."
  },
  {
    question: "How soon can I get a demo scheduled?",
    answer:
      "Once you request a demo, the CSRO team will typically reach out within one business day to confirm your preferred slot."
  },
  {
    question: "Is this safe for babies and young children?",
    answer:
      "Yes. CSRO delivers purified, balanced water that is safe for all family members, including infants and toddlers."
  }
];

export function FaqSection() {
  const [visibleCount, setVisibleCount] = useState(5);
  const showMore = () => {
    if (visibleCount >= faqs.length) {
      setVisibleCount(5);
    } else {
      setVisibleCount((current) => Math.min(current + 2, faqs.length));
    }
  };

  return (
    <section id="faqs" className="section-shell section-spacing">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="section-heading mt-2">FAQs</h2>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.28em] text-primary">Everything customers usually ask</p>
        </div>

        <div className="mt-8 space-y-4">
          {faqs.slice(0, visibleCount).map((faq) => (
            <details key={faq.question} className="glass-panel rounded-[28px] p-6">
              <summary className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold text-deep">
                <span>{faq.question}</span>
                <svg
                  className="h-5 w-5 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}

          <div className="pt-4 text-center">
            <button
              type="button"
              onClick={showMore}
              className="cta-secondary px-6 py-3"
            >
              {visibleCount >= faqs.length ? "View less" : "View more"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
