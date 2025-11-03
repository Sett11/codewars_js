function matrixDiagonal(matrix, value) {
    const n = matrix.length;
    let sum = 0;
    
    if (value === 0) {
        for (let i = 0; i < n; i++) {
            sum += matrix[i][i];
        }
    } else if (value > 0) {
        for (let i = value; i < n; i++) {
            sum += matrix[i][i - value];
        }
    } else {
        const absValue = Math.abs(value);
        for (let i = 0; i < n - absValue; i++) {
            sum += matrix[i][i + absValue];
        }
    }
    
    return sum;
}