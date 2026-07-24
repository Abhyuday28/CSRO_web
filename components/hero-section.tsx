import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="top" className="section-shell relative pb-12 pt-8 sm:pb-14 sm:pt-12 lg:pt-16">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fadeUp">
          <div className="glass-panel inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium text-deep">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M12 2C9 6.3 6 9.1 6 13a6 6 0 1 0 12 0c0-3.9-3-6.7-6-11Z" />
              </svg>
            </span>
            Next-Generation Natural Filtration
          </div>

          <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] text-deep sm:text-5xl lg:text-7xl">
            <span className="block">Water : the way</span>
            <span className="mt-64block bg-gradient-to-r from-primary to-aqua bg-clip-text text-transparent">
              nature intended.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Clean. Safe. Refreshing. Optimal. Experience the pinnacle of home water
            purification with CSRO&apos;s advanced Natural filtration technology.
          </p>

          <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-4">
            <Link href="#demo" className="cta-primary">
              Get your free demo
            </Link>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check w-5 h-5 text-green-500" aria-hidden="true">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              Certified Technicians
            </div>
            
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute inset-8 rounded-[40px] bg-gradient-to-br from-white/60 to-aqua/30 blur-3xl" />
          <div className="glass-panel relative isolate ml-auto max-w-xl rounded-[40px] p-6">
            <div className="absolute -left-14 top-10 z-20 glass-panel rounded-3xl px-4 py-3 text-sm font-medium text-deep shadow-card">
              Designed for modern homes
            </div>
            <div className="animate-float relative z-10 overflow-hidden rounded-[32px] bg-gradient-to-b from-sky-100 to-white p-5 shadow-glow">
              <Image
                src="/hero-water-purifier.png"
                alt="Premium CSRO water purifier"
                width={960}
                height={1120}
                className="h-[560px] w-full rounded-[28px] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
