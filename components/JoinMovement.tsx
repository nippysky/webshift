import React from "react";
import FirstLayer from "./sophomore/FirstLayer";
import SecondLayer from "./sophomore/SecondLayer";

export default function JoinMovement() {
  return (
    <section
      className="w-full min-h-screen"
      style={{ backgroundImage: "url('/brand/SophomoreBG.svg')" }}
    >
      <FirstLayer />
      <SecondLayer />
    </section>
  );
}
