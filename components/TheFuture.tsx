import Image from "next/image";
import React from "react";

import Woman from "../public/brand/Woman.png";

export default function TheFuture() {
  return (
    <section className="w-full lg:h-[850px] relative">
      <div className="absolute bottom-0 right-10 w-full">
        <Image src={Woman} alt={"Woman"} width={1200} height={1500} priority />
      </div>
      {/* top spiral background */}
      <div
        className="w-full h-[75%] z-0"
        style={{ backgroundImage: "url('/brand/LineBg.svg')", zIndex: 0 }}
      >
        {/* OBJECTS */}
        <img
          src="/brand/RandomElements.svg"
          alt="Random Elements"
          className=" object-cover  w-[100%] h-[100%]"
        />
      </div>

      {/* textbg */}
      <div
        className="w-full h-[25%] px-20 py-10"
        style={{ backgroundImage: "url('/brand/GradientBG.svg')" }}
      >
        <div className="flex flex-col justify-center">
          <h1 className=" text-gray-300 font-kallistoMedium text-3xl lg:opacity-50 opacity-5">
            The future of web is XR.
            <br /> The future of web is XR.
            <br /> The future of web is XR.
          </h1>
        </div>
      </div>
    </section>
  );
}
