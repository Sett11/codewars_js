function getCurrentHand(arr) {
  const allCards = [...new Set(arr)];
  const lastPlayed = arr.slice(-4);
  const hand = allCards.filter(card => !lastPlayed.includes(card));
  return hand;
}