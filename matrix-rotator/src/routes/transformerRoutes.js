const express = require("express");
const { validateMatrixInput } = require("../validations/transformerValidation");
const { rotateMatrixController } = require("../controllers/transformerController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, validateMatrixInput, rotateMatrixController);

module.exports = router;