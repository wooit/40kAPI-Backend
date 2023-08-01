const MainCharacters = require('../../models/MainCharacterModel');

exports.getAllMainCharacters = (req, res, next) => {
    MainCharacters.fetchAllMainCharacters()
        .then( result => {
            res.json(result[0])
        }).catch(err => {
        console.log(err)
    })
}