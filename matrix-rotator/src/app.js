const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const transformerRoutes = require("./routes/transformerRoutes");
const authRoutes = require("./routes/authRoutes");
const errorHandler = require("./middlewares/errorHandler");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/transform", transformerRoutes);
app.use("/api/auth", authRoutes);
app.use(errorHandler);

module.exports = app;