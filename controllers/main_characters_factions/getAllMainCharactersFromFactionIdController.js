const MainCharacterFaction = require('../../models/MainCharacterFactionModel');
const Faction = require('../../models/FactionModel');

const Response = require("../../utils/utilsResponse");

exports.getAllMainCharactersFromFactionId = async (req, res, next) => {
    const factionId = req.params.factionId
    const faction = await Faction.fetchFactionById(factionId)

    if(Object.keys(faction[0]).length === 0){
        return Response.sendErrorResponse({
            res,
            message: "This Faction doesnt exist",
            statusCode: 404,
        })
    } else {
        MainCharacterFaction.fetchAllMainCharactersFromFactionId(factionId)
            .then( result => {
                res.json(result[0])
            }).catch(err => {
            console.log(err)
        })
    }
}