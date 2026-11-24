// Define a schema for a Book
const { Schema, model } = require('mongoose');

const bookSchema = new Book({
    // title: A String, which is required.
    title: {
        type: String,
        required: true,
    },
    // author: A String, which is required.
    author: {
        type: String,
        required: true,
    },
    // isbn: A String, which must be unique.
    isbn: {
        type: String,
        unique: true,
    },
    // publishedDate: A Date.
    publishedDate: {
        type: Date,
    },
    // inStock: A Boolean, with a default value of true.
    inStock: {
        type: Boolean,
        default: true,
    }
})


// Compile this schema into a model named Book and export it.
const Book = model('Book', bookSchema);
module.exports = Book;