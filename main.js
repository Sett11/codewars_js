function getSlope(p1, p2) {
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    if (x1 === x2) {
      return null;
    }
    return (y2 - y1) / (x2 - x1);
  }