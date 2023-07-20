const Books = require('../../models/BookModel');
const Response = require("../../utils/utilsResponse");

exports.getBookById = async (req, res, next) => {
    const id = req.params.id
    const book = await Books.fetchABookById(id)

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
