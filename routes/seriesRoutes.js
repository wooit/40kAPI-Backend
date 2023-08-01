const express = require('express');
const router = express.Router();

const getAllSeries = require("../controllers/serie/getAllSeriesController");
const getSerieById = require("../controllers/serie/getSerieByIdController");
const createSerie = require('../controllers/serie/createSerieController');
const deleteSerie = require('../controllers/serie/deleteSerieByIdController');
const getAllSeriesName = require('../controllers/serie/getAllSeriesNameController');
const updateSerie = require('../controllers/serie/updateSerieController');

/**
 * @openapi
 * components:
 *   schema:
 *     FetchAllSeriesResponse:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           id:
 *             type: integer
 *           name:
 *             type: string
 *           summary:
 *             type: string
 * /series:
 *  get:
 *    description: Get the list of all the series registered
 *    summary: Get the list of all the series registered
 *    tags:
 *    - Series
 *    responses:
 *      200:
 *         description: Success
 *         content:
 *             application/json:
 *                 schema:
 *                     $ref: '#/components/schema/FetchAllSeriesResponse'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *        description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.get('/series', getAllSeries.getAllSeries);

/**
 * @openapi
 * components:
 *   schema:
 *     GetSerie:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         summary:
 *           type: string
 *     Response404:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *           example: false
 *         message:
 *           type: string
 *           example: This serie doesnt exist
 * /serie/id/{id}:
 *  get:
 *    description: Get a serie selected by its ID
 *    summary: Get a serie by its ID
 *    tags:
 *    - Series
 *    parameters:
 *    - name: id
 *      in: path
 *      description: the id of the serie
 *      required: true
 *    responses:
 *      200:
 *          description: The following serie was successfully fetched
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/GetSerie'
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
router.get('/serie/id/:id', getSerieById.getSerieById);

/**
 * @openapi
 * components:
 *   schema:
 *     CreateSerie:
 *       type: object
 *       required:
 *        - name
 *        - summary
 *       properties:
 *         name:
 *           type: string
 *           example: new serie
 *         summary:
 *           type: string
 *           example: new serie summary
 *     CreateSerieResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *         message:
 *           type: string
 *           example: New serie successfully added
 *         createdBook:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: new serie added
 *             summary:
 *               type: string
 *               example: new serie summary
 * /serie:
 *  post:
 *    tags:
 *    - Series
 *    description: Create a new serie
 *    summary: Create a serie
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *             $ref: '#/components/schema/CreateSerie'
 *    responses:
 *      200:
 *          description: A new serie has been created
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/CreateSerieResponse'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.post('/serie', createSerie.createBook);

/**
 * @openapi
 * components:
 *   schema:
 *     DeleteSerie:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         summary:
 *           type: string
 *     Response404Serie:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *           example: false
 *         message:
 *           type: string
 *           example: This Serie doesnt exist
 * /serie/id/{id}:
 *  delete:
 *    description: Delete a serie selected by its ID
 *    summary: Delete a serie by its ID
 *    tags:
 *    - Series
 *    parameters:
 *    - name: id
 *      in: path
 *      description: the id of the serie
 *      required: true
 *    responses:
 *      200:
 *          description: The following serie was successfully deleted
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/DeleteSerie'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/Response404Serie'
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.delete('/serie/id/:id', deleteSerie.deleteSerie);

/**
 * @openapi
 * components:
 *   schema:
 *     FetchAllSeriesNameResponse:
 *       type: array
 *       items:
 *         type: string
 *       example: ["serie1", "serie2", "serie3"]
 * /name-series:
 *  get:
 *    description: Get the list of names in an array of all the series registered
 *    summary:  Get the list of names in an array of all the series registered
 *    tags:
 *    - Series
 *    responses:
 *      200:
 *         description: Success
 *         content:
 *             application/json:
 *                 schema:
 *                     $ref: '#/components/schema/FetchAllSeriesNameResponse'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *        description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.get('/name-series', getAllSeriesName.getAllSeriesName);

/**
 * @openapi
 * components:
 *   schema:
 *     UpdateSerie:
 *       type: object
 *       required:
 *        - name
 *        - summary
 *       properties:
 *         name:
 *           type: string
 *           example: modified serie name
 *         summary:
 *           type: string
 *           example: modified summary
 *     UpdateSerieResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Update Successful
 *         UpdateSerie:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: new modified name
 *             summary:
 *               type: string
 *               example: new modified summary
 * /serie/id/{id}:
 *  patch:
 *    description: Update information related to the serie selected by its ID
 *    tags:
 *    - Series
 *    summary: Update selected serie by its ID
 *    parameters:
 *    - name: id
 *      in: path
 *      description: Id of the serie you want to update
 *      required: true
 *    requestBody:
 *      required: true
 *      description: You may include to the request body only the properties you want to update
 *      content:
 *        application/json:
 *          schema:
 *             $ref: '#/components/schema/UpdateSerie'
 *    responses:
 *      200:
 *         description: Success
 *         content:
 *             application/json:
 *                 schema:
 *                     $ref: '#/components/schema/UpdateSerieResponse'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *        description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.patch('/serie/id/:id', updateSerie.updateSerie);

module.exports = router;