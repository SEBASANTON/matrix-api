const { body } = require("express-validator");

exports.validateMatrixInput = [
  body("matrix")
    .isArray({ min: 1 })
    .withMessage("Matrix must be a non-empty array"),
  body("matrix.*")
    .isArray({ min: 1 })
    .withMessage("Each row of the matrix must be an array"),
  body("matrix")
    .custom((matrix) => {
      const rowCount = matrix.length;
      return matrix.every((row) => row.length === rowCount);
    })
    .withMessage("Matrix must be NxN (square)"),
];
