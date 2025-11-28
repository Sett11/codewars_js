function findMysteryEquation(func) {
  const b = func(0);
  const m = func(1) - b;
  return [m, b];
}