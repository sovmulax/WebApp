const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser')

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

//app.use('/static', express.static(__dirname + '/public'));

app.use(express.urlencoded({
    extended: true
}));

app.use(bodyParser.json())

let date = new Date()
let dd = String(date.getDate()).padStart(2, '0');
let mm = String(date.getMonth() + 1).padStart(2, '0');
let yyyy = date.getFullYear()
date = yyyy + '-' + mm + '-' + dd

const accueil = (req, res)=>{
    res.render('index', {title: "Création de Déclaration de Vol"});
}

const apercu = (req, res)=>{
    let data = req.body;
    res.render('apercu', {title: "Apuçu de La Déclaration de Vol", data, date});
    console.log(data);
}
module.exports = {
    accueil,
    apercu,
}