const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    console.log("iam inside requireAuth")
    const token = req.cookies['jwt'];

    if (token) {
        console.log('inside token check')
        jwt.verify(token,  process.env.JWT_SECRET_KEY, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.send({
                    message: "Unauthenticated",
                    statusCode: 403,
                });
            } else {
                console.log(decodedToken);
                next();
            }
        });
    } else {
        res.send({
            message: "Unauthenticated",
            statusCode: 403,
        });
    }
};

module.exports = { requireAuth };