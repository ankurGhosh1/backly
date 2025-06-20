import React from "react";
import Image from "next/image";

function Steps() {
  return (
    <div className="py-16">
      <div className="mx-auto text-center flex flex-col items-center justify-center gap-4 ">
        <div className="bg-white inline-block rounded-full px-4 py-1 text-sm font-semibold text-back shadow-md">
          <p>How It Works</p>
        </div>
        <h2 className="text-4xl font-medium leading-[1.25]">
          Simplify Your Financial <br />
          Management in Three Easy Steps
        </h2>
        <p className="mt-4 text-base text-gray ">
          Streamline your workflow with our intuitive process
          <br />
          for quick setup and enhanced financial insights.
        </p>
      </div>

      <div className="grid grid-cols-[1fr_.75fr] max-md:grid-cols-[1fr] gap-4 mt-16">
        <div className="flex flex-col rounded-xl shadow-lg">
          <div className="flex items-center bg-[#f6fafd] w-full p-6">
            <div className="bg-white rounded-full w-14 h-10 flex items-center justify-center text-black font-semibold text-2xl">
              1
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">
                Sign Up and Customize Your Dashboard
              </h3>
              <p className="mt-2 text-base text-gray">
                Choose which metrics to display, set up alerts, and customize
                reports to focus on what matters most to you.
              </p>
            </div>
          </div>
          <div className="flex items-center bg-white w-full p-6">
            <div className="bg-[#f6fafd] rounded-full w-14 h-10 flex items-center justify-center text-black font-semibold text-2xl">
              2
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">
                Integrate Your Financial Data
              </h3>
              <p className="mt-2 text-base text-gray">
                Whether it’s your accounting software or sales channels, our
                integrations ensure all your data flows into one centralized
                location.
              </p>
            </div>
          </div>
          <div className="flex items-center bg-[#f6fafd] w-full p-6">
            <div className="bg-white rounded-full w-14 h-10 flex items-center justify-center text-black font-semibold text-2xl">
              3
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">
                Analyze and Optimize Your Finances
              </h3>
              <p className="mt-2 text-base text-gray">
                Use our powerful tools to monitor income, track orders, evaluate
                top products, and review transactions
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center max-md:items-center">
          <Image
            src="/step.png"
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
