import Link from "next/link";
import Image from "next/image";
import React from "react";
import Logo from "../public/brand/WebshiftLogo.svg";

export default function Footer() {
  return (
    <section className="w-full bg-[#1A1A1A] lg:px-20 px-5 pt-10 pb-5">
      <div className="flex flex-col lg:flex-row w-full justify-between items-center">
        {/* Logo */}
        <div className="flex justify-start my-10 lg:m-0">
          <Link href={"/"}>
            <Image src={Logo} width={250} height={50} priority alt={"Logo"} />
          </Link>
        </div>

        {/* Form */}
        <form className="flex" onSubmit={(e) => e.preventDefault()}>
          <div className="flex border-y border-l border-white rounded-full bg-transparent overflow-hidden">
            <input
              placeholder="Enter Here"
              className="bg-transparent px-10 py-2 text-white font-aeonikRegular"
            />

            <button className="border border-white rounded-full px-5 py-2 text-white font-kallistoMedium">
              Join Our <br /> Movement
            </button>
          </div>
        </form>
      </div>

      {/* Fotter Copyright section */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-center mt-20">
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-start items-center">
          <p className=" font-aeonikBold text-[#ACACAC] texxt-[0.85rem]">
            Copyright 2022 Webshift. All Rights Reserved
          </p>
        </div>

        <div className="lg:w-1/2 w-full flex-col lg:flex lg:flex-row text-center gap-10 lg:justify-end justify-center items-center mt-10 lg:mt-0">
          <div className="mb-10 lg:mb-0">
            <Link href={"/"}>
              <p className=" font-aeonikRegular text-[#ACACAC] texxt-[0.75rem]">
                Terms of Service
              </p>
            </Link>
          </div>

          <div className="mb-10 lg:mb-0">
            <Link href={"/"}>
              <p className=" font-aeonikRegular text-[#ACACAC] texxt-[0.75rem]">
                Privacy Policy
              </p>
            </Link>
          </div>

          <div className="mb-10 lg:mb-0">
            <Link href={"/"}>
              <p className=" font-aeonikRegular text-[#ACACAC] texxt-[0.75rem]">
                Cookie Policy
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
