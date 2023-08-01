const Series = require('../../models/SerieModel');
const Response = require("../../utils/utilsResponse");

exports.deleteSerie = async (req, res, next) => {
    const id = req.params.id;
    const serieToDelete = await Series.fetchSerieById(id)

    if(Object.keys(serieToDelete[0]).length !== 0){
        Series.deleteSerie(id)
            .then( result => {
                res.send(serieToDelete[0][0])
            }).catch(err => {
            console.log(err)
        })
    } else {
        return Response.sendErrorResponse({
            res,
            message: "This Serie doesnt exist",
            statusCode: 404,
        })
    }
}