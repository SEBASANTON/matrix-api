const axios = require("axios");

exports.rotateMatrix = async (matrix, authToken) => {
    if (!Array.isArray(matrix) || !matrix.every(row => Array.isArray(row))) {
        throw new Error("Invalid matrix format. It must be a two-dimensional array.");
    }

    const rotatedMatrix = matrix[0].map((_, index) =>
        matrix.map((row) => row[index]).reverse()
    );

    try {
        const response = await axios.post(
            process.env.ANALYZER_API_URL,
            { matrix: rotatedMatrix },
            {
                headers: {
                    Authorization: authToken,
                    "Content-Type": "application/json",
                },
            }
        );

        return {
            rotatedMatrix,
            analysis: response.data,
        };
    } catch (error) {
        console.error("Failed to connect to matrix-analyzer:", error.response?.data || error.message);
        throw new Error("Matrix analysis service is unavailable. Please try again later.");
    }
};
