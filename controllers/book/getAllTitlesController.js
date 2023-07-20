const Books = require('../../models/BookModel');

exports.getAllTitles = (req, res, next) => {
    Books.fetchAllTitles()
        .then( result => {
            const titles = []
            Object.values(result[0]).forEach(book => {
                titles.push(book.title)
            });
            res.json(titles)
        }).catch(err => {
        console.log(err)
    })
}