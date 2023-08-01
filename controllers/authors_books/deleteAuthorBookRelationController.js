const AuthorBook = require('../../models/AuthorBooksModel');
const Response = require("../../utils/utilsResponse");

exports.deleteAuthorBookRelation = async (req, res, next) => {
    const id = req.params.id
    const relationToDelete = await AuthorBook.fetchAuthorBookById(id)

    if(Object.keys(relationToDelete[0]).length !== 0){
        AuthorBook.deleteRelation(id)
            .then( result => {
                res.send({
                    message: 'The author book relation ' + id + ' has been deleted'
                })
            }).catch(err => {
            console.log(err)
        })
    } else {
        return Response.sendErrorResponse({
            res,
            message: "This Author Book id doesnt exist",
            statusCode: 404,
        })
    }
}