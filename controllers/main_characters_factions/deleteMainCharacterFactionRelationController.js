const MainCharacterFaction = require('../../models/MainCharacterFactionModel');
const Response = require("../../utils/utilsResponse");

exports.deleteMainCharacterBookRelation = async (req, res, next) => {
    const id = req.params.id
    const relationToDelete = await MainCharacterFaction.fetchMainCharacterFactionById(id)

    if(Object.keys(relationToDelete[0]).length !== 0){
        MainCharacterFaction.deleteRelation(id)
            .then( result => {
                res.send({
                    message: 'The main character faction relation ' + id + ' has been deleted'
                })
            }).catch(err => {
            console.log(err)
        })
    } else {
        return Response.sendErrorResponse({
            res,
            message: "This MainCharacter Faction id doesnt exist",
            statusCode: 404,
        })
    }
}