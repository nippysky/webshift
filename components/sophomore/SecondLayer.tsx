import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import BallSpring from "../../public/brand/BallSpring.svg";
import Ring from "../../public/brand/Ring.svg";

export default function SecondLayer() {
  return (
    <div className="w-full flex-col lg:flex-row lg:flex">
      {/* left */}
      <div className="w-full lg:w-1/2 lg:border-r lg:border-white py-10 flex justify-center items-center">
        <div className="m-auto">
          <Image
            src={Ring}
            alt={"Ring Grid"}
            width={350}
            height={350}
            priority
          />
        </div>
      </div>

      {/* right */}
      <div className="w-full lg:w-1/2 pt-10 lg:pt-40 px-5 lg:px-20">
        <h1
          // initial={{ x: 100, opacity: 0 }}
          // whileInView={{ x: 0, opacity: 1 }}
          // viewport={{ once: false, amount: 0.1 }}
          // transition={{ ease: "easeOut", duration: 0.5 }}
          className=" font-kallistoMedium text-[1.85rem] lg:text-[2.5rem] text-white"
        >
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
        <div className="w-full lg:flex lg:flex-row flex-col justify-between items-center mt-20 ">
          <button className="text-[#E7FD7D] bg-transparent font-kallistoMedium px-14 py-2 rounded-full border border-[#E7FD7D] hover:bg-[#E7FD7D] hover:text-black">
            Join Our <br /> Movement
          </button>

          <div className="animate animate-pulse flex justify-end">
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
