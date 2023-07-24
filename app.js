const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');



const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const adminRoutes = require('./routes/adminRoutes');
const booksRoutes = require('./routes/booksRoutes');
const authorsRoutes = require('./routes/authorsRoutes');
const authRoutes = require('./routes/authRoutes');

require('dotenv').config({ path: `.env.local`, override: true });

const app = express()


// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
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
    apis: ["routes/*.js", "models/*.js", "controllers/*/*.js"],
    // apis: ["routes/*.js"],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'PATCH'],
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.json())


app.use('/admin', adminRoutes);
app.use( booksRoutes);
app.use( authorsRoutes);
app.use( '/auth', authRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(process.env.NODE_PORT)