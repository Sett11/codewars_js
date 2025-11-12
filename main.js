const gridPosition = (name, position) => {
  if (position === 1) {
    return `${name} starts from pole position`;
  }
  
  // Calculate row number (1-based)
  const row = Math.ceil(position / 3);
  
  // Calculate position within row (0: top, 1: middle, 2: bottom)
  const positionInRow = (position - 1) % 3;
  
  let positionText;
  switch (positionInRow) {
    case 0:
      positionText = "top";
      break;
    case 1:
      positionText = "middle";
      break;
    case 2:
      positionText = "bottom";
      break;
  }
  
  let rowText;
  if (row === 1) {
    rowText = "front row";
  } else {
    // Add ordinal suffix
    const suffixes = ["th", "st", "nd", "rd"];
    const suffix = row % 100 >= 11 && row % 100 <= 13 ? "th" : suffixes[row % 10] || "th";
    rowText = `${row}${suffix} row`;
  }
  
  return `${name} starts from the ${positionText} of the ${rowText}`;
};