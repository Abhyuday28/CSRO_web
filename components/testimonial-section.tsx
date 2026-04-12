const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    feedback:
      "The demo made the decision simple. Installation was quick, and the water tastes noticeably fresher every day."
  },
  {
    name: "Rahul Mehta",
    location: "Gurugram",
    feedback:
      "The technician explained everything clearly and fitted the unit neatly. Our family switched to CSRO after one tasting."
  },
  {
    name: "Ananya Rao",
    location: "Noida",
    feedback:
      "Smooth booking, professional service, and clean-tasting water. It feels like a premium upgrade for our kitchen."
  },
  {
    name: "Sakshi Patel",
    location: "Faridabad",
    feedback:
      "The installation was seamless and the water quality is far better than our old purifier. Highly recommended for families."
  },
  {
    name: "Manoj Gupta",
    location: "Mumbai",
    feedback:
      "CSRO’s support team stayed in touch until everything was running perfectly. Our home now has consistently clear, refreshing water."
  },
  {
    name: "Riya Nair",
    location: "Bengaluru",
    feedback:
      "We love how little space the unit takes and how much better the water tastes. The whole experience was premium and easy."
  },
  {
    name: "Amit Verma",
    location: "Chennai",
    feedback:
      "Fast setup, attentive staff, and reliable performance. The purifier has made daily drinking water worry-free for our family."
  },
  {
    name: "Neha Kulkarni",
    location: "Pune",
    feedback:
      "The follow-up service was excellent, and the system keeps our water clean without any fuss. So glad we chose CSRO."
  },
  {
    name: "Devansh Singh",
    location: "Lucknow",
    feedback:
      "A great switch from our old purifier — better taste, quieter operation, and a much smoother installation process."
  }
];

const testimonialLoop = [...testimonials, ...testimonials];

export function TestimonialSection() {
  return (
    <section id="testimonials" className="section-shell section-spacing">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <h2 className="section-heading">Testimonial</h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            Loved by 5000+ Homes
          </p>
          <p className="section-copy mt-4">
            Families choose CSRO for clear demos, careful installation, and water that tastes fresh
            from the first day.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-white/40 bg-white/40 p-4 shadow-card h-[560px] sm:h-[620px]">
          <div className="grid gap-5 animate-scrollUp">
            {testimonialLoop.map((testimonial, index) => (
              <article key={`${testimonial.name}-${testimonial.location}-${index}`} className="glass-panel rounded-[28px] p-6">
                <p className="text-base leading-8 text-slate-600">&ldquo;{testimonial.feedback}&rdquo;</p>
                <div className="mt-5">
                  <h3 className="text-base font-semibold text-deep">{testimonial.name}</h3>
                  <p className="text-sm text-primary">{testimonial.location}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/95 to-transparent" />
        </div>
      </div>
    </section>
  );
}
