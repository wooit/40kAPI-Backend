const Series = require('../../models/SerieModel');
const Books = require("../../models/BookModel");
const Response = require("../../utils/utilsResponse");

exports.updateSerie = async (req, res, next) => {
    const id = req.params.id;

    const serieToUpdate = await Series.fetchSerieById(id)
    if(Object.keys(serieToUpdate[0]).length === 0){
        return Response.sendErrorResponse({
            res,
            message: "Cannot find a serie with this ID",
            statusCode: 404,
        })
    }

    const newSerie = {...serieToUpdate[0][0], ...req.body}
    Series.updateSerie(
        newSerie.name,
        newSerie.summary,
        id
    )
        .then(result =>{
            res.send({
                message: "Update Successful",
                updatedSerie: newSerie
            })
        }).catch(err =>{
        console.log(err)
    })
}