const express = require('express');
const router = express.Router();

const getAllFactions = require("../controllers/faction/getAllFactionsController");
const getAllFactionsName = require("../controllers/faction/getAllFactionsNameController");
const createFaction = require("../controllers/faction/createFactionContoller");
const getFactionById = require("../controllers/faction/getFactionByIdController");
const deleteFaction = require("../controllers/faction/deleteFactionByIdController");
const updateFaction = require("../controllers/faction/updateFactionController");

/**
 * @openapi
 * components:
 *   schema:
 *     FetchAllFactionsResponse:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           id:
 *             type: integer
 *           name:
 *             type: string
 *           lore:
 *             type: string
 *           img_url:
 *             type: string
 * /factions:
 *  get:
 *    description: Get the list of all the factions registered
 *    summary: Get the list of all the factions registered
 *    tags:
 *    - Factions
 *    responses:
 *      200:
 *         description: Success
 *         content:
 *             application/json:
 *                 schema:
 *                     $ref: '#/components/schema/FetchAllFactionsResponse'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *        description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.get('/factions', getAllFactions.getAllFactions)

/**
 * @openapi
 * components:
 *   schema:
 *     FetchAllFactionsNameResponse:
 *       type: array
 *       items:
 *         type: string
 *       example: ["faction1", "faction2", "faction3"]
 * /name-factions:
 *  get:
 *    description: Get the list of names in an array of all the factions registered
 *    summary:  Get the list of names in an array of all the factions registered
 *    tags:
 *    - Factions
 *    responses:
 *      200:
 *         description: Success
 *         content:
 *             application/json:
 *                 schema:
 *                     $ref: '#/components/schema/FetchAllFactionsNameResponse'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *        description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.get('/name-factions', getAllFactionsName.getAllFactionsName);

/**
 * @openapi
 * components:
 *   schema:
 *     CreateNewFaction:
 *       type: object
 *       required:
 *        - name
 *        - lore
 *        - imgUrl
 *       properties:
 *         name:
 *           type: string
 *           example: new faction
 *         lore:
 *           type: string
 *           example: This is the story of ...
 *         imgUrl:
 *           type: string
 *           example: https://picsum.photos/200/300
 *     CreateNewFactionResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *         message:
 *           type: string
 *           example: New faction successfully added
 *         createdFaction:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: new faction added
 *             lore:
 *               type: string
 *               example: faction lore
 *             imgUrl:
 *               type: string
 *               example: https://picsum.photos/200/300
 * /faction:
 *  post:
 *    tags:
 *    - Factions
 *    description: Create a new faction
 *    summary: Create a faction
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *             $ref: '#/components/schema/CreateNewFaction'
 *    responses:
 *      200:
 *          description: A new faction has been created
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/CreateNewFactionResponse'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.post('/faction', createFaction.createFaction);

/**
 * @openapi
 * components:
 *   schema:
 *     GetFaction:
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
 *     Response404Faction:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *           example: false
 *         message:
 *           type: string
 *           example: This faction doesnt exist
 * /faction/id/{id}:
 *  get:
 *    description: Get a faction selected by its ID
 *    summary: Get a faction by its ID
 *    tags:
 *    - Factions
 *    parameters:
 *    - name: id
 *      in: path
 *      description: the id of the faction
 *      required: true
 *    responses:
 *      200:
 *          description: The following faction was successfully fetched
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/GetFaction'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/Response404Faction'
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.get('/faction/id/:id', getFactionById.getFactionById);

/**
 * @openapi
 * components:
 *   schema:
 *     DeleteFaction:
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
 *     Response404Faction:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *           example: false
 *         message:
 *           type: string
 *           example: This faction doesnt exist
 * /faction/id/{id}:
 *  delete:
 *    description: Delete a faction selected by its ID
 *    summary: Delete a faction by its ID
 *    tags:
 *    - Factions
 *    parameters:
 *    - name: id
 *      in: path
 *      description: the id of the faction
 *      required: true
 *    responses:
 *      200:
 *          description: The following faction was successfully deleted
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/DeleteFaction'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/Response404Faction'
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.delete('/faction/id/:id', deleteFaction.deleteFactionById);

/**
 * @openapi
 * components:
 *   schema:
 *     UpdateFaction:
 *       type: object
 *       required:
 *        - name
 *        - lore
 *        - imgUrl
 *       properties:
 *         name:
 *           type: string
 *           example: update faction name
 *         lore:
 *           type: string
 *           example: the story starts with ...
 *         imgUrl:
 *           type: string
 *           example: https://picsum.photos/200/300
 *     UpdateFactionResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Update Successful
 *         updatedFaction:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: faction name updated
 *             lore:
 *               type: string
 *               example: this all starts with ...
 *             imgUrl:
 *               type: string
 *               example: https://picsum.photos/200/300
 * /faction/id/{id}:
 *  patch:
 *    description: Update information related to faction selected by its ID
 *    tags:
 *    - Factions
 *    summary: Update selected faction by its ID
 *    parameters:
 *    - name: id
 *      in: path
 *      description: Id of the faction you want to update
 *      required: true
 *    requestBody:
 *      required: true
 *      description: You may include to the request body only the properties you want to update
 *      content:
 *        application/json:
 *          schema:
 *             $ref: '#/components/schema/UpdateFaction'
 *    responses:
 *      200:
 *         description: Success
 *         content:
 *             application/json:
 *                 schema:
 *                     $ref: '#/components/schema/UpdateFactionResponse'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *        description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.patch('/faction/id/:id', updateFaction.updateFaction);

module.exports = router;