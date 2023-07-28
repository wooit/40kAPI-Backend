const Faction = require('../../models/FactionModel');
const Response = require("../../utils/utilsResponse");

exports.updateFaction = async (req, res, next) => {
    const id = req.params.id;
    const factionToUpdate = await Faction.fetchFactionById(id)

    if(Object.keys(factionToUpdate[0]).length === 0){
        return Response.sendErrorResponse({
            res,
            message: "Cannot find a faction with this ID",
            statusCode: 404,
        })
    }

    const updatedFaction = {...factionToUpdate[0][0], ...req.body}

    Faction.updateFaction(
        updatedFaction.name,
        updatedFaction.lore,
        updatedFaction.img_url,
        id
    )
        .then(result =>{
            res.send({
                message: "Update Successful",
                updatedFaction: updatedFaction
            })
        }).catch(err =>{
        console.log(err)
    })
}