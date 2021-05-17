
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    year: Number,
    name: String,
    directors: [String],
    runtime: Number,
    released: Date,
    poster: String,
    plot: String,
    fullplot: String,
    lastupdated: Date,
    type: String,
    imdb: {
        rating: Number,
        votes: Number,
        id: Number,
    },
    countries: [String
    ],
    genres: [
        String
    ],
    num_mflix_comments: Number
});

const model = mongoose.model('Movie', MovieSchema, 'movies');

module.exports = model;