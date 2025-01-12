"use client";

import { useMediaQuery } from "@uidotdev/usehooks";
import { useEffect, useRef, useState } from "react";
import styles from "./FrontPageLines.module.css";

export default function FrontPageLines() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={styles.svg}
    >
      {Array.from({ length: 20 }).map(() => (
        <Line />
      ))}
    </svg>
  );
}

const SPEED = 0.05;
const CIRCLE_RADIUS = 0.5;

function Line() {
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [startX, setStartX] = useState(getDefaultValue());
  const [startY, setStartY] = useState(getDefaultValue());
  const [endX, setEndX] = useState(getDefaultValue());
  const [endY, setEndY] = useState(getDefaultValue());
  const startXDirection = useRef(Math.random() > 0.5 ? 1 : -1);
  const startYDirection = useRef(Math.random() > 0.5 ? 1 : -1);
  const endXDirection = useRef(Math.random() > 0.5 ? 1 : -1);
  const endYDirection = useRef(Math.random() > 0.5 ? 1 : -1);
  useEffect(() => {
    if (!reduceMotion) {
      const interval = setInterval(() => {
        setStartX((x) => x + SPEED * startXDirection.current);
        setStartY((y) => y + SPEED * startYDirection.current);
        setEndX((x) => x + SPEED * endXDirection.current);
        setEndY((y) => y + SPEED * endYDirection.current);
        if (startX > 90) startXDirection.current = -1;
        if (startX < 10) startXDirection.current = 1;
        if (startY > 90) startYDirection.current = -1;
        if (startY < 10) startYDirection.current = 1;
        if (endX > 90) endXDirection.current = -1;
        if (endX < 10) endXDirection.current = 1;
        if (endY > 90) endYDirection.current = -1;
        if (endY < 10) endYDirection.current = 1;
      }, 16);
      return () => clearInterval(interval);
    }
  });
  return (
    <>
      <path
        d={`M ${startX} ${startY} L ${endX} ${endY}`}
        className={styles.path}
      />
      <circle
        cx={startX}
        cy={startY}
        r={CIRCLE_RADIUS}
        className={styles.circle}
      />
      <circle cx={endX} cy={endY} r={CIRCLE_RADIUS} className={styles.circle} />
    </>
  );
}

function getDefaultValue() {
  return 10 + Math.random() * 80;
}
