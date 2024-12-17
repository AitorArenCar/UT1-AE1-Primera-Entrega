const express = require("express");
const basicAuth = require("../basicAuth/basicAuth");
const router = express.Router();

router.get("/protected", basicAuth, (req, res) => {
    res.json({ message: "¡Autenticación básica exitosa!", user: req.user });
});

module.exports = router;
