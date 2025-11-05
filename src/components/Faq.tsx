import React from "react";

function Faq() {
  return (
    <div id="faq" className="py-16">
      <div className="mx-auto text-center flex flex-col items-center justify-center gap-4 ">
        <div className="bg-white inline-block rounded-full px-4 py-1 text-sm font-semibold text-back shadow-md">
          <p>FAQ</p>
        </div>
        <h2 className="text-4xl font-medium leading-[1.25]">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold">What is Backly?</h3>
            <p className="mt-2 text-base text-gray">
              Backly is a tool that helps you qualify backlinks by analyzing domain authority, traffic trends, and relevance. It provides a simple quality score to help you build better backlinks.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">How does the scoring algorithm work?</h3>
            <p className="mt-2 text-base text-gray">
              Our AI-powered scoring algorithm evaluates multiple factors, including domain authority from trusted sources like Ahrefs, traffic trends, and the relevance of the content to your niche. This gives you a reliable quality score.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Can I upload a list of domains?</h3>
            <p className="mt-2 text-base text-gray">
              Yes, you can add individual URLs or upload a bulk CSV file of domains. Backly will automatically analyze each site and provide you with the metrics you need.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">How do I find outreach contacts?</h3>
            <p className="mt-2 text-base text-gray">
              After analyzing the domains, Backly provides you with verified business contacts. You can export this information to your CRM or outreach tools to start your backlink-building campaign.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
