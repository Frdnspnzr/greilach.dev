"use client";

import { useMediaQuery } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import styles from "./FrontPageLanes.module.css";

export default function FrontPageLanes() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={styles.svg}
    >
      {Array.from({ length: 30 }).map((_, i) => (
        <Lane key={i} />
      ))}
    </svg>
  );
}

const SPEED = 0.1;
const CIRCLE_RADIUS = 0.5;

function Lane() {
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [x, setX] = useState(Math.random() * 100 - 20);
  const [y, setY] = useState(5 + Math.random() * 90);
  const [width, setWidth] = useState(Math.random() * 20 + 15);
  useEffect(() => {
    if (!reduceMotion) {
      const interval = setInterval(() => {
        setX((x) => x + SPEED);
        if (x > 100) {
          const w = Math.random() * 20 + 15;
          setY(5 + Math.random() * 90);
          setWidth(w);
          setX(0 - w - Math.random() * 5);
        }
      }, 16);
      return () => clearInterval(interval);
    }
  });
  const end = x + width;
  return (
    <>
      <path d={`M ${x} ${y} L ${end} ${y}`} className={styles.path} />
      <circle cx={x} cy={y} r={CIRCLE_RADIUS} className={styles.circle} />
      <circle cx={end} cy={y} r={CIRCLE_RADIUS} className={styles.circle} />
    </>
  );
}
