const MainCharacterFaction = require('../../models/MainCharacterFactionModel');

exports.getAllMainCharactersFactionsRelations = async (req, res, next) => {
    MainCharacterFaction.fetchAllMainCharactersFactionsRelations()
        .then( result => {
            res.json(result[0])
        }).catch(err => {
        console.log(err)
    })
}