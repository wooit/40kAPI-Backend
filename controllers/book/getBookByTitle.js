const Books = require('../../models/BookModel');
const Response = require("../../utils/utilsResponse");

exports.getBookByTitle = async (req, res, next) => {
    const title = req.params.title
    const book = await Books.fetchABookByTitle(title)

    if(Object.keys(book[0]).length !== 0){
        res.send(book[0][0])
    } else {
        return Response.sendErrorResponse({
            res,
            message: "This Book doesnt exist",
            statusCode: 404,
        })
    }
}