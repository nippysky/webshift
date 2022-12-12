import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "../public/brand/WebshiftLogo.svg";
import TextSlider from "./TextSlider";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="w-full lg:h-screen pt-10 flex flex-col justify-between"
      style={{ backgroundImage: "url('/brand/HompageCover.png')" }}
    >
      {/* Logo */}
      <div className="flex lg:justify-start justify-center lg:px-20 px-5 ">
        <Link href={"/"}>
          <Image src={Logo} width={250} height={50} priority alt={"Logo"} />
        </Link>
      </div>

      {/* Hero Details */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="flex flex-col justify-start md:w-[45%] w-full lg:px-20 px-5 my-10"
      >
        <h1 className=" font-kallistoHeavy text-[2.2rem] lg:text-[3.5rem] text-white text-center md:text-left">
          The easiest <br className="hidden lg:block" /> way to build XR
          websites.
        </h1>

        <p className="font-aeonikRegular text-white tex-[1.1rem] my-7  text-center md:text-left">
          Webshift empowers designers and developers to build immersive AR/VR
          websites in a completely visual canvas <br /> - no coding needed.
        </p>
      </motion.div>

      {/* Text Slider */}
      <section className=" overflow-hidden relative">
        <TextSlider />
      </section>
    </section>
  );
}
