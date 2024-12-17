module.exports = app => {
    const books = require("../controllers/book.controller.js");
    var upload = require('../multer/upload');

    var router = require("express").Router();

    router.post("/", upload.single('file'), books.create);

    router.get("/", books.findAll);

    router.get("/:id", books.findOne);

    router.put("/:id", books.update);

    router.delete("/:id", books.delete);

    app.use("/api/books", router);
}