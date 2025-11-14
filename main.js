function minimumPercentage(foods) {
  const sum = foods.reduce((a, b) => a + b, 0);
  const minAll = sum - 100 * (foods.length - 1);
  return Math.max(0, minAll);
}