const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

router.post("/users", (req, res) => {
    const newUser = req.body;
    if (newUser) {
        req.users.push(newUser);
        res.status(201).json({
            message: "User added successfully",
            user: newUser,
        });
    } else {
        res.status(400).json({
            error: { message: "Invalid user data", status: 400 },
        });
    }
});

module.exports = router;
