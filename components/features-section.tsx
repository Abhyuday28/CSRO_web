import Image from "next/image";

const features = [
  {
    title: "Multi-stage purification",
    copy:
      "Layered filtration reduces sediments, odors, and unwanted impurities while keeping water crisp and refreshing."
  },
  {
    title: "Mineral-conscious performance",
    copy:
      "The system is designed to deliver cleaner water without leaving the taste flat, helping retain a balanced drinking experience."
  },
  {
    title: "Reliable service support",
    copy:
      "Certified technicians handle installation and maintenance so your purifier stays dependable for daily home use."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="section-shell section-spacing">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="section-heading tracking-[-0.05em] text-deep">
          Precision at the atomic level.
        </h2>
      </div>

      <div className="glass-panel mt-10 rounded-[36px] p-6 sm:p-8 lg:p-10">
        <div className="rounded-[32px] border border-white/60 bg-white/70 p-8 shadow-card sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary sm:text-sm">
            The Science Of Purity
          </p>

          <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div className="hidden lg:block relative overflow-hidden rounded-[32px] shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1400&q=80"
                alt="Close-up filtration concept visual"
                width={1400}
                height={960}
                className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[420px]"
              />
            </div>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-5"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-lg font-bold text-primary sm:h-16 sm:w-16 sm:text-2xl">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-deep sm:text-xl">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-base leading-8 text-slate-600">
                      {feature.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[32px] border border-white/60 bg-white/70 p-8 shadow-card sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary sm:text-sm">
            Why Families trust CSRO?
          </p>

          <div className="mt-4 grid gap-0 lg:grid-cols-3">
            <div className="rounded-[24px] bg-slate-50/90 p-2">
              <h4 className="text-xl font-semibold tracking-[-0.03em] text-deep">
                Uncompromising Safety
              </h4>
              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-600">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Removes 99.99% of harmful contaminants including lead,
                    chlorine, and emerging microplastics.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-[24px] bg-slate-50/90 p-2">
              <h4 className="text-xl font-semibold tracking-[-0.03em] text-deep">
                Instant Refreshment
              </h4>
              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-600">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    High-flow technology means no waiting. Get crisp, perfectly
                    chilled water on demand, instantly.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-[24px] bg-slate-50/90 p-2">
              <h4 className="text-xl font-semibold tracking-[-0.03em] text-deep">
                Eco-Conscious Design
              </h4>
              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-600">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Zero plastic waste. One CSRO filter replaces thousands of
                    single-use water bottles every year.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
