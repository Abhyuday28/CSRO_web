import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="section-shell section-spacing">
      <div className="max-w-3xl">
        <h1 className="section-heading">Privacy Policy</h1>
        <p className="mt-4 text-slate-600">Last updated: April 18, 2026</p>

        <div className="mt-8 space-y-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-semibold text-deep">Introduction</h2>
            <p className="mt-4 leading-7">
              CSRO ("we", "our", or "us") operates the CSRO website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep">Information Collection and Use</h2>
            <p className="mt-4 leading-7">
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data").</li>
              <li>Usage Data: We may also collect information on how the Service is accessed and used ("Usage Data").</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep">Use of Data</h2>
            <p className="mt-4 leading-7">
              CSRO uses the collected data for various purposes:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep">Security of Data</h2>
            <p className="mt-4 leading-7">
              The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep">Changes to This Privacy Policy</h2>
            <p className="mt-4 leading-7">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep">Contact Us</h2>
            <p className="mt-4 leading-7">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 space-y-2">
              <p>Email: <a href="mailto:Hello@csro.com" className="text-primary hover:underline">Hello@csro.com</a></p>
              <p>Phone: +91 1800-2323-21</p>
              <p>Address: Katihar, Bihar</p>
            </div>
          </section>
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-deep transition hover:border-primary/40 hover:text-primary"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
