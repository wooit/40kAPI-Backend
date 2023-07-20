const User = require('../../models/UserModel');
const bcrypt = require('bcrypt');
const Response = require("../../utils/utilsResponse");
const jwt = require('jsonwebtoken');

exports.postLoginUser = async (req, res, next) => {
    const email = req.body.email;
    const user = await User.findOne(email)

    // WARNING HERE user[0] is not an array but an object !!!
    if (Object.keys(user[0]).length === 0) {
        return Response.sendErrorResponse({
            res,
            message: "User not found",
            statusCode: 400,
        })
    } else {
        let hashedPassword, userId, userName, isAdmin;
        Object.values(user[0]).forEach(credential => {
            hashedPassword = credential.password
            userId = credential.id
            userName = credential.username
            isAdmin = credential.is_admin
        });

        await bcrypt.compare(req.body.password, hashedPassword, function (err, result){
            if(result === false){
                console.log('invalid credentials')
                return Response.sendErrorResponse({
                    res,
                    message: "Invalid Credentials",
                    statusCode: 400,
                })
            }
            if(result === true){
                //generate jwt token
                const token = jwt.sign({_id: userId}, process.env.JWT_SECRET_KEY)

                //store token in cookie httpOnly
                res.cookie('jwt', token, {
                    //i still send httpOnlyCookie
                    httpOnly: true,
                    maxAge: 24 * 60 * 60 * 1000 // 1 day
                })

                if(isAdmin === 1){
                    res.send({
                        message: 'Login Successful ',
                        statusCode: 200,
                        token: token,
                        userId: userId,
                        userName: userName,
                        isAdmin: isAdmin
                    })
                } else {
                    res.send({
                        message: 'Login Successful ',
                        statusCode: 200,
                        token: token,
                        userId: userId,
                        userName: userName
                    })
                }
            }
        })
    }
}
