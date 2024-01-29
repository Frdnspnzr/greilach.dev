import {
  UtopiaSize,
  calculateClamp,
  calculateSpaceScale,
  calculateTypeScale,
} from "utopia-core";

const minWidth = 500;
const maxWidth = 1200;

export const typeScale = calculateTypeScale({
  minWidth,
  maxWidth,
  minFontSize: 18,
  maxFontSize: 20,
  minTypeScale: 1.2,
  maxTypeScale: 1.25,
});

export const spaceScale = calculateSpaceScale({
  minWidth,
  maxWidth,
  minSize: 12,
  maxSize: 16,
});

export const sizeScale: UtopiaSize[] = [];

function getSize(
  label: string,
  minWidth: number,
  maxWidth: number,
  minSize: number,
  maxSize: number
) {
  const parameters = { minWidth, maxWidth, minSize, maxSize };
  return {
    label,
    minSize,
    maxSize,
    clamp: calculateClamp(parameters),
    clampPx: calculateClamp({ ...parameters, usePx: true }),
  };
}

sizeScale.push(getSize("s", minWidth, maxWidth, 88, 110));
sizeScale.push(getSize("m", minWidth, maxWidth, 120, 150));
