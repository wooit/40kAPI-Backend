const express = require('express');
const router = express.Router();

const booksController = require("../controllers/book/getAllBooksController");

/**
 * @openapi
 * components:
 *   schema:
 *     FetchAllBooksResponse:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           id:
 *             type: integer
 *           title:
 *             type: string
 *           author:
 *             type: string
 *           summary:
 *             type: string
 *           img_url:
 *             type: string
 *           period:
 *             type: string
 *           serie:
 *             serie: string
 * /books:
 *  get:
 *    description: Get the list of all the books registered
 *    tags:
 *    - Books
 *    responses:
 *      200:
 *         description: Success
 *         content:
 *             application/json:
 *                 schema:
 *                     $ref: '#/components/schema/FetchAllBooksResponse'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *        description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.get('/books', booksController.getAllBooks);

module.exports = router;