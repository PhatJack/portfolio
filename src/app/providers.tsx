"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import React from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const GSAPProviders = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2, // The higher the value, the smoother the scroll
      effects: true,
    });
  });
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default GSAPProviders;
