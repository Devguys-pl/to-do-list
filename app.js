const express = require('express');             // podłączenie do głównego pliku expressa
const exphbs  = require('express-handlebars');      // zaimplementowanie handlebarsów do aplikacji naszej
const {urlencoded} = require("express");
// const {db} = require('./utils/db');

const app = express();
const hbs = exphbs.create({ /* config */ });
app.use(express.urlencoded({
        extended: true,
    }));

app.use(express.static('public'));     // używanie plików statycznych będących w folderze "public"
app.use(express.json());
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.listen(3000, 'localhost', () => {           // ustawienie nasłuchiwania na port 3000
    console.log('App started http://localhost:3000')
});