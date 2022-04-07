const express = require("express");
const router = express.Router();
const BookController = require("../controller/BookController");

router.get("/books", BookController.get_books);
router.post("/new/books", BookController.create_books);
router.put("/update/books/:id", BookController.update_books);
router.delete("/delete/books/:id", BookController.delete_books);

module.exports = router;
