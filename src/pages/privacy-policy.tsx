import React from "react";
import Container from "../components/Container";

export default function Home() {
  return (
    <div className="pt-36 pb-16">
      <Container>
        <h1 className="text-4xl font-bold mb-4 text-center">
          Privacy Policy – Backly
        </h1>
        <p className="mb-4">
          <b>Effective Date: 10 October, 2025 Last Updated: 14 October, 2025</b>
          <br />
          <br />
          Backly (“we,” “our,” or “us”) values your privacy and is committed to
          protecting your personal and business data. This Privacy Policy
          explains how we collect, use, store, and protect your information when
          you use our SaaS platform. By accessing or using Backly, you agree to
          the terms of this Privacy Policy.
          <br />
          <br />
          <b> 1. Information We Collect </b>
          <ul>
            <li>
              Account Information: Name, email address, login credentials (via
              Email/Password or Google SSO).
            </li>
            <li>
              Payment Data: Processed securely through Stripe. We do not store
              full payment card details.
            </li>
            <li>
              Domain & Website Data: URLs, industry/category, traffic metrics,
              domain rating, backlink scores.
            </li>
            <li>
              Contact Data: Business-related contacts (name, company, position,
              email, LinkedIn) retrieved via third-party APIs and internal
              databases.
            </li>
            <li>
              Usage Data: Actions on the dashboard, CSV uploads, processing
              history, and email notification preferences.
            </li>
          </ul>
          <br />
          <br />
          <b>2. How We Use Your Information</b>
          <ul>
            <li>To provide website qualification and backlink scoring.</li>
            <li>To retrieve and export business contact data for outreach.</li>
            <li>
              To send notifications about CSV processing, reports, and updates.
            </li>
            <li>To process subscription payments and manage account access.</li>
            <li>To improve our scoring algorithms and platform features.</li>
          </ul>
          <br />
          <br />
          <b>3. Data Sharing & Third Parties</b>
          We may share data with trusted third parties solely to operate Backly,
          including:
          <ul>
            <li>Stripe for secure payments.</li>
            <li>SendGrid for transactional emails.</li>
            <li>Ahrefs API for domain data.</li>
            <li>
              Hunter.io, Snov.io, Clearbit (or similar providers) for contact
              data retrieval.
            </li>
          </ul>
          We do not sell your personal data.
          <br />
          <br />
          <b>4. Security & Compliance</b>
          <ul>
            <li>
              All sensitive data (emails, API keys, payment info) is encrypted.
            </li>
            <li>
              GDPR & CCPA compliance: Only business-related data is collected.
              Users can request data deletion or opt-out.
            </li>
            <li>
              Access control and rate limiting protect against unauthorized use.
            </li>
          </ul>
          <br />
          <br />
          <b>5. Data Retention</b>
          We store user and domain data only as long as necessary to provide our
          services or as required by law. Users can delete accounts or request
          data removal at any time.
          <br />
          <br />
          <b>6. Your Rights</b>
          Depending on your location, you may have the right to:
          <ul>
            <li>Access and request a copy of your data.</li>
            <li>Correct or update your data.</li>
            <li>Request deletion of your data.</li>
            <li>Opt-out of certain processing.</li>
          </ul>
          <br />
          <br />
          <b>7. Contact Us</b>
          For questions about this Privacy Policy, contact us at:
          contact@getbackly.com
        </p>
      </Container>
    </div>
  );
}
