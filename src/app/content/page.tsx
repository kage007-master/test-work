import React from "react";
import AnimationImage from "@/components/AnimationImage";

export default function Content() {
  return (
    <div className="grid grid-cols-1 gap-10">
      <AnimationImage src={"/assets/images/about1.png"} alt="banner1" />
      <AnimationImage src={"/assets/images/about2.png"} alt="banner2" />
      <AnimationImage src={"/assets/images/about3.png"} alt="banner2" />
      <AnimationImage src={"/assets/images/about4.png"} alt="banner2" />
    </div>
  );
}
