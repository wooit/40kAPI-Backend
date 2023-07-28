const Authors = require('../../models/AuthorModel');
const Response = require("../../utils/utilsResponse");

exports.createAuthor = async (req, res, next) => {
    const name = req.body.name;
    const country = req.body.country;
    const biography = req.body.biography;
    const img_url = req.body.img_url;


    const author = await Authors.fetchAuthorByName(name)
    if(Object.keys(author[0]).length !== 0){
        res.send({
            message: "This author already exist",
        })
    } else {
        Authors.createNewAuthor(name, country, biography, img_url)
            .then(result => {
                const createdAuthor = req.body
                res.send({
                    message: "New author successfully added",
                    statusCode: 201,
                    createdAuthor: createdAuthor
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