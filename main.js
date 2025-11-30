function redKnight(N, P) {
    const color = (N + P) % 2 === 0 ? "White" : "Black";
    return [color, 2 * P];
  }