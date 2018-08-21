require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller= require('./controller');

const app = express();

app.use(bodyParser.json());

//express.static? -> in combo with npm run build

// massive
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected')
})

//-->>  endpoints <<--// 
//Shelves
app.get('/api/shelf/:id', controller.readShelf)
//Bins
app.get('/api/bin/:id', controller.readBin)
app.put('/api/bin/:id', controller.update)
// app.delete('/api/bin/:id', controller.delete)
app.put('/api/bins/:id', controller.delete)


const port = process.env.SERVER_PORT || 3076;
app.listen(port, () => {
    console.log(`Server is up: ${port}`)
})
