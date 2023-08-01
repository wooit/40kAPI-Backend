const FactionBook = require('../../models/FactionBooksModel');
const Book = require('../../models/BookModel');
const Response = require("../../utils/utilsResponse");

exports.getAllFactionsFromBookID = async (req, res, next) => {
    const bookId = req.params.bookId
    const book = await Book.fetchABookById(bookId)

    if(Object.keys(book[0]).length === 0){
        return Response.sendErrorResponse({
            res,
            message: "This Book doesnt exist",
            statusCode: 404,
        })
    } else {
        FactionBook.fetchAllFactionsFromBookId(bookId)
            .then( result => {
                res.json(result[0])
            }).catch(err => {
            console.log(err)
        })
    }
}