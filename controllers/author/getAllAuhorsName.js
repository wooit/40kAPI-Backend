const Authors = require('../../models/AuthorModel');

exports.getAllAuthorsName = (req, res, next) => {
    Authors.fetchAllNames()
        .then( result => {
            const authorsName = []
            Object.values(result[0]).forEach(author => {
                authorsName.push(author.name)
            });
            res.json(authorsName)
        }).catch(err => {
        console.log(err)
    })
}