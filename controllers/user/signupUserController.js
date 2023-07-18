const User = require('../../models/UserModel');
const Response = require('../../utils/utilsResponse');
const bcrypt = require('bcrypt');

exports.postNewUser = async (req, res, next) => {
    const email = req.body.email;
    const username = req.body.username;

    const isValidEmail = (email) => {
        const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return regEx.test(email)
    }

    if (!isValidEmail(email)) {
        return Response.sendErrorResponse({
            res,
            message: 'Please enter a valid Email address',
            statusCode: 400,
        })
    }

    const validatePassword = (password) => {
        if (req.body.password.length <= 5 || password === '') {
            return false
        } return true
    }
    if (!validatePassword(req.body.password)) {
        return Response.sendErrorResponse({
            res,
            message: 'Password must be more than five(5) characters',
            statusCode: 400,
        })
    }

    //bcrypt password
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(req.body.password, salt)

    //saving user in db
     User.saveUser(username, email, password, 2)
        .then( result => {
            console.log(result)
            return Response.sendResponse({
                res,
                message: 'New user successfully added ',
                statusCode: 201,
            })
        }).catch(error => {
            if(error.code === "ER_DUP_ENTRY"){
                return Response.sendErrorResponse({
                    res,
                    message: "Email already taken",
                    statusCode: 400,
                })
            } else {
                return Response.sendErrorResponse({
                    res,
                    message: "Something went wrong",
                    statusCode: 400,
                })
            }
    })
}