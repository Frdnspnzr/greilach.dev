"use client";

import { getFraction } from "@/lib/scale";
import { useWindowSize } from "@uidotdev/usehooks";
import styles from "./SizeScale.module.css";

interface Stop {
  viewportWidth: number;
  size: number;
}

interface SizeScaleProps {
  start: Stop;
  end: Stop;
  variable: string;
}

function getCurrentSize(start: Stop, end: Stop, viewportWidth: number) {
  const fraction = getFraction(
    start.viewportWidth,
    end.viewportWidth,
    viewportWidth
  );
  return Math.round((end.size - start.size) * fraction + start.size);
}

export default function SizeScale({
  start,
  end,
  variable,
}: Readonly<SizeScaleProps>) {
  const { width: currentViewportWidth } = useWindowSize();
  const currentSize = getCurrentSize(start, end, currentViewportWidth || 0);
  return (
    <div
      className={styles.container}
      style={{ "--size": `${end.size}px` } as any}
    >
      <div className={styles.heading} />
      <div className={styles.heading}>Minimum</div>
      <div className={styles.heading}>Current</div>
      <div className={styles.heading}>Maximum</div>

      <div className={styles.heading}>Size</div>
      <div>{start.size}px</div>
      <div>{currentSize}px</div>
      <div>{end.size}px</div>

      <div className={styles.heading}>Viewport width</div>
      <div>{start.viewportWidth}px</div>
      <div>{currentViewportWidth}px</div>
      <div>{end.viewportWidth}px</div>

      <div className={styles.heading} />
      <div
        className={styles.box}
        style={{
          width: start.size,
          height: start.size,
        }}
      />
      <div
        className={styles.box}
        style={{
          width: `var(${variable})`,
          height: `var(${variable})`,
        }}
      />
      <div
        className={styles.box}
        style={{
          width: end.size,
          height: end.size,
        }}
      />
    </div>
  );
}
