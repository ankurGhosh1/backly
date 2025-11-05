import React from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

function Features() {
  return (
    <div id="features" className="py-16">
      <div className="mx-auto text-center flex flex-col items-center justify-center gap-4 ">
        <div className="bg-white inline-block rounded-full px-4 py-1 text-sm font-semibold text-back shadow-md">
          <p>Features</p>
        </div>
        <h2 className="text-4xl font-medium leading-[1.25]">
          Enhance Your Link-Building Strategy <br />
          with Advanced AI Features
        </h2>
        <p className="mt-4 text-base text-gray ">
          From instant domain analysis to automated contact discovery{" "}
          <br />
          Backly gives you powerful tools to qualify backlinks, prioritize <br />
          outreach, and scale your SEO campaigns with precision
        </p>
      </div>

      <div className="flex flex-col items-center justify-center mt-16 gap-16">
        <div className="grid grid-cols-[.75fr_1fr] max-sm:grid-cols-[1fr] gap-16 w-full ">
          <div className="flex items-center justify-center">
            <Image
              src="/dashfeat.jpg"
              alt="Feature 1"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-semibold">
              Instantly Qualify High-Value Domains
            </h3>
            <p className="mt-2 text-base text-gray">
              Upload a single domain or a CSV file — Backly’s automated engine evaluates each site using Domain Rating, traffic, industry relevance, and trend data to assign a Backlink Score that reflects real authority.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <CheckCircleIcon
                aria-hidden="true"
                className="size-5 flex-none "
              />
              <p className="text-sm text-gray">
                AI-Powered Relevance Detection
              </p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <CheckCircleIcon
                aria-hidden="true"
                className="size-5 flex-none "
              />
              <p className="text-sm text-gray">Custom Scoring Logic per Industry</p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <CheckCircleIcon
                aria-hidden="true"
                className="size-5 flex-none "
              />
              <p className="text-sm text-gray">Real-Time Domain Analysis</p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <CheckCircleIcon
                aria-hidden="true"
                className="size-5 flex-none "
              />
              <p className="text-sm text-gray">Bulk Upload & CSV Processing</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-16 gap-16 ">
        <div className="grid grid-cols-[.75fr_1fr] max-sm:grid-cols-[1fr] gap-16 w-full ">
          <div className="flex flex-col justify-center ml-12 max-xl:ml-0">
            <h3 className="text-3xl font-semibold">
             Find Verified Outreach Contacts Automatically
            </h3>
            <p className="mt-2 text-base text-gray">
              Get decision-maker details for every qualified website — first name, last name, company, position, email, and LinkedIn profile — powered by trusted third-party APIs and Backly’s internal contact database.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <CheckCircleIcon
                aria-hidden="true"
                className="size-5 flex-none "
              />
              <p className="text-sm text-gray">
                Verified B2B Contacts
              </p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <CheckCircleIcon
                aria-hidden="true"
                className="size-5 flex-none "
              />
              <p className="text-sm text-gray">No Personal Data (GDPR/CCPA Compliant)</p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <CheckCircleIcon
                aria-hidden="true"
                className="size-5 flex-none "
              />
              <p className="text-sm text-gray">CSV Export for Campaigns</p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <CheckCircleIcon
                aria-hidden="true"
                className="size-5 flex-none "
              />
              <p className="text-sm text-gray">Save Contacts to Lists for Future Outreach</p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/dashfeat.jpg"
              alt="Feature 1"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-16 gap-16">
        <div className="grid grid-cols-[.75fr_1fr] max-sm:grid-cols-[1fr] gap-16 w-full ">
          <div className="flex items-center justify-center">
            <Image
              src="/dashfeat.jpg"
              alt="Feature 1"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-semibold">
              Start Outreach Campaigns That Convert
            </h3>
            <p className="mt-2 text-base text-gray">
              Turn insights into action. Create targeted outreach lists and export ready-to-use CSVs for your favorite email or CRM tools.
              Backly helps you reach the right people faster — and build links that actually move rankings.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <CheckCircleIcon
                aria-hidden="true"
                className="size-5 flex-none "
              />
              <p className="text-sm text-gray">
                Prioritize Prospects by Backlink Score
              </p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <CheckCircleIcon
                aria-hidden="true"
                className="size-5 flex-none "
              />
              <p className="text-sm text-gray">Segment by Industry or Country</p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <CheckCircleIcon
                aria-hidden="true"
                className="size-5 flex-none "
              />
              <p className="text-sm text-gray">Track Responses and Conversions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
