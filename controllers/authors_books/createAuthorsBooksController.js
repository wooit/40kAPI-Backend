const AuthorsBooks = require('../../models/AuthorBooksModel');
const Authors = require('../../models/AuthorModel');
const Books = require('../../models/BookModel');
const Response = require("../../utils/utilsResponse");

exports.createAuthorBookRelation = async (req, res, next) => {
    const authorId = req.body.authorId;
    const bookId = req.body.bookId;

    const author = await Authors.fetchAuthorById(authorId)
    const book = await Books.fetchABookById(bookId)

    if(Object.keys(author[0]).length === 0){
        res.send({
            message: "This author id doesnt exist",
        })
    } else if (Object.keys(book[0]).length === 0){
        res.send({
            message: "This book id doesnt exist",
        })
    } else {
        AuthorsBooks.createAuthorBookRelation(authorId, bookId)
            .then(result => {
                const createdAuthorsBooksRelation = req.body
                res.send({
                    message: "New author book relation successfully created",
                    statusCode: 201,
                    relation: createdAuthorsBooksRelation
                })
            }).catch(err => {
            console.log(err)
            return Response.sendErrorResponse({
                res,
                message: "Something went wrong, verify data properties",
                statusCode: 500,
            })
        })
    }
}