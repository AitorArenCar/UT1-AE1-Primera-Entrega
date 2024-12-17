const bcrypt = require("bcrypt");
const db = require("../models");

async function basicAuth(req, res, next) {
    const authorization = req.headers.authorization;

    if (!authorization || !authorization.startsWith("Basic ")) {
        return res.status(401).json({ message: "Credenciales no proporcionadas." });
    }

    // Extraer credenciales del encabezado
    const base64Credentials = authorization.split(" ")[1];
    const credentials = Buffer.from(base64Credentials, "base64").toString("ascii");
    const [username, password] = credentials.split(":");

    try {
        const user = await db.users.findOne({ where: { username } });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Credenciales inválidas." });
        }

        req.user = user; // Usuario autenticado
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor." });
    }
}

module.exports = basicAuth;
