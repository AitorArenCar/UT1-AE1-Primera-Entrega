const express = require("express");
const verifyToken = require("../basicAuth/verifyToken");
const router = express.Router();

router.get("/protected", verifyToken, (req, res) => {
    res.json({ message: "¡Autenticación con token exitosa!", user: req.user });
});

module.exports = router;
