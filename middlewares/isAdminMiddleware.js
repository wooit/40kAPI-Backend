const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

const requireAuthAndIsAdmin = async (req, res, next) => {
    const token = req.cookies['jwt'];
    if (token) {
        await jwt.verify(token,  process.env.JWT_SECRET_KEY, (err, decodedToken) => {
            if (!err) {
                const id = decodedToken._id;

                let ifAdmin = async function (){
                    console.log('in ifAdmin')
                    const userRole = await User.checkIfAdmin(id)
                    console.log(userRole[0])
                    Object.values(userRole[0]).forEach(data => {
                        if(data.is_admin === 1){
                            next();
                        } else {
                            res.send({
                                message: 'Unauthorized',
                                isAdmin: false,
                                status: 403
                            })
                        }
                    })
                }
                ifAdmin()
            }
            else {
                res.send({
                    message: "Unauthenticated",
                    statusCode: 403,
                });
            }
        })
    }
};

module.exports = { requireAuthAndIsAdmin };
