const Authors = require('../../models/AuthorModel');

exports.getAllAuthors = (req, res, next) => {
    Authors.fetchAll()
        .then( result => {
            res.json(result[0])
        }).catch(err => {
        console.log(err)
    })
}