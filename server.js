'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/', (request,response) => {
    response.sendFile('index.html', {root: './public'});
});

app.use('*', (request, response) => response.send('sorry'))

app.listen(PORT, ()=> console.log(`listen ${PORT}`))


