import React from "react";
import Image from "next/image";

function Clients() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <p className="text-gray text-base font-semibold max-sm:text-center">
        Trusted by beloved partners and customers
      </p>
      <div className="flex flex-wrap justify-center gap-16 max-md:gap-8 mt-8">
        <Image
          src="/clogo.png"
          alt="client-logo"
          height={40}
          width={150}
          className="grayscale"
        />
        <Image
          src="/clogo.png"
          alt="client-logo"
          height={40}
          width={150}
          className="grayscale"
        />
        <Image
          src="/clogo.png"
          alt="client-logo"
          height={40}
          width={150}
          className="grayscale"
        />
        <Image
          src="/clogo.png"
          alt="client-logo"
          height={40}
          width={150}
          className="grayscale"
        />
        <Image
          src="/clogo.png"
          alt="client-logo"
          height={40}
          width={150}
          className="grayscale"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-16 max-md:gap-8 mt-8">
        <Image
          src="/clogo.png"
          alt="client-logo"
          height={40}
          width={150}
          className="grayscale max-md:hidden"
        />
        <Image
          src="/clogo.png"
          alt="client-logo"
          height={40}
          width={150}
          className="grayscale"
        />
        <Image
          src="/clogo.png"
          alt="client-logo"
          height={40}
          width={150}
          className="grayscale"
        />
        <Image
          src="/clogo.png"
          alt="client-logo"
          height={40}
          width={150}
          className="grayscale"
        />
      </div>
    </div>
  );
}

export default Clients;
