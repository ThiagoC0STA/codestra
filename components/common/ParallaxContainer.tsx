"use client";

import React from "react";

import { jarallax } from "jarallax";
import { useEffect } from "react";

export default function ParallaxContainer(props: any) {
  useEffect(() => {
    jarallax(document.querySelectorAll(".parallax-5"), {
      speed: 0.5,
    });
  }, []);
  return (
    <div
      //   ref={parallax.ref}
      {...props}
    >
      {props.children}
    </div>
  );
}
