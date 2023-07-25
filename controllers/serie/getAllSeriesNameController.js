const Series = require('../../models/SerieModel');

exports.getAllSeriesName = (req, res, next) => {
    Series.fetchAllSeriesName()
        .then( result => {
            const seriesName = []
            Object.values(result[0]).forEach(serie => {
                seriesName.push(serie.name)
            });
            res.json(seriesName)
        }).catch(err => {
        console.log(err)
    })
}