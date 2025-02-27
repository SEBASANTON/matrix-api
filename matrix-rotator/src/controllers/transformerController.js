const { validationResult } = require("express-validator");
const { rotateMatrix } = require("../services/transformerService");

exports.rotateMatrixController = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { matrix } = req.body;
        const authToken = req.headers.authorization;

        if (!authToken) {
            return res.status(401).json({ error: "Unauthorized: Missing token" });
        }

        const result = await rotateMatrix(matrix, authToken);
        res.json(result);
    } catch (error) {
        next(error);
    }
};
