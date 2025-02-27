const { validationResult, body } = require("express-validator");

exports.validateMatrix = [
    body("matrix")
        .isArray({ min: 1 })
        .withMessage("Matrix must be a non-empty array")
        .custom((matrix) => {
            if (!matrix.every(row => Array.isArray(row))) {
                throw new Error("Matrix must be a 2D array");
            }
            const rowCount = matrix.length;
            if (!matrix.every(row => row.length === rowCount)) {
                throw new Error("Matrix must be NxN (square)");
            }
            return true;
        }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
