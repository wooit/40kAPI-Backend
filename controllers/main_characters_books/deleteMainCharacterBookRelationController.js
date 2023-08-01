const MainCharacterBook = require('../../models/MainCharacterBookModel');
const Response = require("../../utils/utilsResponse");

exports.deleteMainCharacterBookRelation = async (req, res, next) => {
    const id = req.params.id
    const relationToDelete = await MainCharacterBook.fetchMainCharacterBookById(id)

    if(Object.keys(relationToDelete[0]).length !== 0){
        MainCharacterBook.deleteRelation(id)
            .then( result => {
                res.send({
                    message: 'The main character book relation ' + id + ' has been deleted'
                })
            }).catch(err => {
            console.log(err)
        })
    } else {
        return Response.sendErrorResponse({
            res,
            message: "This MainCharacter Book id doesnt exist",
            statusCode: 404,
        })
    }
}