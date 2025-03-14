module.exports = (err, req, res, next) => {
    console.error(err);

    if (err.name === "ValidationError") {
        return res.status(400).json({ error: err.message });
    }

    res.status(500).json({ error: "Internal Server Error" });
};