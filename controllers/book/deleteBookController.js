const Books = require('../../models/BookModel');
const Response = require("../../utils/utilsResponse");

exports.deleteABook = async (req, res, next) => {
    const id = req.params.id
    const bookToDelete = await Books.fetchABookById(id)

    if(Object.keys(bookToDelete[0]).length !== 0){
        Books.deleteABookById(id)
            .then( result => {
                res.send(bookToDelete[0][0])
            }).catch(err => {
            console.log(err)
        })
    } else {
        return Response.sendErrorResponse({
            res,
            message: "This Book doesnt exist",
            statusCode: 404,
        })
    }
}