"use client";

import HeroBarranca from "./HeroBarranca";
import AboutApp from "./AboutApp";
import AppModules from "./AppModules";
import AppBenefits from "./AppBenefits";
import AppCTA from "./AppCTA";

export default function ItwanaInfo() {
  return (
    <div className="flex flex-col">
      <HeroBarranca />
      <AboutApp />
      <AppModules />
      <AppBenefits />
      <AppCTA />
    </div>
  );
}