"use client";

import Fancy from "@/components/Typography/Fancy/Fancy";
import { ReactTyped } from "react-typed";

export default function FrontPageTyped() {
  return (
    <>
      I'm a{" "}
      <Fancy>
        <ReactTyped
          strings={[
            "full stack web application developer",
            "father",
            "developer that actually tries to learn CSS",
            "gamer",
            "bento box layout enthusiast",
          ]}
          typeSpeed={70}
          backSpeed={60}
          startDelay={1500}
          loop
        />
      </Fancy>
    </>
  );
}
