const MainCharacterFaction = require('../../models/MainCharacterFactionModel');
const MainCharacter = require('../../models/MainCharacterModel');
const Response = require("../../utils/utilsResponse");

exports.getAllFactionsFromMainCharacterID = async (req, res, next) => {
    const mainCharacterId = req.params.mainCharacterId
    const mainCharacter = await MainCharacter.fetchMainCharacterById(mainCharacterId)

    if(Object.keys(mainCharacter[0]).length === 0){
        return Response.sendErrorResponse({
            res,
            message: "This Main Character doesnt exist",
            statusCode: 404,
        })
    } else {
        MainCharacterFaction.fetchAllFactionsFromMainCharacterId(mainCharacterId)
            .then( result => {
                res.json(result[0])
            }).catch(err => {
            console.log(err)
        })
    }
}