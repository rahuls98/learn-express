const express = require("express");
const router = express.Router();

router.get("/usernames", (req, res) => {
    let usernames = req.users.map(function (user) {
        return { id: user.id, username: user.username };
    });
    res.send(usernames);
});

router.get("/username/:name", (req, res) => {
    let name = req.params.name;
    let usernames = req.users.map(function (user) {
        return { id: user.id, username: user.username, email: user.email };
    });
    let filterResult = usernames.filter((user) => user["username"] == name);
    res.send(filterResult);
});

module.exports = router;
