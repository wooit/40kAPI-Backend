const MainCharacters = require('../../models/MainCharacterModel');
const Response = require("../../utils/utilsResponse");

exports.createMainCharacter = (req, res, next) => {
    const name = req.body.name
    const lore = req.body.lore
    const imgUrl = req.body.imgUrl
    const isPrimarch = req.body.isPrimarch
    const isImportant = req.body.isImportant
    const isLeader = req.body.isLeader

    MainCharacters.createNewAMainCharacter(name, lore, imgUrl, isPrimarch, isImportant, isLeader)
        .then(result => {
            const newMainCharacter = req.body;
            res.send({
                message: "New main character successfully added",
                statusCode: 201,
                createdMainCharacter: newMainCharacter
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