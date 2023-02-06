export function validProgress(percent: number | undefined) {
  if (!percent || percent < 0) {
    return 0;
  }
  if (percent > 100) {
    return 100;
  }
  return percent;
}
