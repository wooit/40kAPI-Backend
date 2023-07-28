const Faction = require('../../models/FactionModel');
const Response = require("../../utils/utilsResponse");

exports.getFactionById = async (req, res, next) => {
    const id = req.params.id
    const faction = await Faction.fetchFactionById(id)

    if(Object.keys(faction[0]).length !== 0){
        res.send(faction[0][0])
    } else {
        return Response.sendErrorResponse({
            res,
            message: "This Main Character doesnt exist",
            statusCode: 404,
        })
    }
}