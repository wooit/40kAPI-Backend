const express = require('express')

require('dotenv').config({ path: `.env.local`, override: true });

const app = express()

app.get('/', function (req, res) {
    res.send('INIT PROJECT')
})

app.listen(process.env.NODE_PORT)