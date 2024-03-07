const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
    res.json({ users: req.users });
});

module.exports = router;
