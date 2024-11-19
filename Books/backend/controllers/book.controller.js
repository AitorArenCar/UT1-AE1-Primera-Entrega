const db = require("../models");
const Book = db.books;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.title){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    
    const book = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description
    };

    Book.create(book)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the book."
            });
    });
};

exports.findAll = (req, res) => {
    Book.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving books."
            })
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Book.findByPk(id)
        .then(data => {
            if (data){
                res.send(data);
            }else{
                res.status(404).send({
                    message: `Cannot fint book with id=${id}.`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Error retrieving book with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Book.update({
        where: {id: id}
    })
        .then(num => {
            if (num == 1){
                res.send({
                    message: "Book was updated succesfully!"
                });
            }else{
                res.send({
                    message: `Cannot update book with id=${id}.`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Cannot update book with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Book.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num == 1){
                res.send({
                    message: "Book was deleted succesfully!"
                });
            }else{
                res.send({
                    message: `Cannot delete book with id=${id}.`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Cannot delete book with id=" + id
            });
        });
};