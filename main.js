function canEscape(walls) {
  for (let i = 0; i < walls.length; i++) {
    if (Math.min(walls[i][0], walls[i][1]) <= i + 1) {
      return false;
    }
  }
  return true;
}