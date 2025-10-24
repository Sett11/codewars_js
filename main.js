function boatLoader(arr) {
  let a = arr.filter(e=>typeof e === 'string')
  let counts = a.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1
    return acc
  }, {});
  let filtered = Object.entries(counts)
    .filter(([key, value]) => value > 1)
    .map(([key]) => key);
  filtered.sort((a, b) => {
    if (a.toLowerCase() === b.toLowerCase()) {
      if (a === b) return 0;
      if (a === a.toUpperCase() && b === b.toLowerCase()) return -1;
      if (a === a.toLowerCase() && b === b.toUpperCase()) return 1;
      return a.localeCompare(b);
    }
    return a.toLowerCase().localeCompare(b.toLowerCase());
  })
  return filtered.map(e => [e, e]);
}

console.log(boatLoader(['a','d','G','V','X','F','g','h','s','r','a','g','n','s','e','r','j','a','f','D','F','G','R','H','C','X','B','N','G','U','G','F','p','s','r','g','a']))