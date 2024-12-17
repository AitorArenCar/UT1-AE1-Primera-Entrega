const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
const router = express.Router();

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

router.post("/register", async (req, res) => {
    const { username, password, email } = req.body;

    try {
        const existingUser = await db.users.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: "El nombre de usuario ya está en uso." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await db.users.create({
            username,
            password: hashedPassword,
            email,
        });

        res.status(201).json({
            message: "Usuario registrado con éxito.",
            user: {
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error interno del servidor." });
    }
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await db.users.findOne({ where: { username } });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Credenciales inválidas." });
        }

        const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "1h" });

        res.json({ message: "Inicio de sesión exitoso.", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error interno del servidor." });
    }
});

module.exports = router;
