const MainCharacterBook = require('../../models/MainCharacterBookModel');

exports.getAllMainCharactersBooksRelations = async (req, res, next) => {
    MainCharacterBook.fetchAllMainCharactersBooksRelations()
        .then( result => {
            res.json(result[0])
        }).catch(err => {
        console.log(err)
    })
}