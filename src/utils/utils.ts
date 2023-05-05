export const updateColor = (
  currentRedValue: number,
  deltaTime: number
): number => {
  let newRedValue = currentRedValue + deltaTime;
  return Math.min(Math.max(newRedValue, 0), 255);
};
