const express = require('express');
const router = express.Router();

const getAllMainCharactersFactionsRelations = require("../controllers/main_characters_factions/getAllMainCharacterFactionRelationsController");
const deleteMainCharacterBookRelation = require("../controllers/main_characters_factions/deleteMainCharacterFactionRelationController");
const createMainCharacterFactionRelation = require("../controllers/main_characters_factions/createMainCharacterFactionRelationController");
const getAllMainCharactersFromFactionId = require("../controllers/main_characters_factions/getAllMainCharactersFromFactionIdController");
const getAllFactionsFromMainCharacterID = require("../controllers/main_characters_factions/getAllFactionsFromMainCharacterIdController");

/**
 * @openapi
 * components:
 *   schema:
 *     GetAllMainCharactersFactionsRelations:
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
 *         factionId:
 *           type: integer
 *           example: 42
 *         factionName:
 *           type: string
 *           example: The bad guys
 * /main-characters-factions:
 *  get:
 *    tags:
 *    - MainCharacters_Factions
 *    description: Get all relations between main characters and factions
 *    summary: Get all relations between main characters and factions
 *    responses:
 *      200:
 *          description: The following relations were successfully fetched
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/GetAllMainCharactersFactionsRelations'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.get('/main-characters-factions', getAllMainCharactersFactionsRelations.getAllMainCharactersFactionsRelations);

/**
 * @openapi
 * components:
 *   schema:
 *     DeleteMainCharacterFactionRelation:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: The main character faction relation 42 has been deleted
 *     Response404DeleteMainCharacterFactionRelation:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *           example: false
 *         message:
 *           type: string
 *           example: This main character faction id doesnt exist
 * /main-characters-factions/id/{id}:
 *  delete:
 *    description: Delete a main character faction relation selected by its ID
 *    summary: Delete a main character faction relation selected by its ID
 *    tags:
 *    - MainCharacters_Factions
 *    parameters:
 *    - name: id
 *      in: path
 *      description: the id of the main character faction relation
 *      required: true
 *    responses:
 *      200:
 *          description: The following relation was successfully deleted
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/DeleteMainCharacterFactionRelation'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/Response404DeleteMainCharacterFactionRelation'
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.delete('/main-characters-factions/id/:id', deleteMainCharacterBookRelation.deleteMainCharacterBookRelation);

/**
 * @openapi
 * components:
 *   schema:
 *     CreateMainCharacterFactionRelation:
 *       type: object
 *       required:
 *        - mainCharacterId
 *        - factionId
 *       properties:
 *         mainCharacterId:
 *           type: integer
 *         factionId:
 *           type: integer
 *     CreateMainCharacterFactionResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *         message:
 *           type: string
 *           example: New main character faction relation successfully created
 *         relation:
 *           type: object
 *           properties:
 *             mainCharacterId:
 *               type: integer
 *               example: 24
 *             factionId:
 *               type: integer
 *               example: 42
 * /main-characters-factions:
 *  post:
 *    tags:
 *    - MainCharacters_Factions
 *    description: Create a relation between faction and main character
 *    summary: Create a relation between faction and main character
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *             $ref: '#/components/schema/CreateMainCharacterFactionRelation'
 *    responses:
 *      200:
 *          description: The following relation was successfully created
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/CreateMainCharacterFactionResponse'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.post('/main-characters-factions', createMainCharacterFactionRelation.createMainCharacterFactionRelation);

/**
 * @openapi
 * components:
 *   schema:
 *     GetListMainCharactersFromFactionId:
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
 *         faction:
 *           type: integer
 * /main-characters-factions/faction/{factionId}:
 *  get:
 *    tags:
 *    - MainCharacters_Factions
 *    description: Get list of main characters from selected factionId
 *    summary: Get list of main characters from selected factionId
 *    parameters:
 *    - name: factionId
 *      in: path
 *      description: the id of the faction
 *      required: true
 *    responses:
 *      200:
 *          description: The following main characters were successfully fetched
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/GetListMainCharactersFromFactionId'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.get('/main-characters-factions/faction/:factionId', getAllMainCharactersFromFactionId.getAllMainCharactersFromFactionId);

/**
 * @openapi
 * components:
 *   schema:
 *     GetListFactionsFromMainCharacterId:
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
 *         main_character:
 *           type: integer
 *         faction:
 *           type: integer
 * /main-characters-factions/main-character/{mainCharacterId}:
 *  get:
 *    tags:
 *    - MainCharacters_Factions
 *    description: Get list of factions from selected mainCharacterId
 *    summary: Get list of factions from selected mainCharacterId
 *    parameters:
 *    - name: mainCharacterId
 *      in: path
 *      description: the id of the main character
 *      required: true
 *    responses:
 *      200:
 *          description: The following factions were successfully fetched
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/GetListFactionsFromMainCharacterId'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.get('/main-characters-factions/main-character/:mainCharacterId', getAllFactionsFromMainCharacterID.getAllFactionsFromMainCharacterID);

module.exports = router;
