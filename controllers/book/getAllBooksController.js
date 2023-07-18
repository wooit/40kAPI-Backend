const Books = require('../../models/BookModel');

exports.getAllBooks = (req, res, next) => {
    Books.fetchAllBooksWithSerieName()
        .then( result => {
            res.json(result[0])
        }).catch(err => {
        console.log(err)
    })
}