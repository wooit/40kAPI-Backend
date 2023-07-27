const express = require('express');
const router = express.Router();

const getAllMainCharacters = require("../controllers/main_character/getAllMainCharactersController");
const getMainCharacterById = require("../controllers/main_character/getMainCharacterByIdController");
const createMainCharacter = require("../controllers/main_character/createMainCharacterController");
const deleteMainCharacter = require("../controllers/main_character/deleteMainCharacterByIdController");
const getAllMainCharactersName = require("../controllers/main_character/getAllMainCharactersNamesController");
const updateMainCharacter = require("../controllers/main_character/updateMainCharacterByIdController");

/**
 * @openapi
 * components:
 *   schema:
 *     FetchAllMainCharactersResponse:
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
 *           is_primarch:
 *             type: boolean
 *           is_leader:
 *             type: boolean
 *           is_important:
 *             type: boolean
 * /main-characters:
 *  get:
 *    description: Get the list of all the main characters registered
 *    summary: Get the list of all the main characters registered
 *    tags:
 *    - Main Characters
 *    responses:
 *      200:
 *         description: Success
 *         content:
 *             application/json:
 *                 schema:
 *                     $ref: '#/components/schema/FetchAllMainCharactersResponse'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *        description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.get('/main-characters', getAllMainCharacters.getAllMainCharacters);

/**
 * @openapi
 * components:
 *   schema:
 *     GetMainCharacter:
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
 *           type: boolean
 *         is_important:
 *           type: boolean
 *         is_leader:
 *           type: boolean
 *     Response404:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *           example: false
 *         message:
 *           type: string
 *           example: This Main Character doesnt exist
 * /main-character/id/{id}:
 *  get:
 *    description: Get a main character selected by its ID
 *    summary: Get a main character by its ID
 *    tags:
 *    - Main Characters
 *    parameters:
 *    - name: id
 *      in: path
 *      description: the id of the main character
 *      required: true
 *    responses:
 *      200:
 *          description: The following book was successfully fetched
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/GetMainCharacter'
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
router.get('/main-character/id/:id', getMainCharacterById.getMainCharacterById);

/**
 * @openapi
 * components:
 *   schema:
 *     CreateNewMainCharacter:
 *       type: object
 *       required:
 *        - name
 *        - lore
 *        - imgUrl
 *        - isPrimarch
 *        - isImportant
 *        - isLeader
 *       properties:
 *         name:
 *           type: string
 *           example: new main character
 *         lore:
 *           type: string
 *           example: This is the story of ...
 *         imgUrl:
 *           type: string
 *           example: https://picsum.photos/200/300
 *         isPrimarch:
 *           type: boolean
 *           example: true
 *         isImportant:
 *           type: boolean
 *           example: true
 *         isLeader:
 *           type: boolean
 *           example: true
 *     CreateNewMainCharacterResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *         message:
 *           type: string
 *           example: New main character successfully added
 *         createdMainCharacter:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: new main character added
 *             lore:
 *               type: string
 *               example: main character lore
 *             imgUrl:
 *               type: string
 *               example: https://picsum.photos/200/300
 *             isPrimarch:
 *               type: boolean
 *               example: true
 *             isImportant:
 *               type: boolean
 *               example: true
 *             isLeader:
 *               type: boolean
 *               example: true
 * /main-character:
 *  post:
 *    tags:
 *    - Main Characters
 *    description: Create a new main character
 *    summary: Create a main character
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *             $ref: '#/components/schema/CreateNewMainCharacter'
 *    responses:
 *      200:
 *          description: A new main character has been created
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/CreateNewMainCharacterResponse'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.post('/main-character', createMainCharacter.createMainCharacter);

/**
 * @openapi
 * components:
 *   schema:
 *     DeleteMainCharacter:
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
 *         isPrimarch:
 *           type: boolean
 *         isImportant:
 *           type: boolean
 *         isLeader:
 *           type: boolean
 *     Response404MainCharacter:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *           example: false
 *         message:
 *           type: string
 *           example: This main character doesnt exist
 * /main-character/id/{id}:
 *  delete:
 *    description: Delete a main character selected by its ID
 *    summary: Delete a main character by its ID
 *    tags:
 *    - Main Characters
 *    parameters:
 *    - name: id
 *      in: path
 *      description: the id of the main character
 *      required: true
 *    responses:
 *      200:
 *          description: The following main character was successfully deleted
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/DeleteMainCharacter'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *          description: Not Found – the requested resource does not exist
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/Response404MainCharacter'
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.delete('/main-character/id/:id', deleteMainCharacter.deleteMainCharacterById);

/**
 * @openapi
 * components:
 *   schema:
 *     FetchAllMainCharactersNameResponse:
 *       type: array
 *       items:
 *         type: string
 *       example: ["mainCharacter1", "mainCharacter2", "mainCharacter3"]
 * /name-main-characters:
 *  get:
 *    description: Get the list of names in an array of all the main characters registered
 *    summary:  Get the list of names in an array of all the characters registered
 *    tags:
 *    - Main Characters
 *    responses:
 *      200:
 *         description: Success
 *         content:
 *             application/json:
 *                 schema:
 *                     $ref: '#/components/schema/FetchAllMainCharactersNameResponse'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *        description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.get('/name-main-characters', getAllMainCharactersName.getAllMainCharactersName);

/**
 * @openapi
 * components:
 *   schema:
 *     UpdateMainCharacter:
 *       type: object
 *       required:
 *        - name
 *        - lore
 *        - imgUrl
 *        - isPrimarch
 *        - isImportant
 *        - isLeader
 *       properties:
 *         name:
 *           type: string
 *           example: new main character
 *         lore:
 *           type: string
 *           example: the story starts with ...
 *         imgUrl:
 *           type: string
 *           example: https://picsum.photos/200/300
 *         is_primarch:
 *           type: boolean
 *           example: false
 *         is_important:
 *           type: boolean
 *           example: false
 *         is_leader:
 *           type: boolean
 *           example: false
 *     UpdateMainCharacterResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Update Successful
 *         updatedMainCharacter:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: new main character updated
 *             lore:
 *               type: string
 *               example: this all starts with ...
 *             imgUrl:
 *               type: string
 *               example: https://picsum.photos/200/300
 *             is_primarch:
 *               type: boolean
 *               example: false
 *             is_important:
 *               type: boolean
 *               example: false
 *             is_leader:
 *               type: boolean
 *               example: false
 * /main-character/id/{id}:
 *  patch:
 *    description: Update information related to main character selected by its ID
 *    tags:
 *    - Main Characters
 *    summary: Update selected main character by its ID
 *    parameters:
 *    - name: id
 *      in: path
 *      description: Id of the main character you want to update
 *      required: true
 *    requestBody:
 *      required: true
 *      description: You may include to the request body only the properties you want to update
 *      content:
 *        application/json:
 *          schema:
 *             $ref: '#/components/schema/UpdateMainCharacter'
 *    responses:
 *      200:
 *         description: Success
 *         content:
 *             application/json:
 *                 schema:
 *                     $ref: '#/components/schema/UpdateMainCharacterResponse'
 *      400:
 *       description: Bad Request – client sent an invalid request, such as lacking required request body or parameter
 *      404:
 *        description: Not Found – the requested resource does not exist
 *      500:
 *        description: Internal Server Error – a generic error occurred on the server
 *      503:
 *        description: Service Unavailable – the requested service is not available
 */
router.patch('/main-character/id/:id', updateMainCharacter.updateMainCharacter);

module.exports = router;