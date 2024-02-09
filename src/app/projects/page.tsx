import React from "react";
import AnimationImage from "@/components/AnimationImage";

import Banner1Image from "@/assets/images/banner1.png";
import Banner2Image from "@/assets/images/banner2.png";
import Banner3Image from "@/assets/images/banner3.png";
import Banner4Image from "@/assets/images/banner4.png";
import Banner5Image from "@/assets/images/banner5.png";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-10">
      <AnimationImage src={Banner1Image} alt="banner1" />
      <AnimationImage src={Banner2Image} alt="banner2" />
      <AnimationImage src={Banner3Image} alt="banner2" />
      <AnimationImage src={Banner4Image} alt="banner2" />
      <AnimationImage src={Banner5Image} alt="banner2" />
    </div>
  );
}
