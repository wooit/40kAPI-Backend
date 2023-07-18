const express = require('express');
const router = express.Router()

const loginUserController = require("../controllers/user/loginUserController.js");
const signupUserController = require("../controllers/user/signupUserController");
const logoutUserController = require('../controllers/user/logoutUserController');

/**
 * @openapi
 * components:
 *   schema:
 *     CreateUser:
 *       type: object
 *       required:
 *        - username
 *        - email
 *        - password
 *        - isAdmin
 *       properties:
 *         username:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *     CreateUserResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *         message:
 *           type: string
 * '/auth/signup':
 *  post:
 *     tags:
 *     - Auth
 *     summary: Register a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *               $ref: '#/components/schema/CreateUser'
 *     responses:
 *      201:
 *          description: New user successfully added
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/CreateUserResponse'
 *      400:
 *          description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      500:
 *          description: Internal Server Error – a generic error occurred on the server
 *      503:
 *          description: Service Unavailable – the requested service is not available
 *
 */
router.post('/signup', signupUserController.postNewUser);


/**
 * @openapi
 * components:
 *   schema:
 *     LoginUser:
 *       type: object
 *       required:
 *        - email
 *        - password
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 *     LoginUserResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         statusCode:
 *           type: integer
 *         token:
 *           type: string
 *         userId:
 *           type: integer
 *         username:
 *           type: string
 * '/auth/login':
 *  post:
 *     tags:
 *     - Auth
 *     summary: Register a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *               $ref: '#/components/schema/LoginUser'
 *     responses:
 *      201:
 *          description: Login successful
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/LoginUserResponse'
 *      400:
 *          description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      403:
 *          description: Invalid Credentials
 *      500:
 *          description: Internal Server Error – a generic error occurred on the server
 *      503:
 *          description: Service Unavailable – the requested service is not available
 *
 */
router.post('/login', loginUserController.postLoginUser);

//todo later when it will be used by frontend
// /**
//  * @swagger
//  * /auth/logout:
//  *  post:
//  *    tags: [Auth]
//  *    summary: Logout user
//  *    responses:
//  *      '200':
//  *        description: Success
//  *      '400':
//  *        description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
//  *      '401':
//  *        description: Unauthorized – client failed to authenticate with the server
//  *      '403':
//  *        description: Forbidden – client authenticated but does not have permission to access the requested resource
//  *      '404':
//  *        description: Not Found – the requested resource does not exist
//  *      '500':
//  *        description: Internal Server Error – a generic error occurred on the server
//  *      '503':
//  *        description: Service Unavailable – the requested service is not available
//  */
// router.post('/logout', logoutUserController.logoutUser);


module.exports = router