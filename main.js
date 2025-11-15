function repSet(n) {
  let s = [];
  for (let i = 0; i < n; i++) s = [...s, s];
  return s;
}