const MainCharacters = require("../../models/MainCharacterModel");

exports.getAllMainCharactersName = (req, res, next) => {
    MainCharacters.fetchAllMainCharactersName()
        .then( result => {
            const names = []
            Object.values(result[0]).forEach(mainCharacter => {
                names.push(mainCharacter.name)
            });
            res.json(names)
        }).catch(err => {
        console.log(err)
    })
}