const { generateToken } = require("../utils/authUtils");

exports.authenticateUser = (username, password) => {
    if (username === "admin" && password === "interseguro2025") {
        return generateToken({ id: 1, username });
    }
    return null;
};
