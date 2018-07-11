var mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        default: ''
    },

    author: {
        type: String,
        lowercase: true,
        trim: true,
        default: ''
    },

    description: {
        type: String,
        lowercase: true,
        trim: true,
        default: ''
    },

    publishYear: {
        type: String,
        trim: true,
        default: ''
    },

    pages: {
        type: String,
        trim: true,
        default: ''
    },

    rating: {
        type: String,
        trim: true,
        default: ''
    },

    genres: {
        type: String,
        lowercase: true,
        trim: true,
        default: ''
    },

    aboutAuthor: {
        type: String,
        lowercase: true,
        trim: true,
        default: ''
    },

    publisher: {
        type: String,
        trim: true,
        default: ''
    },

    isbn: {
        type: String,
        unique: true, 
        trim: true,       
        default: ''
    },

    coverUrl: {
        type: String,
        lowercase: true,
        trim: true,
        default: ''
    },
});




module.exports = mongoose.model('book', bookSchema);