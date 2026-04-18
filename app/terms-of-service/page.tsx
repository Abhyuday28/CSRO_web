import Link from "next/link";

export default function TermsOfService() {
  return (
    <main className="section-shell section-spacing">
      <div className="max-w-3xl">
        <h1 className="section-heading">Terms of Service</h1>
        <p className="mt-4 text-slate-600">Last updated: April 18, 2026</p>

        <div className="mt-8 space-y-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-semibold text-deep">1. Agreement to Terms</h2>
            <p className="mt-4 leading-7">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep">2. Use License</h2>
            <p className="mt-4 leading-7">
              Permission is granted to temporarily download one copy of the materials (information or software) on CSRO's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep">3. Disclaimer</h2>
            <p className="mt-4 leading-7">
              The materials on CSRO's website are provided on an 'as is' basis. CSRO makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep">4. Limitations</h2>
            <p className="mt-4 leading-7">
              In no event shall CSRO or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CSRO's website, even if CSRO or a CSRO authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep">5. Accuracy of Materials</h2>
            <p className="mt-4 leading-7">
              The materials appearing on CSRO's website could include technical, typographical, or photographic errors. CSRO does not warrant that any of the materials on its website are accurate, complete, or current. CSRO may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep">6. Links</h2>
            <p className="mt-4 leading-7">
              CSRO has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by CSRO of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep">7. Modifications</h2>
            <p className="mt-4 leading-7">
              CSRO may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep">8. Governing Law</h2>
            <p className="mt-4 leading-7">
              These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep">Contact Us</h2>
            <p className="mt-4 leading-7">
              If you have any questions about these Terms of Service, please contact us at:
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
