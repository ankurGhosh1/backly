import React from "react";

function About() {
  return (
    <div id="about" className="py-16">
      <div className="mx-auto text-center flex flex-col items-center justify-center gap-4">
        <div className="bg-white inline-block rounded-full px-4 py-1 text-sm font-semibold text-back shadow-md">
          <p>About Us</p>
        </div>
        <h2 className="text-4xl font-medium leading-[1.25]">
          The mission behind Backly
        </h2>
        <p className="mt-4 text-base text-gray max-w-3xl">
          Backly helps SEO teams qualify backlink opportunities faster with AI-powered domain scoring and verified outreach contacts. 
          We believe link-building should be transparent, data-driven, and scalable—so you can spend less time sifting through domains and more time building relationships that actually move rankings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="rounded-xl border border-gray-100 p-6 text-left bg-white">
          <h3 className="text-lg font-semibold">Data you can trust</h3>
          <p className="mt-2 text-sm text-gray">
            We combine trusted third‑party metrics with our own relevance model to surface high‑quality domains with clarity.
          </p>
        </div>
        <div className="rounded-xl border border-gray-100 p-6 text-left bg-white">
          <h3 className="text-lg font-semibold">Workflows that scale</h3>
          <p className="mt-2 text-sm text-gray">
            From CSV uploads to contact exports, Backly is built for teams that manage large outreach pipelines.
          </p>
        </div>
        <div className="rounded-xl border border-gray-100 p-6 text-left bg-white">
          <h3 className="text-lg font-semibold">Privacy‑first</h3>
          <p className="mt-2 text-sm text-gray">
            We only surface business-relevant contacts and never handle sensitive personal data—keeping you compliant.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
