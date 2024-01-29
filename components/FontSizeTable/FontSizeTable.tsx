"use client";

import { typeScale } from "@/app/theme/scale";
import { getFraction } from "@/lib/scale";
import { useWindowSize } from "@uidotdev/usehooks";

export function FontSizeTable() {
  const { width: viewportWidth } = useWindowSize();
  return (
    <table>
      <thead>
        <tr>
          <th>Size step</th>
          <th>Min size (@500px)</th>
          <th>Max size (@1200px)</th>
          <th>Current size (@{viewportWidth}px)</th>
        </tr>
      </thead>
      <tbody>
        {[-2, -1, 0, 1, 2, 3, 4, 5].map((step) => (
          <Row step={step} key={step} />
        ))}
      </tbody>
    </table>
  );
}

function Row({ step }: { step: number }) {
  const { width: viewportWidth } = useWindowSize();

  const scale = typeScale.find((s) => s.step == step);
  const fraction = getFraction(500, 1200, viewportWidth || 1200);

  const minFontSize = scale?.minFontSize || 0;
  const maxFontSize = scale?.maxFontSize || 0;
  const currentFontSize = (maxFontSize - minFontSize) * fraction + minFontSize;

  return (
    <>
      <tr>
        <td rowSpan={2}>{step}</td>
        <td>{round(minFontSize)}px</td>
        <td>{round(currentFontSize)}px</td>
        <td>{round(maxFontSize)}px</td>
      </tr>
      <tr>
        <td style={{ fontSize: minFontSize }}>Example</td>
        <td style={{ fontSize: currentFontSize }}>Example</td>
        <td style={{ fontSize: maxFontSize }}>Example</td>
      </tr>
    </>
  );
}

function round(input: number) {
  return Math.round(input * 10) / 10;
}
