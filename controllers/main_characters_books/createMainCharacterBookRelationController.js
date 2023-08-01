const MainCharacterBook = require('../../models/MainCharacterBookModel');
const MainCharacter = require('../../models/MainCharacterModel');
const Books = require('../../models/BookModel');
const Response = require("../../utils/utilsResponse");

exports.createMainCharacterBookRelation = async (req, res, next) => {
    const mainCharacterId = req.body.mainCharacterId;
    const bookId = req.body.bookId;

    const mainCharacter = await MainCharacter.fetchMainCharacterById(mainCharacterId)
    const book = await Books.fetchABookById(bookId)

    if(Object.keys(mainCharacter[0]).length === 0){
        res.send({
            message: "This main character id doesnt exist",
        })
    } else if (Object.keys(book[0]).length === 0){
        res.send({
            message: "This book id doesnt exist",
        })
    } else {
        MainCharacterBook.createMainCharacterBookRelation(mainCharacterId, bookId)
            .then(result => {
                const createdMainCharacterBookRelation = req.body
                res.send({
                    message: "New main character book relation successfully created",
                    statusCode: 201,
                    relation: createdMainCharacterBookRelation
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