const express = require("express");
const analyzerRoutes = require("./routes/analyzerRoutes");
const errorHandler = require("./middlewares/errorHandler");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/api/analyzer", analyzerRoutes);

app.use(errorHandler);

module.exports = app;
