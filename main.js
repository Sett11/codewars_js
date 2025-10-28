const array10 = () => {
  const result = Array(10).fill().map(() => Array(10));
  const letters = ['A','B','C','D'];
  for (let i = 0; i < 10; i++) {
    const positions = [...Array(10).keys()].sort(() => Math.random() - 0.5).slice(0,4);
    letters.forEach((letter, idx) => result[i][positions[idx]] = letter);
    for (let j = 0; j < 10; j++) {
      if (!result[i][j]) result[i][j] = letters[Math.floor(Math.random() * 4)];
    }
  }
  return result
}