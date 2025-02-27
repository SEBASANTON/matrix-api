const { authenticateUser } = require("../services/authService");

exports.login = (req, res) => {
    const { username, password } = req.body;
    const token = authenticateUser(username, password);

    if (!token) {
        return res.status(401).json({ error: "Invalid credentials" });
    }

    return res.json({ token });
};
