const FactionsModel = require('../../models/FactionModel');

exports.getAllFactions = (req, res, next) => {
    FactionsModel.fetchAllFactions()
        .then( result => {
            res.json(result[0])
        }).catch(err => {
        console.log(err)
    })
}