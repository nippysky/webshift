import React from "react";

export default function FirstLayer() {
  return (
    <div className="w-full flex border-y border-white">
      {/* div 1 */}
      <div className="w-[16.666%] border-r border-white h-[200px] overflow-hidden relative">
        <img
          src="/brand/Diamond.svg"
          alt={"diamond"}
          className=" w-[100%] h-[100%] object-cover"
        />
      </div>

      {/* div2 */}
      <div className="w-[16.666%] border-r border-white h-[200px]"></div>

      {/* div3 */}
      <div className="w-[16.666%] border-r border-white h-[200px]"></div>

      {/* div4 */}
      <div className="w-[16.666%] border-r border-white h-[200px]"></div>

      {/* div5 */}
      <div className="w-[16.666%] border-r border-white h-[200px]">
        <img
          src="/brand/vBG.svg"
          alt={"diamond"}
          className=" w-[100%] h-[100%] object-cover"
        />
      </div>

      {/* div6 */}
      <div className="w-[16.666%]  h-[200px]"></div>
    </div>
  );
}
