const Books = require('../../models/BookModel');
const Response = require("../../utils/utilsResponse");

exports.createBook = async (req, res, next) => {
    const title = req.body.title;
    const author = req.body.author;
    const summary = req.body.summary;
    const releaseDate = req.body.releaseDate;
    const releaseOrder = req.body.releaseOrder;
    const imgUrl = req.body.imgUrl;
    const readingOrder = req.body.readingOrder;
    const period = req.body.period;
    const multipleStories = req.body.multipleStories;
    const serieId = req.body.serieId;

    const book = await Books.fetchABookByTitle(title)
    // check if a book already exist
    if(Object.keys(book[0]).length !== 0){
        res.send({
            message: "This book already exist",
        })
    } else {
        // add the book
        Books.createANewBook(title, author, summary, releaseDate, releaseOrder, imgUrl, readingOrder, period, multipleStories, serieId)
            .then(result => {
                const createdBook = req.body
                res.send({
                    message: "New book successfully added",
                    statusCode: 201,
                    createdBook: createdBook
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

