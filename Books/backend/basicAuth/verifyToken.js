const jwt = require("jsonwebtoken");
const db = require("../models");

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

async function verifyToken(req, res, next) {
    const authorization = req.headers.authorization;

    if (!authorization || !authorization.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Token no proporcionado." });
    }

    const token = authorization.split(" ")[1];

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = await db.users.findByPk(decoded.id);

        if (!req.user) {
            return res.status(401).json({ message: "Usuario no encontrado." });
        }

        next();
    } catch (error) {
        console.error(error);
        return res.status(403).json({ message: "Token inválido o expirado." });
    }
}

module.exports = verifyToken;
