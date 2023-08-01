const FactionsBooks = require('../../models/FactionBooksModel');
const Faction = require('../../models/FactionModel');
const Books = require('../../models/BookModel');
const Response = require("../../utils/utilsResponse");

exports.createFactionBookRelation = async (req, res, next) => {
    const factionId = req.body.factionId;
    const bookId = req.body.bookId;

    const faction = await Faction.fetchFactionById(factionId)
    const book = await Books.fetchABookById(bookId)

    if(Object.keys(faction[0]).length === 0){
        res.send({
            message: "This faction id doesnt exist",
        })
    } else if (Object.keys(book[0]).length === 0){
        res.send({
            message: "This book id doesnt exist",
        })
    } else {
        FactionsBooks.createFactionBookRelation(factionId, bookId)
            .then(result => {
                const createdFactionBookRelation = req.body
                res.send({
                    message: "New faction book relation successfully created",
                    statusCode: 201,
                    relation: createdFactionBookRelation
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