const COLLECTION = 'books';

async function getAllBooks(db, filter = {}) {
    return db.collection(COLLECTION).find(filter).toArray();
}

async function getBookById(db, id) {
    const { ObjectId } = require('mongodb');
    return db.collection(COLLECTION).findOne({ _id: new ObjectId(id) });
}

async function addBook(db, book) {
    return db.collection(COLLECTION).insertOne(book);
}

async function updateBook(db, id, updated) {
    const { ObjectId } = require('mongodb');
    return db.collection(COLLECTION).updateOne(
        { _id: new ObjectId(id) },
        { $set: updated }
    );
}

async function deleteBook(db, id) {
    const { ObjectId } = require('mongodb');
    return db.collection(COLLECTION).deleteOne({ _id: new ObjectId(id) });
}

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook,
};