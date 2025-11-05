function prismProperties(s) {
    if ((s - 2) % 6 !== 0) {
        throw new Error("No valid prism exists for the given sum");
    }
    const B = (s - 2) / 6;
    if (B < 3) {
        throw new Error("Base sides must be at least 3");
    }
    const V = 2 * B;
    const E = 3 * B;
    const F = B + 2;
    return [V, E, F, B];
}