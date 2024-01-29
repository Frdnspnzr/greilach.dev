export function getFraction(min: number, max: number, current: number) {
  if (current <= min) {
    return 0;
  } else if (current >= max) {
    return 1;
  } else {
    return (current - min) / (max - min);
  }
}
