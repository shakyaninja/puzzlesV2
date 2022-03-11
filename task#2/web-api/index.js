'use strict';

const express = require('express');

// Constants
const PORT = 9000;
const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hi , Go to http://${HOST}:${PORT}/api/email for result as mentioned in task#2');
});

app.get('/api/email',(req,res) => {
    res.json({
        "displayName": "Luja Shakya",
        "emailAddress": "shakyaluja445@gmail.com"
    })
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
console.log(`Go to http://${HOST}:${PORT}/api/email`);
