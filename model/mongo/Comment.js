  
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    movie_id: Schema.Types.ObjectId,
    name: String, 

});

const model = mongoose.model('Comment', CommentSchema, 'movie-comments');

module.exports = model;