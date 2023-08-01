const Books = require('../../models/BookModel');
const Response = require("../../utils/utilsResponse");

exports.updateBook = async (req, res, next) => {
    const id = req.params.id;

    const bookToUpdate = await Books.fetchABookById(id)
    if(Object.keys(bookToUpdate[0]).length === 0){
        return Response.sendErrorResponse({
            res,
            message: "Cannot find a book with this ID",
            statusCode: 404,
        })
    }

    const newBook = {...bookToUpdate[0][0], ...req.body}

    Books.updateBook(
        newBook.title,
        newBook.author,
        newBook.summary,
        newBook.release_date,
        newBook.release_order,
        newBook.img_url,
        newBook.release_order,
        newBook.period,
        newBook.multiple_stories,
        newBook.serie_id,
        id
    )
        .then(result =>{
            res.send({
                message: "Update Successful",
                updatedBook: newBook
            })
        }).catch(err =>{
            console.log(err)
    })
}
