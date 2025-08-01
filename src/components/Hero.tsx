import React from "react";
import Image from "next/image";
import Container from "./Container";

function Hero() {
  return (
    <div className="bg-[url(/bg-hero.png)] bg-cover bg-center">
      <Container>
        <div className="relative px-4 pt-42 pb-16 ">
          <div className="mx-auto text-center">
            <div className="bg-primary inline-block rounded-full px-4 py-1 text-sm font-semibold text-white shadow-md">
              <p>Features</p>
            </div>
            <h1 className="text-6xl font-medium leading-[1.25] max-md:text-3xl max-md:mt-4">
              AI-Driven Backlink <br />
              Qualification at Scale
            </h1>
            <p className="mt-4 text-lg max-md:text-base text-pretty text-gray ">
              Go beyond basic metrics. Our AI agent analyze, score and
              prioritize backlink <br /> opportunities so your outreach hits
              where it matters most.
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <a
                className="inline-block rounded border border-indigo-600 bg-primary px-5 py-3 font-medium text-white shadow-sm transition-colors"
                href="#"
              >
                Get Started
              </a>

              <a
                className="inline-block bg-white rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover"
                href="#"
              >
                Book a demo
              </a>
            </div>
          </div>
          {/* Hero Image */}
          <div className="flex justify-center mt-8">
            <div className="mt-8 w-[1000px] h-[522px] max-md:h-[auto]">
              <Image
                src="/dash.png"
                alt="Hero Image"
                layout="responsive"
                priority
                width={500}
                height={522}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
