const AuthorBook = require('../../models/AuthorBooksModel');

exports.getAllBooksFromAuthorID = async (req, res, next) => {
    const authorId = req.params.authorId

    AuthorBook.fetchAllBooksFromAuthorId(authorId)
        .then( result => {
            res.json(result[0])
        }).catch(err => {
        console.log(err)
    })
}
