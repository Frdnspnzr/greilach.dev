"use client";

import { useMediaQuery } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import styles from "./FrontPageWaves.module.css";

export default function FrontPageWaves() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 100"
      className={styles.svg}
    >
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <Wave base={(100 / 8) * i} key={i} />
      ))}
    </svg>
  );
}

const SPEED = 0.05;

function Wave({ base }: { base: number }) {
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [y, setY] = useState([
    (Math.random() - 0.5) * 2,
    (Math.random() - 0.5) * 2,
    (Math.random() - 0.5) * 2,
    (Math.random() - 0.5) * 2,
    (Math.random() - 0.5) * 2,
    (Math.random() - 0.5) * 2,
    (Math.random() - 0.5) * 2,
    (Math.random() - 0.5) * 2,
    (Math.random() - 0.5) * 2,
    (Math.random() - 0.5) * 2,
  ]);
  useEffect(() => {
    if (!reduceMotion) {
      const interval = setInterval(() => {
        // setX((x) => x + SPEED);
        // if (x > 100) {
        //   const w = Math.random() * 20 + 15;
        //   setY(5 + Math.random() * 90);
        //   setWidth(w);
        //   setX(0 - w - Math.random() * 5);
        // }
      }, 16);
      return () => clearInterval(interval);
    }
  });
  // const end = x + width;
  return (
    <>
      {y.map((y, i) => (
        <path
          d={`M ${0} ${base} L ${200} ${base}`}
          className={styles.path}
          key={i}
        />
      ))}
    </>
  );
}
