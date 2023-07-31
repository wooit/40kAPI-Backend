const FactionBook = require('../../models/FactionBooksModel');

exports.getAllFactionsBooksRelations = async (req, res, next) => {
    FactionBook.fetchAllFactionsBooksRelations()
        .then( result => {
            res.json(result[0])
        }).catch(err => {
        console.log(err)
    })
}