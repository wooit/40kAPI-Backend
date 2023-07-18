const Response = require("../../utils/utilsResponse");


exports.logoutUser = async (req, res, next) => {
    res.cookie('jwt', '', {maxAge: 0})

    return Response.sendResponse({
        res,
        message: 'Logout Successful',
        statusCode: 200,
    })

}