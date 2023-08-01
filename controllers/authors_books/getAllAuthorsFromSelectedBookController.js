const AuthorBook = require('../../models/AuthorBooksModel');

exports.getAllAuthorsFromBookID = async (req, res, next) => {
    const bookId = req.params.bookId

    AuthorBook.fetchAllAuthorsFromBookId(bookId)
        .then( result => {
            res.json(result[0])
        }).catch(err => {
        console.log(err)
    })
}