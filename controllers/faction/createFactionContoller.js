const Faction = require('../../models/FactionModel');
const Response = require("../../utils/utilsResponse");

exports.createFaction = async (req, res, next) => {
    const name = req.body.name
    const lore = req.body.lore
    const imgUrl = req.body.imgUrl

    const faction = await Faction.fetchAFactionByName(name)
    if(Object.keys(faction[0]).length !== 0){
        res.send({
            message: "This faction already exist",
        })
    } else {
        Faction.createNewFaction(name, lore, imgUrl)
            .then(result => {
                const newFaction = req.body
                res.send({
                    message: "New faction successfully added",
                    statusCode: 201,
                    createdFaction: newFaction
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