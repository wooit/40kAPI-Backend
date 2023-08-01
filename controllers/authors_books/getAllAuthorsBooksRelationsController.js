const AuthorBook = require('../../models/AuthorBooksModel');

exports.getAllAuthorsBooksRelations = async (req, res, next) => {
    AuthorBook.fetchAllAuthorsBooksRelations()
        .then( result => {
            res.json(result[0])
        }).catch(err => {
        console.log(err)
    })
}