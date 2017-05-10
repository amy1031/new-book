// !! Database Stuff
var mongoose = require('mongoose')

// BOOK in the DB (can create multiple schemas)
var Schema = mongoose.Schema
var BookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    published: {type: Number, required: true},
    rating: {type: Number, required: true}
})
//{type: Boolean, required: true, default: false}

//In the database, you'll have a collection of 'Book' which will follow the Book schema model
var Book = mongoose.model('Book', BookSchema)
// END BOOK

module.exports = Book;