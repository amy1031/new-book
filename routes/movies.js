var router = require('express').Router();
var Movie = require('./../models/movie')

exports.mountPath = '/movies';
exports.router = router;

router.route('/')
    .get(getMovies);

router.route('/')
    .post(createMovie)

function getMovies(req, res, next) {
    Movie.find({}).then(function(movies) {
        res.send(movies)
    })
}

function createMovie(req, res, next) {
  var newMovie = req.body
  Movie.create(newMovie)
    .then(function (newlyCreatedMovie) {
      res.send(newlyCreatedMovie)
    })
}