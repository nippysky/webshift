import React from "react";

export default function TopLayer() {
  return (
    <div className="w-full flex border-y border-white">
      {/* div1 */}
      <div className="w-1/2 lg:w-[16.666%] border-r border-white h-[200px] py-4 px-4">
        <img
          src="/brand/SpiralDota.svg"
          alt={"Spiral Dots"}
          className=" w-[100%] h-[100%]"
        />
      </div>

      {/* div2 */}
      <div className="lg:w-[16.666%] w-0 border-r border-white h-[200px]  hidden lg:flex"></div>

      {/* div3 */}
      <div className="lg:w-[16.666%] w-0 border-r border-white h-[200px] py-10 px-10  hidden lg:flex">
        <img
          src="/brand/ArrowDown.svg"
          alt={"Arrow Down"}
          className=" w-[100%] h-[100%] animate-bounce"
        />
      </div>

      {/* div4 */}
      <div className="lg:w-[33.332%] w-0 border-r border-white h-[200px] hidden lg:flex"></div>

      {/* div5 */}
      <div className="w-1/2 lg:w-[16.666%] h-[200px]">
        <img
          src="/brand/FlatDiamond.svg"
          alt={"Flat Diamond"}
          className=" w-[100%] h-[100%] object-cover"
        />
      </div>
    </div>
  );
}
