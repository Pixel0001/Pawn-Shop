import Nav from "./Nav";
export default function PrivacyPolicy({
    businessName = "Pawn Shop",
    contactEmail = "supportPawn@gmail.com",
    address = "Str. Bucovinei 14, Chișinău, MD-2094",
    country = "Moldova",
    lastUpdated = "October 4, 2025",
  }) {
    return (
        <>
            <Nav />
            <div className="pt-[100px] w-screen bg-[var(--primary-color)]" >
            <div className="mx-auto max-w-3xl  px-6 py-10 text-[var(--text-color,theme(colors.gray.800))] bg-[var(--card-bg)]">
                <header className="mb-8 border-b pb-6">
                <h1 className="text-3xl font-extrabold tracking-tight">Privacy Policy</h1>
                <p className="mt-2 text-sm text-gray-500">Last updated: {lastUpdated}</p>
                <p className="mt-4 leading-relaxed">
                    This Privacy Policy describes how {businessName} ("we", "us", or "our") collects, uses, and shares information in connection with
                    your use of our website, products, and services.
                </p>
                </header>
        
                <nav className="mb-10 rounded-2xl border bg-[var(--primary-color)] p-4 shadow-sm backdrop-blur">
                <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-600">Contents</h2>
                <ul className="grid gap-1 text-sm list-disc pl-5">
                    <li><a href="#info-we-collect" className="hover:underline">1. Information We Collect</a></li>
                    <li><a href="#how-we-use" className="hover:underline">2. How We Use Information</a></li>
                    <li><a href="#sharing" className="hover:underline">3. How We Share Information</a></li>
                    <li><a href="#payments" className="hover:underline">4. Payments & Anti-Fraud</a></li>
                    <li><a href="#cookies" className="hover:underline">5. Cookies & Tracking</a></li>
                    <li><a href="#retention" className="hover:underline">6. Data Retention</a></li>
                    <li><a href="#rights" className="hover:underline">7. Your Rights</a></li>
                    <li><a href="#children" className="hover:underline">8. Children’s Privacy</a></li>
                    <li><a href="#third-parties" className="hover:underline">9. Third-Party Links</a></li>
                    <li><a href="#changes" className="hover:underline">10. Changes to This Policy</a></li>
                    <li><a href="#contact" className="hover:underline">11. Contact Us</a></li>
                </ul>
                </nav>
        
                <section id="info-we-collect" className="mb-8">
                <h2 className="text-xl font-bold">1. Information We Collect</h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
                    <li>
                    <span className="font-medium">Personal Information:</span> name, email address, phone number, billing and
                    shipping address, and account credentials you provide.
                    </li>
                    <li>
                    <span className="font-medium">Order & Transaction Details:</span> purchased items, order history, totals, currency,
                    delivery details, and communications related to your orders.
                    </li>
                    <li>
                    <span className="font-medium">Pawn/Second-Hand Compliance Data (if applicable):</span> proof of identity, proof of ownership,
                    serial numbers, product photos, valuation records, and signatures collected to meet legal obligations and
                    prevent fraud.
                    </li>
                    <li>
                    <span className="font-medium">Payment Information:</span> processed securely by our payment processors; we do not store
                    full card numbers. We may receive tokens, the last 4 digits, and status codes.
                    </li>
                    <li>
                    <span className="font-medium">Technical Data:</span> IP address, device and browser information, approximate location, referral
                    URLs, and usage analytics (pages viewed, time on page, clicks).
                    </li>
                    <li>
                    <span className="font-medium">Communications:</span> messages you send to us (email, chat, support tickets) and survey responses.
                    </li>
                </ul>
                </section>
        
                <section id="how-we-use" className="mb-8">
                <h2 className="text-xl font-bold">2. How We Use Information</h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
                    <li>To operate and improve our website, products, and services.</li>
                    <li>To process orders, payments, deliveries, and returns.</li>
                    <li>To verify identity, ownership, and comply with anti-fraud and second‑hand goods regulations.</li>
                    <li>To provide customer support and respond to inquiries.</li>
                    <li>To send service notices and (with your consent where required) marketing communications.</li>
                    <li>To protect our rights, prevent abuse, enforce terms, and comply with law.</li>
                </ul>
                </section>
        
                <section id="sharing" className="mb-8">
                <h2 className="text-xl font-bold">3. How We Share Information</h2>
                <p className="mt-3 leading-relaxed">
                    We do <span className="font-semibold">not sell</span> personal data. We may share information with:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
                    <li>
                    <span className="font-medium">Service Providers:</span> hosting, analytics, delivery couriers, payment processors,
                    customer support tools—all bound by confidentiality obligations.
                    </li>
                    <li>
                    <span className="font-medium">Law Enforcement/Authorities:</span> when required by law or to protect users, our business, and others.
                    </li>
                    <li>
                    <span className="font-medium">Business Transfers:</span> in connection with a merger, acquisition, or sale of assets, subject to safeguards.
                    </li>
                </ul>
                </section>
        
                <section id="payments" className="mb-8">
                <h2 className="text-xl font-bold">4. Payments & Anti-Fraud</h2>
                <p className="mt-3 leading-relaxed">
                    Payments are processed by third‑party providers (e.g., card networks or PayPal). These providers collect and
                    process your payment details in accordance with their own privacy policies. We implement technical and
                    organizational measures to prevent, detect, and investigate fraud, including device and usage signals.
                </p>
                </section>
        
                <section id="cookies" className="mb-8">
                <h2 className="text-xl font-bold">5. Cookies & Tracking</h2>
                <p className="mt-3 leading-relaxed">
                    We use cookies and similar technologies to remember preferences, analyze traffic, and personalize content.
                    You can control cookies through your browser settings. Some features may not function properly without certain
                    cookies enabled.
                </p>
                </section>
        
                <section id="retention" className="mb-8">
                <h2 className="text-xl font-bold">6. Data Retention</h2>
                <p className="mt-3 leading-relaxed">
                    We retain personal data only as long as necessary for the purposes set out in this Policy, to comply with legal
                    obligations (including second‑hand goods record‑keeping), resolve disputes, and enforce our agreements. Retention
                    periods vary by data type and legal requirements.
                </p>
                </section>
        
                <section id="rights" className="mb-8">
                <h2 className="text-xl font-bold">7. Your Rights</h2>
                <p className="mt-3 leading-relaxed">
                    Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict the processing of
                    your personal data, object to processing, and request data portability. Where processing relies on consent,
                    you may withdraw it at any time. To exercise your rights, contact us using the details below.
                </p>
                </section>
        
                <section id="children" className="mb-8">
                <h2 className="text-xl font-bold">8. Children’s Privacy</h2>
                <p className="mt-3 leading-relaxed">
                    Our services are not directed to children under the age required by local law. We do not knowingly collect
                    personal data from children. If you believe a child has provided us personal data, please contact us.
                </p>
                </section>
        
                <section id="third-parties" className="mb-8">
                <h2 className="text-xl font-bold">9. Third‑Party Links</h2>
                <p className="mt-3 leading-relaxed">
                    Our website may contain links to third‑party websites. We are not responsible for their content or privacy
                    practices. Please review their policies before providing personal data.
                </p>
                </section>
        
                <section id="changes" className="mb-8">
                <h2 className="text-xl font-bold">10. Changes to This Policy</h2>
                <p className="mt-3 leading-relaxed">
                    We may update this Policy from time to time. We will post the updated version with a new “Last updated” date.
                    Material changes will be highlighted where appropriate.
                </p>
                </section>
        
                <section id="contact" className="mb-2">
                <h2 className="text-xl font-bold">11. Contact Us</h2>
                <address className="mt-3 not-italic leading-relaxed">
                    <div className="font-medium">{businessName}</div>
                    <div>{address}</div>
                    <div>{country}</div>
                    <div className="mt-1">Email: <a href={`mailto:${contactEmail}`} className="underline hover:no-underline">{contactEmail}</a></div>
                </address>
                </section>
        
                <footer className="mt-10 text-xs text-gray-500">
                <p>
                    This Privacy Policy is provided for general informational purposes and does not constitute legal advice. Consider
                    consulting with a qualified attorney to tailor this Policy to your specific operations and local regulations.
                </p>
                </footer>
            </div>
            </div>
      </>
    );
  }
  