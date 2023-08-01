const FactionBook = require('../../models/FactionBooksModel');
const Response = require("../../utils/utilsResponse");

exports.deleteFactionBookRelation = async (req, res, next) => {
    const id = req.params.id
    const relationToDelete = await FactionBook.fetchFactionBookById(id)

    if(Object.keys(relationToDelete[0]).length !== 0){
        FactionBook.deleteRelation(id)
            .then( result => {
                res.send({
                    message: 'The faction book relation ' + id + ' has been deleted'
                })
            }).catch(err => {
            console.log(err)
        })
    } else {
        return Response.sendErrorResponse({
            res,
            message: "This Faction Book id doesnt exist",
            statusCode: 404,
        })
    }
}