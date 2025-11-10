function maxWeddingCost(C, r, S, T, W) {
    const rDecimal = r / 100;
    const monthsBefore = W * 12;
    const monthsAfter = (T - W) * 12;
    
    function futureValueAnnuity(C, r, n) {
        const factor = Math.pow(1 + r, n);
        return C * (factor - 1) / r;
    }
    
    const FV_before = futureValueAnnuity(C, rDecimal, monthsBefore);
    const FV_after = futureValueAnnuity(C, rDecimal, monthsAfter);
    const factorAfter = Math.pow(1 + rDecimal, monthsAfter);
    
    if (FV_after >= S) {
        return FV_before;
    } else {
        return FV_before - (S - FV_after) / factorAfter;
    }
}