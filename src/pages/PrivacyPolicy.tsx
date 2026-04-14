import { forwardRef } from "react";

const PrivacyPolicy = forwardRef<HTMLElement>((_, ref) => {
  return (
    <main ref={ref} className="min-h-screen bg-background">
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="mb-8 text-3xl font-bold uppercase tracking-tight">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="mb-6 text-sm text-muted-foreground">
            Effective Date: April 14, 2025
          </p>

          <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                Introduction
              </h2>
              <p>
                NorCal Boxing Club ("we," "us," or "our") operates the website{" "}
                <span className="text-foreground">norcalboxingclub.com</span>. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website. By using
                this site, you agree to the practices described in this policy.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                Information We Collect
              </h2>
              <p className="mb-2">
                We may collect personally identifiable information ("PII") that
                you voluntarily provide through our website, including but not
                limited to:
              </p>
              <ul className="ml-6 list-disc space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Any additional information you include in a message through our contact form</li>
              </ul>
              <p className="mt-2">
                This information is collected when you submit our contact form or
                otherwise communicate with us through the website.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                How We Use Your Information
              </h2>
              <p className="mb-2">We use the information we collect to:</p>
              <ul className="ml-6 list-disc space-y-1">
                <li>Respond to your inquiries and requests</li>
                <li>Provide information about our programs and services</li>
                <li>Improve our website and user experience</li>
                <li>Comply with applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                Third-Party Services
              </h2>
              <p className="mb-2">
                Our website uses the following third-party services that may
                collect data:
              </p>
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  <span className="font-medium text-foreground">EmailJS</span> —
                  to process contact form submissions. Your name, email, phone
                  number, and message are transmitted to EmailJS for delivery.
                  Please review{" "}
                  <a
                    href="https://www.emailjs.com/legal/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-primary"
                  >
                    EmailJS's Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Google Maps
                  </span>{" "}
                  — embedded on our contact page. Google may collect usage data.
                  Please review{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-primary"
                  >
                    Google's Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Google Search Console / Site Verification
                  </span>{" "}
                  — used for website indexing and search performance monitoring.
                </li>
              </ul>
              <p className="mt-2">
                We do not sell, trade, or rent your personal information to
                third parties.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                CalOPPA Compliance
              </h2>
              <p className="mb-2">
                In accordance with the California Online Privacy Protection Act
                (CalOPPA), we agree to the following:
              </p>
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  Users can visit our site anonymously. PII is only collected
                  when voluntarily submitted.
                </li>
                <li>
                  This privacy policy link is accessible from our home page and
                  on every page of the site via the footer.
                </li>
                <li>
                  Our Privacy Policy link includes the word "Privacy" and can be
                  easily found on the page.
                </li>
                <li>
                  Users will be notified of any privacy policy changes on this
                  page.
                </li>
                <li>
                  Users can contact us regarding their personal information by
                  emailing us at the address below.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                Do Not Track Signals
              </h2>
              <p>
                We honor Do Not Track signals. We do not track, plant cookies, or
                use advertising when a Do Not Track (DNT) browser mechanism is in
                place.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                Data Security
              </h2>
              <p>
                We implement reasonable security measures to protect your
                personal information. However, no method of transmission over the
                Internet or electronic storage is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                Children's Privacy
              </h2>
              <p>
                Our website is not directed to children under the age of 13. We
                do not knowingly collect PII from children under 13. If you
                believe we have inadvertently collected such information, please
                contact us so we can promptly remove it.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated effective date. We
                encourage you to review this page periodically.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or wish to
                request access to, correction of, or deletion of your personal
                data, please contact us:
              </p>
              <div className="mt-3 space-y-1">
                <p>
                  <span className="font-medium text-foreground">Email:</span>{" "}
                  <a
                    href="mailto:info@norcalboxingclub.com"
                    className="underline hover:text-primary"
                  >
                    info@norcalboxingclub.com
                  </a>
                </p>
                <p>
                  <span className="font-medium text-foreground">Phone:</span>{" "}
                  <a
                    href="tel:+17077471722"
                    className="underline hover:text-primary"
                  >
                    (707) 747-1722
                  </a>
                </p>
                <p>
                  <span className="font-medium text-foreground">Address:</span>{" "}
                  323 W Texas St, Fairfield, CA 94533
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
});

PrivacyPolicy.displayName = "PrivacyPolicy";

export default PrivacyPolicy;
