const Authors = require('../../models/AuthorModel');
const Response = require("../../utils/utilsResponse");

exports.updateAuthor = async (req, res, next) => {
    const id = req.params.id;

    const authorToUpdate = await Authors.fetchAuthorById(id)

    if(Object.keys(authorToUpdate[0]).length === 0){
        return Response.sendErrorResponse({
            res,
            message: "Cannot find an author with this ID",
            statusCode: 404,
        })
    }

    const newAuthor = {...authorToUpdate[0][0], ...req.body}

    Authors.updateAuthor(
        newAuthor.name,
        newAuthor.country,
        newAuthor.biography,
        newAuthor.img_url,
        id
    )
        .then(result =>{
            res.send({
                message: "Update Successful",
                updatedAuthor: newAuthor
            })
        }).catch(err =>{
        console.log(err)
    })
}