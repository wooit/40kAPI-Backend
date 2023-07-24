const express = require('express');
const router = express.Router();

const authorsController = require("../controllers/author/getAllAuthorsController");
const authorsListNames = require("../controllers/author/getAllAuhorsNameController");
const postAuthor = require("../controllers/author/createAuthorController");
const deleteAuthor = require("../controllers/author/deleteAuthorByIdController");
const updateAuthor = require("../controllers/author/updateAuthorController");


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


/**
 * @openapi
 * components:
 *   schema:
 *     CreateAuthor:
 *       type: object
 *       required:
 *        - name
 *        - country
 *        - biography
 *        - img_url
 *       properties:
 *         name:
 *           type: string
 *           example: new author
 *         country:
 *           type: string
 *           example: England
 *         biography:
 *           type: string
 *           example: new author biography
 *         img_url:
 *           type: string
 *           example: url_image
 *     CreateAuthorResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *         message:
 *           type: string
 *           example: New author successfully added
 *         createdAuthor:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: new author added
 *             country:
 *               type: string
 *               example: england
 *             biography:
 *               type: string
 *               example: new author biography
 *             img_url:
 *               type: string
 *               example: https://picsum.photos/200/300
 * /author:
 *  post:
 *    tags:
 *    - Authors
 *    description: Create a new author
 *    summary: Create an author
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *             $ref: '#/components/schema/CreateAuthor'
 *    responses:
 *      200:
 *          description: A new author has been created
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/CreateAuthorResponse'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.post('/author', postAuthor.createAuthor);

/**
 * @openapi
 * components:
 *   schema:
 *     DeleteAuthor:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         country:
 *           type: string
 *         biography:
 *           type: string
 *         img_url:
 *           type: string
 *     Response404:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *           example: false
 *         message:
 *           type: string
 *           example: This Author doesnt exist
 * /author/id/{id}:
 *  delete:
 *    description: Delete an author selected by its ID
 *    summary: Delete an author by its ID
 *    tags:
 *    - Authors
 *    parameters:
 *    - name: id
 *      in: path
 *      description: the id of the author
 *      required: true
 *    responses:
 *      200:
 *          description: The following book was successfully deleted
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/DeleteAuthor'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/Response404'
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.delete('/author/id/:id', deleteAuthor.deleteAuthor);

/**
 * @openapi
 * components:
 *   schema:
 *     UpdateAuthor:
 *       type: object
 *       required:
 *        - name
 *        - country
 *        - biography
 *        - img_url
 *       properties:
 *         name:
 *           type: string
 *           example: new author
 *         country:
 *           type: string
 *           example: Belgium
 *         biography:
 *           type: string
 *           example: new author biography
 *         img_url:
 *           type: string
 *           example: url_image
 *     UpdateAuthorResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Update Successful
 *         updatedAuthor:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: new author name
 *             country:
 *               type: string
 *               example: Belgium
 *             biography:
 *               type: string
 *               example: new author biography
 *             img_url:
 *               type: string
 *               example: https://picsum.photos/200/300
 * /author/id/{id}:
 *  patch:
 *    description: Update information related to author selected by its ID
 *    tags:
 *    - Authors
 *    summary: Update selected author by its ID
 *    parameters:
 *    - name: id
 *      in: path
 *      description: Id of the author you want to update
 *      required: true
 *    requestBody:
 *      required: true
 *      description: You may include to the request body only the properties you want to update
 *      content:
 *        application/json:
 *          schema:
 *             $ref: '#/components/schema/UpdateAuthor'
 *    responses:
 *      200:
 *         description: Success
 *         content:
 *             application/json:
 *                 schema:
 *                     $ref: '#/components/schema/UpdateAuthorResponse'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *        description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.patch('/author/id/:id', updateAuthor.updateAuthor);

module.exports = router;
