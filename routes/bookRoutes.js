const router = require('express').Router();
const { Book } = require('../../models');

// Implement the five core CRUD endpoints on this router:
// Use async/await and try...catch blocks in all routes to handle errors.

// Create: POST / - Creates a new book using the data in req.body.
router.post('/', async(req, res) => {
    try {
        const post = await Book.create({
            ...req.body,

        });
        res.status(201).json(post);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Read All: GET / - Retrieves all books from the database.
// Read One: GET /:id - Retrieves a single book by its _id.
// Update: PUT /:id - Updates a book by its _id using the data in req.body.
// Delete: DELETE /:id - Deletes a book by its _id.

// Export the router.
module.exports = router;
