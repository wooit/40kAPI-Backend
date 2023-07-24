const express = require('express');
const router = express.Router();
const userController = require("../controllers/user/getAllUserController");
const { requireAuthAndIsAdmin } = require("../middlewares/isAdminMiddleware");

/**
 * @swagger
 * /admin/users:
 *  get:
 *    description: Get the list of all the users registered
 *    tags: [Admin]
 *    responses:
 *      '200':
 *        description: Success
 *      '400':
 *        description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      '401':
 *        description: Unauthorized – client failed to authenticate with the server
 *      '403':
 *        description: Forbidden – client authenticated but does not have permission to access the requested resource
 *      '404':
 *        description: Not Found – the requested resource does not exist
 *      '500':
 *        description: Internal Server Error – a generic error occurred on the server
 *      '503':
 *        description: Service Unavailable – the requested service is not available
 */
router.get('/users', requireAuthAndIsAdmin, userController.getListUsers);

module.exports = router;
