var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

var Book = require('./book.js');
var Author = require("./author.js");

module.exports = {
	Book: Book,
	Author: Author
}
