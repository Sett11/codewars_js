function words(base_n, max) {
    let digitWords = base_n;
    
    if (max < base_n) {
      return digitWords;
    }
    
    let power = 1;
    let count = 0;
    
    while (power <= max) {
      count++;
      power *= base_n;
    }
    
    let placeValueWords = count - 1;
    
    return digitWords + placeValueWords;
  }