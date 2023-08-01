const express = require('express');
const router = express.Router();

const getAllFactionsBooksRelations = require("../controllers/factions_books/getAllFactionsBooksRelationsController");
const createFactionBookRelation = require("../controllers/factions_books/createFactionBookController");
const getAllFactionsFromBookID = require("../controllers/factions_books/getAllFactionsFromBookIdController");
const getAllBooksFromFactionId = require("../controllers/factions_books/getAllBooksFromFactionIdController");
const deleteFactionBookRelation = require("../controllers/factions_books/deleteFactionBookRelationController");

/**
 * @openapi
 * components:
 *   schema:
 *     GetAllFactionsBooksRelations:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         factionId:
 *           type: integer
 *           example: 1
 *         factionName:
 *           type: string
 *           example: The bad guys
 *         bookId:
 *           type: integer
 *           example: 42
 *         bookTitle:
 *           type: string
 *           example: Origin of the bad guys
 * /factions-books:
 *  get:
 *    tags:
 *    - Factions_Books
 *    description: Get all relations between factions and books
 *    summary: Get all relations between factions and books
 *    responses:
 *      200:
 *          description: The following relations were successfully fetched
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/GetAllFactionsBooksRelations'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.get('/factions-books', getAllFactionsBooksRelations.getAllFactionsBooksRelations);

/**
 * @openapi
 * components:
 *   schema:
 *     GetListFactionsFromBookId:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         lore:
 *           type: string
 *         img_url:
 *           type: string
 *         faction:
 *           type: integer
 *         book:
 *           type: integer
 * /factions-books/book/{bookId}:
 *  get:
 *    tags:
 *    - Factions_Books
 *    description: Get list of factions from selected bookId
 *    summary: Get list of factions from selected bookId
 *    parameters:
 *    - name: bookId
 *      in: path
 *      description: the id of the book
 *      required: true
 *    responses:
 *      200:
 *          description: The following factions were successfully fetched
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/GetListFactionsFromBookId'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.get('/factions-books/book/:bookId', getAllFactionsFromBookID.getAllFactionsFromBookID);

/**
 * @openapi
 * components:
 *   schema:
 *     GetListBooksFromFactionId:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         author:
 *           type: string
 *         summary:
 *           type: string
 *         release_date:
 *           type: string
 *         release_order:
 *           type: string
 *         img_url:
 *           type: string
 *         period:
 *           type: string
 *         serieName:
 *           type: string
 *         faction:
 *           type: integer
 *         book:
 *          type: integer
 * /factions-books/faction/{factionId}:
 *  get:
 *    tags:
 *    - Factions_Books
 *    description: Get list of books from selected factionId
 *    summary: Get list of books from selected factionId
 *    parameters:
 *    - name: factionId
 *      in: path
 *      description: the id of the faction
 *      required: true
 *    responses:
 *      200:
 *          description: The following books were successfully fetched
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/GetListBooksFromFactionId'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.get('/factions-books/faction/:factionId', getAllBooksFromFactionId.getAllBooksFromFactionId);

/**
 * @openapi
 * components:
 *   schema:
 *     CreateFactionBookRelation:
 *       type: object
 *       required:
 *        - factionId
 *        - bookId
 *       properties:
 *         factionId:
 *           type: integer
 *         bookId:
 *           type: integer
 *     CreateFactionBookResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *         message:
 *           type: string
 *           example: New faction book relation successfully created
 *         relation:
 *           type: object
 *           properties:
 *             factionId:
 *               type: integer
 *               example: 24
 *             bookId:
 *               type: integer
 *               example: 42
 * /factions-books:
 *  post:
 *    tags:
 *    - Factions_Books
 *    description: Create a relation between faction and book
 *    summary: Create a relation between faction and book
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *             $ref: '#/components/schema/CreateFactionBookRelation'
 *    responses:
 *      200:
 *          description: The following relation was successfully created
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/CreateFactionBookResponse'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.post('/factions-books', createFactionBookRelation.createFactionBookRelation);

/**
 * @openapi
 * components:
 *   schema:
 *     DeleteFactionBookRelation:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: The faction book relation 42 has been deleted
 *     Response404DeleteFactionBookRelation:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *           example: false
 *         message:
 *           type: string
 *           example: This faction book id doesnt exist
 * /factions-books/id/{id}:
 *  delete:
 *    description: Delete a faction book relation selected by its ID
 *    summary: Delete a faction book relation selected by its ID
 *    tags:
 *    - Factions_Books
 *    parameters:
 *    - name: id
 *      in: path
 *      description: the id of the faction book relation
 *      required: true
 *    responses:
 *      200:
 *          description: The following relation was successfully deleted
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/DeleteFactionBookRelation'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/Response404DeleteFactionBookRelation'
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.delete('/factions-books/id/:id', deleteFactionBookRelation.deleteFactionBookRelation);

module.exports = router;
