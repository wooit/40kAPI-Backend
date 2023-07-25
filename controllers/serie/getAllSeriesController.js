const Series = require('../../models/SerieModel');

exports.getAllSeries = (req, res, next) => {
    Series.fetchAllSeries()
        .then(result => {
            res.json(result[0])
        }).catch(err => {
            console.log(err)
    })
}