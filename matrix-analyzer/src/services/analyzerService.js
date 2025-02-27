exports.analyzeMatrix = (matrix) => {
    const flattened = matrix.flat();
    const sum = flattened.reduce((acc, num) => acc + num, 0);
    const average = sum / flattened.length;
    const min = Math.min(...flattened);
    const max = Math.max(...flattened);

    return { sum, average, min, max };
};
