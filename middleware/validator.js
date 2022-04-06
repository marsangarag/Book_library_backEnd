const { body } = require("express-validator");

const create_books = () => {
  return [
    body("name").notEmpty().isString(),
    body("isbn").notEmpty().isNumeric().length({ min: 10 }),
    body("price").notEmpty().isNumeric(),
    body("author").notEmpty().isString(),
    body("published_date").notEmpty().isDate(),
  ];
};
