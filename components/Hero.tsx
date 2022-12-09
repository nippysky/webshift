import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "../public/brand/WebshiftLogo.svg";

export default function Hero() {
  return (
    <section
      className="w-full h-screen px-20 pt-10 flex flex-col justify-between"
      style={{ backgroundImage: "url('/brand/Homepage.svg')" }}
    >
      {/* Logo */}
      <div className="flex justify-start">
        <Link href={"/"}>
          <Image src={Logo} width={250} height={50} priority alt={"Logo"} />
        </Link>
      </div>

      {/* Hero Details */}
      <div className="flex flex-col justify-start w-[40%]">
        <h1 className=" font-kallistoHeavy text-[3.5rem] text-white">
          The easiest <br /> way to build XR websites.
        </h1>

        <p className="font-aeonikRegular text-white tex-[1.1rem] my-7">
          Webshift empowers designers and developers to build immersive AR/VR
          websites in a completely visual canvas <br /> - no coding needed.
        </p>
      </div>

      {/* Text Slider */}
      <div className="w-full"></div>
    </section>
  );
}
