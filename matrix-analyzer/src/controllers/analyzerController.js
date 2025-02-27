const analyzerService = require("../services/analyzerService");

exports.analyzeMatrix = (req, res, next) => {
    try {
        const { matrix } = req.body;
        const result = analyzerService.analyzeMatrix(matrix);
        res.json(result);
    } catch (error) {
        next(error);
    }
};
