const MainCharacterFaction = require('../../models/MainCharacterFactionModel');
const MainCharacter = require('../../models/MainCharacterModel');
const Faction = require('../../models/FactionModel');
const Response = require("../../utils/utilsResponse");

exports.createMainCharacterFactionRelation = async (req, res, next) => {
    const mainCharacterId = req.body.mainCharacterId;
    const factionId = req.body.factionId;

    const mainCharacter = await MainCharacter.fetchMainCharacterById(mainCharacterId)
    const faction = await Faction.fetchFactionById(factionId)

    if(Object.keys(mainCharacter[0]).length === 0){
        res.send({
            message: "This main character id doesnt exist",
        })
    } else if (Object.keys(faction[0]).length === 0){
        res.send({
            message: "This faction id doesnt exist",
        })
    } else {
        MainCharacterFaction.createMainCharacterFactionRelation(mainCharacterId, factionId)
            .then(result => {
                const createdMainCharacterFactionRelation = req.body
                res.send({
                    message: "New main character faction relation successfully created",
                    statusCode: 201,
                    relation: createdMainCharacterFactionRelation
                })
            }).catch(err => {
            console.log(err)
            return Response.sendErrorResponse({
                res,
                message: "Something went wrong, verify data properties",
                statusCode: 500,
            })
        })
    }
}