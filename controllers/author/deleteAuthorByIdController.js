const Authors = require('../../models/AuthorModel');
const Response = require("../../utils/utilsResponse");

exports.deleteAuthor = async (req, res, next) => {
    const id = req.params.id
    const authorToDelete = await Authors.fetchAuthorById(id)

    if(Object.keys(authorToDelete[0]).length !== 0){
        Authors.deleteAuthorById(id)
            .then( result => {
                res.send(authorToDelete[0][0])
            }).catch(err => {
            console.log(err)
        })
    } else {
        return Response.sendErrorResponse({
            res,
            message: "This Author doesnt exist",
            statusCode: 404,
        })
    }
}