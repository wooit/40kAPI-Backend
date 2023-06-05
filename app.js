const express = require('express');
const bodyParser = require('body-parser');


const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const adminRoutes = require('./routes/adminRoutes');

require('dotenv').config({ path: `.env.local`, override: true });

const app = express()


// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Warhammer API",
            description: "This API aims to reference all books related to the Warhammer 30k and 40k universe",
            contact: {
                name: "Geo",
                url: "https://github.com/wooit",
            },
            servers: ["http://localhost:5000"]
        }
    },
    apis: ['routes/*.js'],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.json())

app.use('/admin', adminRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.listen(process.env.NODE_PORT)