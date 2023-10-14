const express = require("express");
const router = express.Router();

const Controllers = require("../controllers/booksControllers");

router.get("/", Controllers.hello);
router.get("/books", Controllers.allBooks);

router.post("/books", Controllers.createBook);

router.put("/books/:id", Controllers.updateBook);

router.delete("/books/:id", Controllers.delete);
module.exports = router;