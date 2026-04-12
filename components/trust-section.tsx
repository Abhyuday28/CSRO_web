const trustLogos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/NSF_International_logo.svg/330px-NSF_International_logo.svg.png?_=20210916173429",
    alt: "NSF International"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Isi_mark.svg/500px-Isi_mark.svg.png",
    alt: "ISI Certification"
  },
  {
    src: "https://media.assettype.com/thequint%2F2016-01%2F5fe4b302-c270-4b8a-8c02-db7cf3ef93ed%2FMake-in-India.jpg?rect=0%2C0%2C1820%2C1024&auto=format%2Ccompress&fmt=webp&width=720",
    alt: "Make in India"
  },
  {
    src: "https://www.legalmantra.net/admin/assets/upload_image/blog/MSME.png",
    alt: "MSME Recognized"
  },
  {
    src: "https://cdn.who.int/media/images/default-source/infographics/who-emblem.png?sfvrsn=877bb56a_2",
    alt: "WHO Certified"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Conformit%C3%A9_Europ%C3%A9enne_%28logo%29.svg/330px-Conformit%C3%A9_Europ%C3%A9enne_%28logo%29.svg.png",
    alt: "CE mark"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/47/ISO_logo.png?_=20130908074201",
    alt: "ISO Certification"
  },
  {
    src: "https://logoeps.com/wp-content/uploads/2012/12/water-quality-association-vector-logo.png",
    alt: "Water Quality Association"
  }
];

export function TrustSection() {
  const trustCards = trustLogos.map((logo, index) => (
    <div
      key={`${logo.alt}-${index}`}
      className="flex-shrink-0 inline-flex h-20 w-[140px] items-center justify-center rounded-2xl border border-white/30 bg-white/65 p-2 sm:h-24 sm:w-full sm:p-3"
    >
      <img
        src={logo.src}
        alt={logo.alt}
        className="h-10 w-auto max-w-[100px] sm:h-12 sm:max-w-[120px] object-contain"
      />
    </div>
  ));

  const marqueeCards = [...trustLogos, ...trustLogos].map((logo, index) => (
    <div
      key={`${logo.alt}-loop-${index}`}
      className="flex-shrink-0 inline-flex h-20 w-[140px] items-center justify-center rounded-2xl border border-white/30 bg-white/65 p-2 sm:h-24 sm:w-[165px] sm:p-3"
    >
      <img
        src={logo.src}
        alt={logo.alt}
        className="h-10 w-auto max-w-[100px] sm:h-12 sm:max-w-[120px] object-contain"
      />
    </div>
  ));

  return (
    <section className="section-shell section-spacing">
      <div className="glass-panel overflow-hidden rounded-[32px] px-6 py-6 sm:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-success">
              Certified with trust
            </p>
          </div>

          <div className="w-full">
            <div className="relative overflow-hidden sm:hidden">
              <div className="flex gap-3 whitespace-nowrap animate-scrollLeft">
                {marqueeCards}
              </div>
            </div>

            <div className="hidden gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-8">
              {trustCards}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
