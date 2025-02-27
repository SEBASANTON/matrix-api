const jwt = require("jsonwebtoken");

exports.generateToken = (user) => jwt.sign(
  { userId: user.id },
  process.env.JWT_SECRET,
  { expiresIn: "1h" }
);
