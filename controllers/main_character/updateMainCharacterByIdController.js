const MainCharacters = require('../../models/MainCharacterModel');
const Response = require("../../utils/utilsResponse");

exports.updateMainCharacter = async (req, res, next) => {
    const id = req.params.id;
    const mainCharacterToUpdate = await MainCharacters.fetchMainCharacterById(id)

    if(Object.keys(mainCharacterToUpdate[0]).length === 0){
        return Response.sendErrorResponse({
            res,
            message: "Cannot find a main character with this ID",
            statusCode: 404,
        })
    }

    const updatedMainCharacter = {...mainCharacterToUpdate[0][0], ...req.body}

    MainCharacters.updateMainCharacter(
        updatedMainCharacter.name,
        updatedMainCharacter.lore,
        updatedMainCharacter.img_url,
        updatedMainCharacter.is_primarch,
        updatedMainCharacter.is_important,
        updatedMainCharacter.is_leader,
        id
    )
        .then(result =>{
            res.send({
                message: "Update Successful",
                updatedMainCharacter: updatedMainCharacter
            })
        }).catch(err =>{
        console.log(err)
    })
}