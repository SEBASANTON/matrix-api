const express = require("express");
const { analyzeMatrix } = require("../controllers/analyzerController");
const { validateMatrix } = require("../validations/analyzerValidation");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, validateMatrix, analyzeMatrix);

module.exports = router;
