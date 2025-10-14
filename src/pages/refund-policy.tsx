import React from "react";
import Container from "../components/Container";

export default function Home() {
  return (
    <div className="pt-36 pb-16">
      <Container>
        <h1 className="text-4xl font-bold mb-4 text-center">
          Refund Policy – Backly
        </h1>
        <p className="mb-4">
          <b>Effective Date: 10 October, 2025 Last Updated: 14 October, 2025</b>
          <br />
          <br />
          At Backly, we strive to provide reliable backlink qualification and
          outreach solutions. However, we understand that circumstances may
          require refunds.
          <br />
          <br />
          <b> 1. General Policy </b>
          <ul>
            <li>
              Subscriptions are non-refundable once billing has occurred, except
              where required by law.
            </li>
            <li>
              Users are responsible for cancelling subscriptions before the
              renewal date to avoid further charges.
            </li>
          </ul>
          <br />
          <br />
          <b>2. Eligible Refunds</b>
          We may consider refunds in the following cases:
          <ul>
            <li>Duplicate charges due to technical or payment errors.</li>
            <li>
              Platform downtime exceeding 72 consecutive hours that prevents
              service access.
            </li>
            <li>
              Failure to deliver core features (e.g., domain scoring, CSV upload
              processing) due to system issues.
            </li>
          </ul>
          <br />
          <br />
          <b>3. Ineligible Refunds</b>
          <ul>
            <li>Credits unused during a billing cycle.</li>
            <li>
              Dissatisfaction with results (e.g., backlink scores or contact
              quality) as these are estimates and third-party dependent.
            </li>
            <li>Misuse of the platform or violation of Terms of Service.</li>
          </ul>
          We do not sell your personal data.
          <br />
          <br />
          <b>4. How to Request a Refund</b>
          Send a request to contact@getbackly.com within 7 days of the billing
          date. Refunds, if approved, will be processed within 10 business days
          back to the original payment method.
        </p>
      </Container>
    </div>
  );
}
