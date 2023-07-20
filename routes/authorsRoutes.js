const express = require('express');
const router = express.Router();

const authorsController = require("../controllers/author/getAllAuthorsController");
const authorsListNames = require("../controllers/author/getAllAuhorsNameController");


/**
 * @openapi
 * components:
 *   schema:
 *     FetchAllAuthorsResponse:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           id:
 *             type: integer
 *           name:
 *             type: string
 *           country:
 *             type: string
 *           biography:
 *             type: string
 *           img_url:
 *             type: string
 * /authors:
 *  get:
 *    description: Get the list of all the authors registered
 *    tags:
 *    - Authors
 *    responses:
 *      200:
 *         description: Success
 *         content:
 *             application/json:
 *                 schema:
 *                     $ref: '#/components/schema/FetchAllAuthorsResponse'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *        description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.get('/authors', authorsController.getAllAuthors);

/**
 * @openapi
 * components:
 *   schema:
 *     FetchAllAuthorsNameResponse:
 *       type: array
 *       items:
 *         type: string
 *       example: ["bill", "bob", "geo"]
 * /name-authors:
 *  get:
 *    description: Get the list of names in an array of all the authors registered
 *    summary:  Get the list of names in an array of all the authors registered
 *    tags:
 *    - Authors
 *    responses:
 *      200:
 *         description: Success
 *         content:
 *             application/json:
 *                 schema:
 *                     $ref: '#/components/schema/FetchAllAuthorsNameResponse'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *        description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.get('/name-authors', authorsListNames.getAllAuthorsName);

module.exports = router;