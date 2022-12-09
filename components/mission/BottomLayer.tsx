import Image from "next/image";
import React from "react";

import Earth from "../../public/brand/Earth.svg";

export default function BottomLayer() {
  return (
    <div className="w-full flex h-[700px]">
      {/* LEFT */}
      <div className="w-1/2 border-r border-white">
        {/* heading */}
        <div className="w-full flex justify-center items-center py-20 px-20 h-[70%]">
          <h1 className=" font-kallistoMedium text-[2.5rem] text-white">
            Our mission is to bring the entire web to XR
          </h1>
        </div>

        {/* colored div */}
        <div className="w-full border-y border-white h-[30%]">
          <div className="w-[70%] bg-[#E4F22F] border-r border-white flex justify-center items-center h-full">
            <button className="text-black bg-[#E4F22F] font-kallistoMedium px-14 py-2 rounded-full border border-black hover:bg-black hover:text-white">
              Join Our <br /> Movement
            </button>
          </div>
          <div className="w-[30%]"></div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-1/2 flex flex-col justify-center items-center py-20 px-20">
        <div>
          <div className="flex justify-center">
            <Image src={Earth} alt={"Earth"} width={400} height={400} />
          </div>

          {/* circle text */}
          <div
            className="flex justify-center text-center"
            style={{
              backgroundImage: "url('/brand/OvalLine.svg')",
              backgroundSize: "cover",
            }}
          >
            <p className="font-aeonikRegular text-white tex-[1.1rem] mt-20">
              We’re looking for the best designers, engineers, and free-thinkers
              to help define the future of The Internet and help bring our
              vision of XR to reality. If this is you, please consider joining
              our movement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
