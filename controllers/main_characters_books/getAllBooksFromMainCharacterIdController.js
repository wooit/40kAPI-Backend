const MainCharacterBook = require('../../models/MainCharacterBookModel');
const MainCharacter = require('../../models/MainCharacterModel');

const Response = require("../../utils/utilsResponse");

exports.getAllBooksFromMainCharacterId = async (req, res, next) => {
    const mainCharacterId = req.params.mainCharacterId
    const mainCharacter = await MainCharacter.fetchMainCharacterById(mainCharacterId)

    if(Object.keys(mainCharacter[0]).length === 0){
        return Response.sendErrorResponse({
            res,
            message: "This main character doesnt exist",
            statusCode: 404,
        })
    } else {
        MainCharacterBook.fetchAllBooksFromMainCharacterId(mainCharacterId)
            .then( result => {
                res.json(result[0])
            }).catch(err => {
            console.log(err)
        })
    }
}