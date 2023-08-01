const express = require('express');
const router = express.Router();

const getAllMainCharactersBooksRelations = require("../controllers/main_characters_books/getAllMainCharactersBookRelationsController");
const getAllMainCharacterFromBookID = require("../controllers/main_characters_books/getAllMainCharactersFromBookIdController");
const getAllBooksFromMainCharacterId = require("../controllers/main_characters_books/getAllBooksFromMainCharacterIdController");
const deleteMainCharacterBookRelation = require("../controllers/main_characters_books/deleteMainCharacterBookRelationController");
const createMainCharacterBookRelation = require("../controllers/main_characters_books/createMainCharacterBookRelationController");

/**
 * @openapi
 * components:
 *   schema:
 *     GetAllMainCharactersBooksRelations:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         mainCharacterId:
 *           type: integer
 *           example: 1
 *         mainCharacterName:
 *           type: string
 *           example: bob
 *         bookId:
 *           type: integer
 *           example: 42
 *         bookTitle:
 *           type: string
 *           example: The mighty adventures of Bob
 * /main-characters-books:
 *  get:
 *    tags:
 *    - MainCharacters_Books
 *    description: Get all relations between main characters and books
 *    summary: Get all relations between main characters and books
 *    responses:
 *      200:
 *          description: The following relations were successfully fetched
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/GetAllMainCharactersBooksRelations'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.get('/main-characters-books', getAllMainCharactersBooksRelations.getAllMainCharactersBooksRelations);

/**
 * @openapi
 * components:
 *   schema:
 *     GetListMainCharactersFromBookId:
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
 *         is_primarch:
 *           type: integer
 *         is_important:
 *           type: integer
 *         is_leader:
 *           type: integer
 *         main_character:
 *           type: integer
 *         book:
 *           type: integer
 * /main-characters-books/book/{bookId}:
 *  get:
 *    tags:
 *    - MainCharacters_Books
 *    description: Get list of main characters from selected bookId
 *    summary: Get list of main characters from selected bookId
 *    parameters:
 *    - name: bookId
 *      in: path
 *      description: the id of the book
 *      required: true
 *    responses:
 *      200:
 *          description: The following main characters were successfully fetched
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/GetListMainCharactersFromBookId'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.get('/main-characters-books/book/:bookId', getAllMainCharacterFromBookID.getAllMainCharacterFromBookID);

/**
 * @openapi
 * components:
 *   schema:
 *     GetListMainCharactersFromBookId:
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
 *         main_character:
 *           type: integer
 *         book:
 *          type: integer
 * /main-characters-books/main-character/{mainCharacterId}:
 *  get:
 *    tags:
 *    - MainCharacters_Books
 *    description: Get list of books from selected mainCharacterId
 *    summary: Get list of books from selected mainCharacterId
 *    parameters:
 *    - name: mainCharacterId
 *      in: path
 *      description: the id of the mainCharacter
 *      required: true
 *    responses:
 *      200:
 *          description: The following books were successfully fetched
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/GetListMainCharactersFromBookId'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.get('/main-characters-books/main-character/:mainCharacterId', getAllBooksFromMainCharacterId.getAllBooksFromMainCharacterId);

/**
 * @openapi
 * components:
 *   schema:
 *     DeleteMainCharacterBookRelation:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: The main character book relation 42 has been deleted
 *     Response404DeleteMainCharacterBookRelation:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *           example: false
 *         message:
 *           type: string
 *           example: This main character book id doesnt exist
 * /main-characters-books/id/{id}:
 *  delete:
 *    description: Delete a main character book relation selected by its ID
 *    summary: Delete a main character book relation selected by its ID
 *    tags:
 *    - MainCharacters_Books
 *    parameters:
 *    - name: id
 *      in: path
 *      description: the id of the main character book relation
 *      required: true
 *    responses:
 *      200:
 *          description: The following relation was successfully deleted
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/DeleteMainCharacterBookRelation'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/Response404DeleteMainCharacterBookRelation'
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.delete('/main-characters-books/id/:id', deleteMainCharacterBookRelation.deleteMainCharacterBookRelation);

/**
 * @openapi
 * components:
 *   schema:
 *     CreateMainCharacterBookRelation:
 *       type: object
 *       required:
 *        - mainCharacterId
 *        - bookId
 *       properties:
 *         mainCharacterId:
 *           type: integer
 *         bookId:
 *           type: integer
 *     CreateMainCharacterBookResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *         message:
 *           type: string
 *           example: New main character book relation successfully created
 *         relation:
 *           type: object
 *           properties:
 *             mainCharacterId:
 *               type: integer
 *               example: 24
 *             bookId:
 *               type: integer
 *               example: 42
 * /main-characters-books:
 *  post:
 *    tags:
 *    - MainCharacters_Books
 *    description: Create a relation between main character and book
 *    summary: Create a relation between main character and book
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *             $ref: '#/components/schema/CreateMainCharacterBookRelation'
 *    responses:
 *      200:
 *          description:  The following relation was successfully created
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/CreateMainCharacterBookResponse'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.post('/main-characters-books', createMainCharacterBookRelation.createMainCharacterBookRelation);

module.exports = router;