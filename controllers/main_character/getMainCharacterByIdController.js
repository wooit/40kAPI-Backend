const MainCharacters = require('../../models/MainCharacterModel');
const Response = require("../../utils/utilsResponse");

exports.getMainCharacterById = async (req, res, next) => {
    const id = req.params.id
    const mainCharacter = await MainCharacters.fetchMainCharacterById(id)

    if(Object.keys(mainCharacter[0]).length !== 0){
        res.send(mainCharacter[0][0])
    } else {
        return Response.sendErrorResponse({
            res,
            message: "This Main Character doesnt exist",
            statusCode: 404,
        })
    }
}