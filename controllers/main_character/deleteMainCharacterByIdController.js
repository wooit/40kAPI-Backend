const MainCharacters = require('../../models/MainCharacterModel');
const Response = require("../../utils/utilsResponse");

exports.deleteMainCharacterById = async (req, res, next) => {
    const id = req.params.id;
    const mainCharacterToDelete = await MainCharacters.fetchMainCharacterById(id)

    if(Object.keys(mainCharacterToDelete[0]).length !== 0){
        MainCharacters.deleteMainCharacterById(id)
            .then( result => {
                res.send(mainCharacterToDelete[0][0])
            }).catch(err => {
            console.log(err)
        })
    } else {
        return Response.sendErrorResponse({
            res,
            message: "This Main Character doesnt exist",
            statusCode: 404,
        })
    }
}