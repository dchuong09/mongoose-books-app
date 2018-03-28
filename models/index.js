var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

var BookModel = require('./book.js');
// var AuthorModel = require('./author.js');

module.exports = {
	Book: BookModel
	// Author: AuthorModel
}
