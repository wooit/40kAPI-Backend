const Series = require('../../models/SerieModel');
const Response = require("../../utils/utilsResponse");

exports.createBook = (req, res, next) => {
    const name = req.body.name;
    const summary = req.body.summary;

    Series.createSerie(name, summary)
        .then(result => {
            const newSerie = req.body;
            res.send({
                message: "New serie successfully added",
                statusCode: 201,
                createdSerie: newSerie
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