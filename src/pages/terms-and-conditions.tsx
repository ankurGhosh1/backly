import React from "react";
import Container from "../components/Container";

export default function Home() {
  return (
    <div className="pt-36 pb-16">
      <Container>
        <h1 className="text-4xl font-bold mb-4 text-center">
          Terms and Conditions
        </h1>
        <p className="mb-4">
          <b>Effective Date: 10 October, 2025 Last Updated: 14 October, 2025</b>
          <br />
          <br />
          Welcome to Backly! These Terms and Conditions (`&quot;`Terms`&quot;`)
          govern your These Terms govern your use of **Backly**, our SaaS
          platform for backlink qualification, contact retrieval, and outreach.
          By accessing or using Backly, you agree to these Terms.
          <br />
          <br />
          <b> 1. Use of Service</b> Backly provides website analysis, backlink
          scoring, contact data retrieval, and outreach campaign tools. You are
          responsible for maintaining the confidentiality of your account
          credentials. You must not misuse the platform for spam, illegal
          activities, or unauthorized data scraping.
          <br />
          <br />
          <b>2. Subscriptions & Payments</b> Backly operates on a **credit-based
          subscription model**. Subscription fees are billed via Stripe and are
          non-refundable unless required by law. We reserve the right to change
          pricing or features with prior notice.
          <br />
          <br />
          <b>3. Data & Content</b> You may upload domain URLs and CSV files for
          analysis. You represent that you have the right to provide this data.
          Contact information provided by Backly is sourced from APIs and
          databases and is intended for **business use only**. You must comply
          with **GDPR, CCPA, CAN-SPAM**, and other applicable laws when using
          retrieved contact data for outreach.
          <br />
          <br />
          <b>4. Intellectual Property</b> All content, algorithms, scoring
          models, and software of Backly remain our property. Users are granted
          a **limited, non-transferable license** to use the platform for
          legitimate business purposes.
          <br />
          <br />
          <b>5. Termination</b> We may suspend or terminate accounts that
          violate these Terms or abuse the platform. Users can cancel
          subscriptions anytime through their dashboard.
          <br />
          <br />
          <b>6. Limitation of Liability</b> Backly provides scoring and contact
          data on a <b>best-effort basis</b> and does not guarantee specific SEO
          results. We are not liable for losses resulting from outreach
          campaigns, misuse of data, or third-party integrations.
          <br />
          <br />
          <b>7. Governing Law</b> These Terms are governed by the laws of
          Kolkata, West Bengal. Any disputes will be resolved in the courts of
          Kolkata, West Bengal.
        </p>
      </Container>
    </div>
  );
}
