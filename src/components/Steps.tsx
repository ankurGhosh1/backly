import React from "react";
import Image from "next/image";

function Steps() {
  return (
    <div id="how-it-works" className="py-16">
      <div className="mx-auto text-center flex flex-col items-center justify-center gap-4 ">
        <div className="bg-white inline-block rounded-full px-4 py-1 text-sm font-semibold text-back shadow-md">
          <p>How It Works</p>
        </div>
        <h2 className="text-4xl font-medium leading-[1.25]">
          Backlink Qualification Simplified in 3 Easy Steps
        </h2>
      </div>

      <div className="grid grid-cols-[1fr_.75fr] max-md:grid-cols-[1fr] gap-4 mt-16">
        <div className="flex flex-col rounded-xl shadow-lg">
          <div className="flex items-center bg-[#f6fafd] w-full p-6">
            <div className="bg-white rounded-full w-14 h-10 flex items-center justify-center text-black font-semibold text-2xl">
              1
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">
                Upload Your Domains
              </h3>
              <p className="mt-2 text-base text-gray">
                Add individual URLs or upload a bulk CSV file. Backly automatically detects metrics from trusted sources like Ahrefs and analyzes each site in seconds.
              </p>
            </div>
          </div>
          <div className="flex items-center bg-white w-full p-6">
            <div className="bg-[#f6fafd] rounded-full w-14 h-10 flex items-center justify-center text-black font-semibold text-2xl">
              2
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">
                Get AI-Generated Scores
              </h3>
              <p className="mt-2 text-base text-gray">
                Backly’s scoring algorithm evaluates domain authority, traffic trends, and relevance, producing a simple quality score you can trust.
              </p>
            </div>
          </div>
          <div className="flex items-center bg-[#f6fafd] w-full p-6">
            <div className="bg-white rounded-full w-14 h-10 flex items-center justify-center text-black font-semibold text-2xl">
              3
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">
                Discover Outreach Contacts
              </h3>
              <p className="mt-2 text-base text-gray">
                Access verified business contacts instantly — export them to your CRM or outreach tools and start building better backlinks.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center max-md:items-center">
          <Image
            src="/step.jpg"
            alt="Steps Image"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Steps;
