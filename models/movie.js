// !! Database Stuff
var mongoose = require('mongoose')

// MOVIE in the DB (can create multiple schemas)
var Schema = mongoose.Schema
var MovieSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    released: {type: Number, required: true},
    rating: {type: Number, required: true}
})

//In the database, you'll have a collection of 'Movie' which will follow the Movie schema model
var Movie = mongoose.model('Movie', MovieSchema)
// END MOVIE

module.exports = Movie;