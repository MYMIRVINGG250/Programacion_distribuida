const express = require("express");
require("dotenv").config();
const app = express();
const { appconfig } = require("./Lib/config");
app.listen(appconfig.port, () => console.log());


// Metodo GET en raiz

app.get('/', function (req, res) {

    res.send('Hola Mundo!');

});

// Metodo GET en una ruta

app.get('/get', function (req, res) {

    res.send('GET de respuesta desde la ruta /get');

});

//........

// Metodo POST en una ruta

app.post('/post', function (req, res) {

    res.send('El mensaje de post se modifica aqui ');

});
// Metodo Post en una ruta expresión irregular

app.post(/.*_search$/, function (req, res) {

    res.send('/.*_search/');

});