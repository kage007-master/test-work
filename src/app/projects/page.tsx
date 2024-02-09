import React from "react";
import AnimationImage from "@/components/AnimationImage";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-10">
      <AnimationImage src={"/assets/images/banner1.png"} alt="banner1" />
      <AnimationImage src={"/assets/images/banner2.png"} alt="banner2" />
      <AnimationImage src={"/assets/images/banner3.png"} alt="banner2" />
      <AnimationImage src={"/assets/images/banner4.png"} alt="banner2" />
      <AnimationImage src={"/assets/images/banner5.png"} alt="banner2" />
    </div>
  );
}
