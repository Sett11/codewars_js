function evaporator(content, evapPerDay, threshold) {
    let days = 0;
    let currentContent = 100;
    const thresholdPercent = threshold;
    
    while (currentContent > thresholdPercent) {
        currentContent -= currentContent * (evapPerDay / 100);
        days++;
    }
    
    return days;
}