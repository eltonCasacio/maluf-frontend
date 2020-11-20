export const alertMinMax = (min, max, value, tolerancia) => {
  if (value <= max - tolerancia && value >= min + tolerancia) return "success";

  if (
    (value < max && value > max - tolerancia) ||
    (value > min && value < min + tolerancia)
  )
    return "warning";

  if (value >= max || value <= min) return "danger";
};
