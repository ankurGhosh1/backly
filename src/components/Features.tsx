import React from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

function Features() {
  return (
    <div className="py-16">
      <div className="mx-auto text-center flex flex-col items-center justify-center gap-4 ">
        <div className="bg-white inline-block rounded-full px-4 py-1 text-sm font-semibold text-back shadow-md">
          <p>Features</p>
        </div>
        <h2 className="text-4xl font-medium leading-[1.25]">
          Enhance Your Financial <br />
          Operations with Advanced Features
        </h2>
        <p className="mt-4 text-base text-gray ">
          From real-time data to customizable reports, our dashboard delivers{" "}
          <br />
          powerful tools that simplify complex financial tasks and support
          business <br />
          growth. opportunities so your outreach hits where it matters most.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center mt-16 gap-16">
        <div className="grid grid-cols-[.75fr_1fr] max-sm:grid-cols-[1fr] gap-16 w-full ">
          <div className="flex items-center justify-center">
            <Image
              src="/features.png"
              alt="Feature 1"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-semibold">
              Instantly Qualify Quality <br /> Domains with AI
            </h3>
            <p className="mt-2 text-base text-gray">
              From single domains to bulk lists, our automated system delivers
              accurate backlink <br />
              scores helping you prioritize outreach based on true domain value.
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
              <p className="text-sm text-gray">Custom Scoring Logic</p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <CheckCircleIcon
                aria-hidden="true"
                className="size-5 flex-none "
              />
              <p className="text-sm text-gray">Real-Time Domain Analysis</p>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="text-sm font-semibold bg-primary px-4 py-2 text-white rounded"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-16 gap-16 ">
        <div className="grid grid-cols-[.75fr_1fr] max-sm:grid-cols-[1fr] gap-16 w-full ">
          <div className="flex flex-col justify-center ml-12 max-xl:ml-0">
            <h3 className="text-3xl font-semibold">
              Instantly Qualify Quality <br /> Domains with AI
            </h3>
            <p className="mt-2 text-base text-gray">
              From single domains to bulk lists, our automated system delivers
              accurate backlink scores helping you prioritize outreach based on
              true domain value.
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
              <p className="text-sm text-gray">Custom Scoring Logic</p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <CheckCircleIcon
                aria-hidden="true"
                className="size-5 flex-none "
              />
              <p className="text-sm text-gray">Real-Time Domain Analysis</p>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="text-sm font-semibold bg-primary px-4 py-2 text-white rounded"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/features.png"
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
              src="/features.png"
              alt="Feature 1"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-semibold">
              Instantly Qualify Quality <br /> Domains with AI
            </h3>
            <p className="mt-2 text-base text-gray">
              From single domains to bulk lists, our automated system delivers
              accurate backlink <br />
              scores helping you prioritize outreach based on true domain value.
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
              <p className="text-sm text-gray">Custom Scoring Logic</p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <CheckCircleIcon
                aria-hidden="true"
                className="size-5 flex-none "
              />
              <p className="text-sm text-gray">Real-Time Domain Analysis</p>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="text-sm font-semibold bg-primary px-4 py-2 text-white rounded"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-16 gap-16 ">
        <div className="grid grid-cols-[.75fr_1fr] max-sm:grid-cols-[1fr] gap-16 w-full ">
          <div className="flex flex-col justify-center ml-12 max-xl:ml-0">
            <h3 className="text-3xl font-semibold">
              Instantly Qualify Quality <br /> Domains with AI
            </h3>
            <p className="mt-2 text-base text-gray">
              From single domains to bulk lists, our automated system delivers
              accurate backlink scores helping you prioritize outreach based on
              true domain value.
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
              <p className="text-sm text-gray">Custom Scoring Logic</p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <CheckCircleIcon
                aria-hidden="true"
                className="size-5 flex-none "
              />
              <p className="text-sm text-gray">Real-Time Domain Analysis</p>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="text-sm font-semibold bg-primary px-4 py-2 text-white rounded"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/features.png"
              alt="Feature 1"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
