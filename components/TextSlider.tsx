import React from "react";

export default function TextSlider() {
  return (
    <section
      className="w-[200%] flex gap-10 py-5 bg-gradient-to-tr from bg-yellow-100 to-pink-500 relative animate-textslider"
      style={{ backgroundImage: "url('/brand/SliderBG.svg')" }}
    >
      {/* Div1 */}
      <div className="flex w-1/2 justify-around items-center">
        <h1 className="text-black font-kallistoHeavy text-[0.6rem] md:text-[1.2rem] lg:text-[1.5rem]">
          The future of web is XR.
        </h1>

        <h1 className="text-black font-kallistoHeavy text-[0.6rem] md:text-[1.2rem] lg:text-[1.5rem]">
          The future of web is XR.
        </h1>

        <h1 className="text-black font-kallistoHeavy text-[0.6rem] md:text-[1.2rem] lg:text-[1.5rem]">
          The future of web is XR.
        </h1>
      </div>

      {/* Div2 */}
      <div className="flex w-1/2 justify-around items-center">
        <h1 className="text-black font-kallistoHeavy text-[0.6rem] md:text-[1.2rem] lg:text-[1.5rem]">
          The future of web is XR.
        </h1>

        <h1 className="text-black font-kallistoHeavy text-[0.6rem] md:text-[1.2rem] lg:text-[1.5rem]">
          The future of web is XR.
        </h1>

        <h1 className="text-black font-kallistoHeavy text-[0.6rem] md:text-[1.2rem] lg:text-[1.5rem]">
          The future of web is XR.
        </h1>
      </div>
    </section>
  );
}
