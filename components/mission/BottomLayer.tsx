import Image from "next/image";
import React from "react";

import Earth from "../../public/brand/Earth.svg";
import OvalLine from "../../public/brand/OvalLine.svg";

export default function BottomLayer() {
  return (
    <div className="w-full flex flex-col-reverse lg:flex lg:flex-row h-[700px] mt-[20rem] lg:mt-0">
      {/* LEFT */}
      <div className="lg:w-1/2 w-full lg:border-r lg:border-white">
        {/* heading */}
        <div className="w-full flex justify-center items-center lg:py-20 py-10 lg:px-20 px-5 lg:h-[70%]">
          <h1 className=" font-kallistoMedium text-[1.85rem] lg:text-[2.5rem] text-white mb-10">
            Our mission is to bring the entire web to XR
          </h1>
        </div>

        {/* colored div */}
        <div className="w-full border-y border-white h-[30%]">
          <div className="lg:w-[70%] w-full bg-[#E4F22F] border-r border-white flex justify-center items-center h-full py-14">
            <button className="text-black bg-[#E4F22F] font-kallistoMedium px-14 py-2 rounded-full border border-black hover:bg-black hover:text-white">
              Join Our <br /> Movement
            </button>
          </div>
          <div className="lg:w-[30%] w-0 hidden lg:flex"></div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center py-20 lg:px-20 px-5">
        <div>
          <div className="flex justify-center animate-spin">
            <Image src={Earth} alt={"Earth"} width={350} height={350} />
          </div>

          {/* circle text */}
          <div className="flex justify-center text-center relative">
            <p className="font-aeonikRegular text-white tex-[1.1rem] mt-20">
              We’re looking for the best designers, engineers, and free-thinkers
              to help define the future of The Internet and help bring our
              vision of XR to reality. If this is you, please consider joining
              our movement.
            </p>

            <div className="absolute top-20 z-10">
              <Image src={OvalLine} alt={"OvalLine"} width={500} height={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
