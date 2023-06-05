const User = require('../../models/UserModel');

exports.getListUsers = (req, res, next) => {
    User.fetchAll()
        .then( result => {
            res.json(result[0])
        }).catch(err => {
            console.log(err)
    })
}