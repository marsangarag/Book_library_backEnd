const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  isbn: {
    type: Number,
    required: true,
  },
  published_date: {
    type: Date,
    required: true,
  },
});

const Book = mongoose.model("Books", BookSchema);

module.exports = Book;
