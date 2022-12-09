import React from "react";
import BottomLayer from "./mission/BottomLayer";
import TopLayer from "./mission/TopLayer";

export default function Mission() {
  return (
    <section
      className="w-full"
      style={{ backgroundImage: "url('/brand/SophomoreBG2.svg')" }}
    >
      <TopLayer />
      <BottomLayer />
    </section>
  );
}
