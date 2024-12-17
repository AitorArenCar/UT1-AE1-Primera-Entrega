const express = require("express");
const cors = require("cors");

var path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

var corsOptions = {
    origin: "http://localhost:8100"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

const db = require("./models");

db.sequelize.sync({ fore: true }).then(() => {
    console.log("Drop and re-sync db.")
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to books application." });
});

const basicAuthRoutes = require("./routes/basicAuthRoutes");
app.use("/api/basic-auth", basicAuthRoutes);

const tokenRoutes = require("./routes/tokenRoutes");
app.use("/api/token-auth", tokenRoutes);

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

require("./routes/book.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
