const express = require('express');
const router = express.Router();
const getAllBooksFromAuthorID = require("../controllers/authors_books/getBooksFromSelectedAuthorController");
const createAuthorBookRelation = require("../controllers/authors_books/createAuthorsBooksController");
const getAllAuthorsBooksRelations = require("../controllers/authors_books/getAllAuthorsBooksRelationsController");
const deleteAuthorBookRelation = require("../controllers/authors_books/deleteAuthorBookRelationController");
const getAllAuthorsFromBookID = require("../controllers/authors_books/getAllAuthorsFromSelectedBookController");

// WARNING i will need a route for getting all authors from one book when i will be getting to this special case

/**
 * @openapi
 * components:
 *   schema:
 *     GetAllAuthorsBooksRelations:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         authorId:
 *           type: integer
 *           example: 1
 *         authorName:
 *           type: string
 *           example: bob
 *         bookId:
 *           type: integer
 *           example: 42
 *         bookTitle:
 *           type: string
 *           example: The mighty adventures of Bob
 * /authors-books:
 *  get:
 *    tags:
 *    - Authors_Books
 *    description: Get all relations between authors and books
 *    summary: Get all relations between authors and books
 *    responses:
 *      200:
 *          description: The following relations were successfully fetched
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/GetAllAuthorsBooksRelations'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.get('/authors-books', getAllAuthorsBooksRelations.getAllAuthorsBooksRelations);

/**
 * @openapi
 * components:
 *   schema:
 *     GetListBooksFromAuthorId:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
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
 *         reading_order:
 *           type: integer
 *         period:
 *           type: string
 *         multiple_stories:
 *           type: integer
 *         serie_id:
 *           type: integer
 *         title:
 *           type: string
 * /authors-books/author/{authorId}:
 *  get:
 *    tags:
 *    - Authors_Books
 *    description: Get list of books from selected authorId
 *    summary: Get list of books from selected authorId
 *    parameters:
 *    - name: authorId
 *      in: path
 *      description: the id of the author
 *      required: true
 *    responses:
 *      200:
 *          description: The following books were successfully fetched
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/GetListBooksFromAuthorId'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.get('/authors-books/author/:authorId', getAllBooksFromAuthorID.getAllBooksFromAuthorID);

/**
 * @openapi
 * components:
 *   schema:
 *     GetListAuthorsFromBookId:
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
 *         author:
 *           type: integer
 *         book:
 *           type: integer
 * /authors-books/book/{bookId}:
 *  get:
 *    tags:
 *    - Authors_Books
 *    description: Get list of authors from selected bookId. Most of the time, 1 author only will be fetched, but this route is useful when a book includes various small stories written by different authors
 *    summary: Get list of authors from selected bookId
 *    parameters:
 *    - name: bookId
 *      in: path
 *      description: the id of the book
 *      required: true
 *    responses:
 *      200:
 *          description: The following authors were successfully fetched
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/GetListAuthorsFromBookId'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.get('/authors-books/book/:bookId', getAllAuthorsFromBookID.getAllAuthorsFromBookID);

/**
 * @openapi
 * components:
 *   schema:
 *     CreateAuthorBookRelation:
 *       type: object
 *       required:
 *        - authorId
 *        - bookId
 *       properties:
 *         authorId:
 *           type: integer
 *         bookId:
 *           type: integer
 *     CreateAuthorBookResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *         message:
 *           type: string
 *           example: New author book relation successfully created
 *         relation:
 *           type: object
 *           properties:
 *             authorId:
 *               type: integer
 *               example: 24
 *             bookId:
 *               type: integer
 *               example: 42
 * /authors-books:
 *  post:
 *    tags:
 *    - Authors_Books
 *    description: Create a relation between author and book
 *    summary: Create a relation between author and book
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *             $ref: '#/components/schema/CreateAuthorBookRelation'
 *    responses:
 *      200:
 *          description: The following book was successfully fetched
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/CreateAuthorBookResponse'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.post('/authors-books', createAuthorBookRelation.createAuthorBookRelation);

/**
 * @openapi
 * components:
 *   schema:
 *     DeleteAuthorBookRelation:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: The author book relation 42 has been deleted
 *     Response404DeleteAuthorBookRelation:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *           example: false
 *         message:
 *           type: string
 *           example: This author book id doesnt exist
 * /authors-books/id/{id}:
 *  delete:
 *    description: Delete a author book relation selected by its ID
 *    summary: Delete a author book relation selected by its ID
 *    tags:
 *    - Authors_Books
 *    parameters:
 *    - name: id
 *      in: path
 *      description: the id of the author book relation
 *      required: true
 *    responses:
 *      200:
 *          description: The following relation was successfully deleted
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/DeleteAuthorBookRelation'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/Response404DeleteAuthorBookRelation'
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.delete('/authors-books/id/:id', deleteAuthorBookRelation.deleteAuthorBookRelation);

module.exports = router;
