export const formatTemp = (v: number) => {
  let grade: number = Number(v) - 273.15;
  grade = Number(grade.toFixed(0));
  return `${grade} °C`;
};
