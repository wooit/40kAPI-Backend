const Faction = require('../../models/FactionModel');

exports.getAllFactionsName = (req, res, next) => {
    Faction.fetchAllFactionsName()
        .then( result => {
            const factionsName = []
            Object.values(result[0]).forEach(faction => {
                factionsName.push(faction.name)
            });
            res.json(factionsName)
        }).catch(err => {
        console.log(err)
    })
}