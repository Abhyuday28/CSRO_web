import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="section-shell section-spacing">
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel rounded-[34px] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            About Us
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-deep">
            We brings natural filtration principles into contemporary Indian homes and offices.
          </h2>
        </div>

        <div id="contact" className="glass-panel rounded-[34px] p-8">
          <p className="text-base leading-8 text-slate-600">
            We focus on delivering clean, safe, and refreshing water with a design language that
            feels premium in every room. Whether you are booking a first demo for your family or
            upgrading your office hydration setup, CSRO is designed to help you convert interest
            into confidence quickly.
          </p>
          {/* <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#demo" className="cta-primary">
              Book Free Demo
            </Link>
            <Link href="mailto:care@csro.in" className="cta-secondary">
              Service Request
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}
