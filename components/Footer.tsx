import Link from "next/link";
import Image from "next/image";
import React from "react";
import Logo from "../public/brand/WebshiftLogo.svg";

export default function Footer() {
  return (
    <section className="w-full bg-[#1A1A1A] px-20 pt-10 pb-5">
      <div className="flex w-full justify-between items-center">
        {/* Logo */}
        <div className="flex justify-start">
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
      <div className="w-full flex justify-between items-center mt-20">
        <div className="w-1/2 flex justify- items-center">
          <p className=" font-aeonikBold text-[#ACACAC] texxt-[0.85rem]">
            Copyright 2022 Webshift. All Rights Reserved
          </p>
        </div>

        <div className="w-1/2 flex gap-10 justify-end items-center">
          <div>
            <Link href={"/"}>
              <p className=" font-aeonikRegular text-[#ACACAC] texxt-[0.75rem]">
                Terms of Service
              </p>
            </Link>
          </div>

          <div>
            <Link href={"/"}>
              <p className=" font-aeonikRegular text-[#ACACAC] texxt-[0.75rem]">
                Privacy Policy
              </p>
            </Link>
          </div>

          <div>
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
