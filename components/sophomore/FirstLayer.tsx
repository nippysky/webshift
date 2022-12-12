import React from "react";
import { motion } from "framer-motion";

export default function FirstLayer() {
  return (
    <div className="w-full flex border-y border-white">
      {/* div 1 */}
      <div className="lg:w-[16.666%] w-1/2 border-r border-white h-[200px] overflow-hidden relative">
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          src="/brand/Diamond.svg"
          alt={"diamond"}
          className=" w-[100%] h-[100%] object-cover"
        />
      </div>

      {/* div2 */}
      <div className="lg:w-[16.666%] w-0 border-r border-white h-[200px] hidden lg:block"></div>

      {/* div3 */}
      <div className="lg:w-[16.666%] w-0 border-r border-white h-[200px] hidden lg:block"></div>

      {/* div4 */}
      <div className="lg:w-[16.666%] w-0 border-r border-white h-[200px] hidden lg:block"></div>

      {/* div5 */}
      <div className="lg:w-[16.666%] w-1/2 border-r border-white h-[200px]">
        <motion.img
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          src="/brand/vBG.svg"
          alt={"diamond"}
          className=" w-[100%] h-[100%] object-cover"
        />
      </div>

      {/* div6 */}
      <div className="lg:w-[16.666%] w-0  h-[200px] hidden lg:block"></div>
    </div>
  );
}
