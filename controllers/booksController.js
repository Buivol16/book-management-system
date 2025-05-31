const express = require('express');
const router = express.Router();
const bookModel = require('../models/book');

router.get('/', async (req, res) => {
    const db = req.app.locals.db;
    const { title, author, genre } = req.query;
    let filter = {};
    if (title) filter.title = { $regex: title, $options: 'i' };
    if (author) filter.author = { $regex: author, $options: 'i' };
    if (genre) filter.genre = { $regex: genre, $options: 'i' };

    const books = await bookModel.getAllBooks(db, filter);
    res.render('books/index', { books, query: req.query });
});

router.get('/books/new', (req, res) => {
    res.render('books/form', { book: {}, action: '/books', method: 'POST', button: 'Add Book' });
});

router.post('/books', async (req, res) => {
    const db = req.app.locals.db;
    const { title, author, year, genre } = req.body;
    await bookModel.addBook(db, { title, author, year: Number(year), genre });
    res.redirect('/');
});

router.get('/books/:id/edit', async (req, res) => {
    const db = req.app.locals.db;
    const book = await bookModel.getBookById(db, req.params.id);
    if (!book) return res.status(404).send('Book not found');
    res.render('books/form', { book, action: `/books/${book._id}?_method=PUT`, method: 'POST', button: 'Update Book' });
});

router.post('/books/:id', async (req, res) => {
    const db = req.app.locals.db;
    const { title, author, year, genre } = req.body;
    await bookModel.updateBook(db, req.params.id, { title, author, year: Number(year), genre });
    res.redirect('/');
});

router.post('/books/:id/delete', async (req, res) => {
    const db = req.app.locals.db;
    await bookModel.deleteBook(db, req.params.id);
    res.redirect('/');
});

module.exports = router;