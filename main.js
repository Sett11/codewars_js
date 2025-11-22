var sing = function () {
  let lyrics = [];
  for (let i = 99; i > 0; i--) {
    let bottle = i === 1 ? "bottle" : "bottles";
    let nextBottle = i - 1 === 1 ? "bottle" : "bottles";
    let nextCount = i - 1 === 0 ? "no more" : i - 1;
    
    lyrics.push(`${i} ${bottle} of beer on the wall, ${i} ${bottle} of beer.`);
    lyrics.push(`Take one down and pass it around, ${nextCount} ${nextBottle} of beer on the wall.`);
  }
  
  lyrics.push("No more bottles of beer on the wall, no more bottles of beer.");
  lyrics.push("Go to the store and buy some more, 99 bottles of beer on the wall.");
  
  return lyrics;
};