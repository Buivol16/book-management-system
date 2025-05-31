require('dotenv').config();
const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb');
const booksRouter = require('./controllers/booksController');

const app = express();
const port = process.env.PORT || 3000;

let db;
const MONGODB_URL = process.env.MONGODB_URL;
MongoClient.connect(MONGODB_URL)
    .then((client) => {
        db = client.db();
        app.locals.db = db;
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err);
    });

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use('/', booksRouter);

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});