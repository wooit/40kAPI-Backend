const FactionBook = require('../../models/FactionBooksModel');
const Faction = require('../../models/FactionModel');

const Response = require("../../utils/utilsResponse");

exports.getAllBooksFromFactionId = async (req, res, next) => {
    const factionId = req.params.factionId
    const faction = await Faction.fetchFactionById(factionId)

    if(Object.keys(faction[0]).length === 0){
        return Response.sendErrorResponse({
            res,
            message: "This Faction doesnt exist",
            statusCode: 404,
        })
    } else {
        FactionBook.fetchAllBooksFromFactionId(factionId)
            .then( result => {
                res.json(result[0])
            }).catch(err => {
            console.log(err)
        })
    }
}

