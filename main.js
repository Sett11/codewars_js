function unluckyDays(year){
    let blackFridays = 0;
    
    for (let month = 0; month < 12; month++) {
      const thirteenth = new Date(year, month, 13);
      if (thirteenth.getDay() === 5) {
        blackFridays++;
      }
    }
    
    return blackFridays;
  }