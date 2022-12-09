import Image from "next/image";
import React from "react";

import BallSpring from "../../public/brand/BallSpring.svg";
import Ring from "../../public/brand/Ring.svg";

export default function SecondLayer() {
  return (
    <div className="w-full flex">
      {/* left */}
      <div className="w-1/2 border-r border-white py-10 flex justify-center items-center">
        <div className="m-auto">
          <Image
            src={Ring}
            alt={"Ring Grid"}
            width={400}
            height={400}
            priority
          />
        </div>
      </div>

      {/* right */}
      <div className="w-1/2 pt-40 px-20">
        <h1 className=" font-kallistoMedium text-[2.5rem] text-white">
          Design and build the future of the internet.
        </h1>

        <p className="font-aeonikRegular text-white tex-[1.1rem] my-7">
          We believe that in the near future every website will have an AR/VR
          experience (Responsive XR; Responsive Reality) — a near identical
          adoption we saw with smartphones and responsive web. We’re here to
          accelerate this adoption by making building websites in XR intuitive,
          easy, and fun.
        </p>

        {/* button and img */}
        <div className="w-full flex justify-between items-center mt-20 ">
          <button className="text-[#E7FD7D] bg-transparent font-kallistoMedium px-14 py-2 rounded-full border border-[#E7FD7D] hover:bg-[#E7FD7D] hover:text-black">
            Join Our <br /> Movement
          </button>

          <div className="animate animate-pulse">
            <Image
              src={BallSpring}
              alt={"Ball Spring"}
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
