import Link from "next/link";

export function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/910000000000"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with CSRO on WhatsApp"
      className="fixed bottom-6 right-4 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-card transition duration-300 hover:-translate-y-1 sm:right-6"
    >
      <span className="flex h-9 w-9 animate-pulseSoft items-center justify-center rounded-full bg-white/20">
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M20.52 3.48A11.88 11.88 0 0 0 12.06 0C5.44 0 .06 5.38.06 12c0 2.12.56 4.2 1.62 6.03L0 24l6.14-1.61A11.97 11.97 0 0 0 12.06 24h.01c6.62 0 11.99-5.38 11.99-12 0-3.2-1.25-6.21-3.54-8.52ZM12.07 21.8c-1.8 0-3.56-.48-5.1-1.4l-.37-.22-3.64.95.97-3.55-.24-.37a9.74 9.74 0 0 1-1.5-5.21c0-5.42 4.41-9.83 9.84-9.83 2.63 0 5.1 1.03 6.96 2.88a9.77 9.77 0 0 1 2.88 6.95c0 5.43-4.41 9.84-9.8 9.84Zm5.39-7.36c-.3-.15-1.77-.87-2.05-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.73-1.65-2.03-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.14 4.55.72.3 1.28.48 1.72.61.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35Z" />
        </svg>
      </span>
      WhatsApp Us
    </Link>
  );
}
