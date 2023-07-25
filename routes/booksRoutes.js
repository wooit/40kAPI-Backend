const express = require('express');
const router = express.Router();

const getBooksController = require("../controllers/book/getAllBooksController");
const deleteBooksController = require("../controllers/book/deleteBookController");
const getBookById = require("../controllers/book/getBookByIdController");
const getBookByTitle = require("../controllers/book/getBookByTitleController");
const postBook = require("../controllers/book/createBookController");
const getTitleBooks = require("../controllers/book/getAllTitlesController");
const updateBook = require("../controllers/book/updateBookController");

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
 *    summary: Get the list of all the books registered
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
router.get('/books', getBooksController.getAllBooks);

/**
 * @openapi
 * components:
 *   schema:
 *     GetBook:
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
 *     Response404:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *           example: false
 *         message:
 *           type: string
 *           example: This Book doesnt exist
 * /book/id/{id}:
 *  get:
 *    description: Get a book selected by its ID
 *    summary: Get a book by its ID
 *    tags:
 *    - Books
 *    parameters:
 *    - name: id
 *      in: path
 *      description: the id of the book
 *      required: true
 *    responses:
 *      200:
 *          description: The following book was successfully fetched
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/GetBook'
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
router.get('/book/id/:id', getBookById.getBookById);

/**
 * @openapi
 * components:
 *   schema:
 *     GetBook:
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
 *     Response404:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *           example: false
 *         message:
 *           type: string
 *           example: This Book doesnt exist
 * /book/title/{title}:
 *  get:
 *    description: Get a book selected by its title
 *    summary: Get a book by its title
 *    tags:
 *    - Books
 *    parameters:
 *    - name: title
 *      in: path
 *      description: the title of the book
 *      required: true
 *    responses:
 *      200:
 *          description: The following book was successfully fetched
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/GetBook'
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
router.get('/book/title/:title', getBookByTitle.getBookByTitle);


/**
 * @openapi
 * components:
 *   schema:
 *     DeleteBook:
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
 *     Response404:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *           example: false
 *         message:
 *           type: string
 *           example: This Book doesnt exist
 * /book/id/{id}:
 *  delete:
 *    description: Delete a book selected by its ID
 *    summary: Delete a book by its ID
 *    tags:
 *    - Books
 *    parameters:
 *    - name: id
 *      in: path
 *      description: the id of the book
 *      required: true
 *    responses:
 *      200:
 *          description: The following book was successfully deleted
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/DeleteBook'
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
router.delete('/book/id/:id', deleteBooksController.deleteABook);

/**
 * @openapi
 * components:
 *   schema:
 *     CreateBook:
 *       type: object
 *       required:
 *        - title
 *        - author
 *        - summary
 *        - releaseDate
 *        - releaseOrder
 *        - imgUrl
 *        - readingOrder
 *        - period
 *        - multipleStories
 *        - serieId
 *       properties:
 *         title:
 *           type: string
 *           example: new book
 *         author:
 *           type: string
 *           example: Bob Bob
 *         summary:
 *           type: string
 *           example: new book summary
 *         releaseDate:
 *           type: string
 *           example: 2023
 *         releaseOrder:
 *           type: integer
 *           example: 1
 *         imgUrl:
 *           type: string
 *           example: url_image
 *         readingOrder:
 *           type: integer
 *           example: 1
 *         period:
 *           type: string
 *           example: period of the book
 *         multipleStories:
 *           type: integer
 *           example: 2
 *         serieId:
 *           type: integer
 *           example: 1
 *     CreateBookResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *         message:
 *           type: string
 *           example: New book successfully added
 *         createdBook:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *               example: new book added
 *             author:
 *               type: string
 *               example: writer name
 *             summary:
 *               type: string
 *               example: new book summary
 *             releaseDate:
 *               type: string
 *               example: 2023
 *             releaseOrder:
 *               type: integer
 *               example: 1
 *             imgUrl:
 *               type: string
 *               example: https://picsum.photos/200/300
 *             readingOrder:
 *               type: integer
 *               example: 1
 *             period:
 *               type: string
 *               example: 30k
 *             multipleStories:
 *               type: integer
 *               example: 2
 *             serieId:
 *               type: integer
 *               example: 1
 * /book:
 *  post:
 *    tags:
 *    - Books
 *    description: Create a new book
 *    summary: Create a book
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *             $ref: '#/components/schema/CreateBook'
 *    responses:
 *      200:
 *          description: A new book has been created
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/CreateBookResponse'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.post('/book', postBook.createBook);

/**
 * @openapi
 * components:
 *   schema:
 *     FetchAllBooksTitleResponse:
 *       type: array
 *       items:
 *         type: string
 *       example: ["First Book Title", "Second Book Title", "Third Book Title"]
 * /title-books:
 *  get:
 *    description: Get the list of titles in an array of all the books registered
 *    summary: Get the list of titles in an array of all the books registered
 *    tags:
 *    - Books
 *    responses:
 *      200:
 *         description: Success
 *         content:
 *             application/json:
 *                 schema:
 *                     $ref: '#/components/schema/FetchAllBooksTitleResponse'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *        description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.get('/title-books', getTitleBooks.getAllTitles);

/**
 * @openapi
 * components:
 *   schema:
 *     UpdateBook:
 *       type: object
 *       required:
 *        - title
 *        - author
 *        - summary
 *        - releaseDate
 *        - releaseOrder
 *        - imgUrl
 *        - readingOrder
 *        - period
 *        - multipleStories
 *        - serieId
 *       properties:
 *         title:
 *           type: string
 *           example: new book
 *         author:
 *           type: string
 *           example: Bob Bob
 *         summary:
 *           type: string
 *           example: new book summary
 *         releaseDate:
 *           type: string
 *           example: 2023
 *         releaseOrder:
 *           type: integer
 *           example: 1
 *         imgUrl:
 *           type: string
 *           example: url_image
 *         readingOrder:
 *           type: integer
 *           example: 1
 *         period:
 *           type: string
 *           example: period of the book
 *         multipleStories:
 *           type: integer
 *           example: 2
 *         serieId:
 *           type: integer
 *           example: 1
 *     UpdateBookResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Update Successful
 *         updatedBook:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *               example: new book added
 *             author:
 *               type: string
 *               example: writer name
 *             summary:
 *               type: string
 *               example: new book summary
 *             releaseDate:
 *               type: string
 *               example: 2023
 *             releaseOrder:
 *               type: integer
 *               example: 1
 *             imgUrl:
 *               type: string
 *               example: https://picsum.photos/200/300
 *             readingOrder:
 *               type: integer
 *               example: 1
 *             period:
 *               type: string
 *               example: 30k
 *             multipleStories:
 *               type: integer
 *               example: 2
 *             serieId:
 *               type: integer
 *               example: 1
 * /book/id/{id}:
 *  patch:
 *    description: Update information related to book selected by its ID
 *    tags:
 *    - Books
 *    summary: Update selected book by its ID
 *    parameters:
 *    - name: id
 *      in: path
 *      description: Id of the book you want to update
 *      required: true
 *    requestBody:
 *      required: true
 *      description: You may include to the request body only the properties you want to update
 *      content:
 *        application/json:
 *          schema:
 *             $ref: '#/components/schema/UpdateBook'
 *    responses:
 *      200:
 *         description: Success
 *         content:
 *             application/json:
 *                 schema:
 *                     $ref: '#/components/schema/UpdateBookResponse'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *        description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.patch('/book/id/:id', updateBook.updateBook);

module.exports = router;