function perc(minutes) {
    if (typeof minutes !== 'number' || minutes < 1 || minutes > 100) return "invalid track time";
    const bpm = 120;
    const beatsPerBar = 4;
    const barsPerMinute = bpm / beatsPerBar;
    const totalBars = minutes * barsPerMinute;
    const kicks = Math.round(totalBars * 4);
    const hihats = Math.round(totalBars * 8);
    const claps = Math.round(totalBars * 2);
    return [`${kicks} kicks`, `${hihats} hihats`, `${claps} claps`];
}

console.log(perc(3))