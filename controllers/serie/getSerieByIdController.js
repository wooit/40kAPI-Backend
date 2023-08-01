const Series = require('../../models/SerieModel');
const Response = require("../../utils/utilsResponse");

exports.getSerieById = async (req, res, next) => {
    const id = req.params.id
    const serie = await Series.fetchSerieById(id)

    if(Object.keys(serie[0]).length !== 0){
        res.send(serie[0][0])
    } else {
        return Response.sendErrorResponse({
            res,
            message: "This Serie doesnt exist",
            statusCode: 404,
        })
    }
}