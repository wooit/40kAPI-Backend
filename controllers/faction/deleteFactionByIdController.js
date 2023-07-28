const Faction = require('../../models/FactionModel');
const Response = require("../../utils/utilsResponse");

exports.deleteFactionById = async (req, res, next) => {
    const id = req.params.id;
    const factionToDelete = await Faction.fetchFactionById(id)

    if(Object.keys(factionToDelete[0]).length !== 0){
        Faction.deleteFactionById(id)
            .then( result => {
                res.send(factionToDelete[0][0])
            }).catch(err => {
            console.log(err)
        })
    } else {
        return Response.sendErrorResponse({
            res,
            message: "This faction doesnt exist",
            statusCode: 404,
        })
    }
}