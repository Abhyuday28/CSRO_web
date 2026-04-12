import Image from "next/image";
import Link from "next/link";

const installationSteps = [
  {
    title: "Schedule your free demo",
    copy: "Choose a convenient time and our team will walk you through the right CSRO setup for your home."
  },
  {
    title: "Professional fitting",
    copy: "Certified technicians install the purifier cleanly, test the flow, and explain daily use."
  },
  {
    title: "Taste the Purity",
    copy: "Start enjoying fresh, balanced water from the first glass with support ready whenever you need it."
  }
];

export function InstallationProcessSection() {
  return (
    <section id="installation" className="section-shell section-spacing">
      <div className="text-center">
        <h2 className="section-heading mt-3">Installation Process</h2>
        
      </div>

      <div className="glass-panel mt-10 overflow-hidden rounded-[36px] p-6 sm:p-8 shadow-card">
        <div className="rounded-[32px] border border-white/60 bg-white/70 p-8 shadow-card sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary sm:text-sm">
            Pure water in your Home
          </p>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:items-center">
            <div className="space-y-4 sm:hidden">
              {installationSteps.map((step, index) => (
                <details
                  key={step.title}
                  className="group rounded-[28px] border border-slate-200 bg-slate-50/90 p-4 shadow-sm"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 list-none marker:hidden text-lg font-semibold text-deep">
                    <span>{step.title}</span>
                    <svg
                      className="h-5 w-5 text-primary transition duration-200 group-open:-rotate-180"
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
                  <div className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-600">
                    <p>{step.copy}</p>
                    {index === 0 && (
                      <div className="mt-5">
                        <Link href="#demo" className="cta-primary inline-flex px-5 py-3">
                          Schedule your free demo
                        </Link>
                      </div>
                    )}
                  </div>
                </details>
              ))}
            </div>

            <div className="hidden space-y-6 sm:block">
              {installationSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex flex-col gap-5 rounded-[28px] border border-slate-200 bg-slate-50/90 p-6 shadow-sm sm:flex-row sm:items-start"
                >
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-lg font-bold text-primary sm:h-16 sm:w-16 sm:text-2xl">
                    {index + 1}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-deep">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {step.copy}
                    </p>
                    {index === 0 && (
                      <div className="mt-5">
                        <Link href="#demo" className="cta-primary inline-flex px-5 py-3">
                          Schedule your free demo
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:block relative overflow-hidden rounded-[32px] shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1400&q=80"
                alt="Installation team setting up a water purifier"
                width={1400}
                height={1000}
                className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[420px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
