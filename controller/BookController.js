const express = require("express");
const Book = require("../models/Book");
const { validationResult } = require("express-validator");

get_books = (req, res, next) => {
  Book.find()
    .then((data) => res.status(200).json({ success: true, message: data }))
    .catch((err) => res.status(400).json({ success: false, message: err }));
};
create_books = (req, res, next) => {
  const data = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ success: false, message: errors });
  }
  Book.create(data)
    .then((data) => {
      res.status(200).json({ success: true, message: data });
    })
    .catch((err) => {
      res.status(400).json({ success: false, message: err });
    });
};
update_books = (req, res, next) => {
  const data = req.body;
  const id = data.id;
  Book.updateMany({ _id: id }, data, { new: true })
    .then((data) => {
      res.status(200).json({ success: true, message: data });
    })
    .catch((err) => {
      res.status(400).json({ success: false, message: err });
    });
};
delete_books = (req, res, next) => {
  const data = req.body;
  const id = data.id;
  Book.deleteMany({ _id: id })
    .then((data) => {
      res.status(200).json({ success: true, message: data });
    })
    .catch((err) => {
      res.status(400).json({ success: false, message: err });
    });
};

module.exports = { get_books, create_books, update_books, delete_books };