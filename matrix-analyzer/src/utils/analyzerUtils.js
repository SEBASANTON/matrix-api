exports.getMatrixDeterminant = (matrix) => {
    if (matrix.length !== matrix[0].length) {
        throw new Error("Matrix must be square to compute determinant");
    }

    if (matrix.length === 2) {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }

    return matrix[0].reduce((acc, num, colIndex) => {
        const subMatrix = matrix.slice(1).map(row => row.filter((_, i) => i !== colIndex));
        return acc + num * ((colIndex % 2 === 0 ? 1 : -1) * exports.getMatrixDeterminant(subMatrix));
    }, 0);
};
