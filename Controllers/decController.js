const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser')

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}));

app.use(bodyParser.json())

let date = new Date()
let dd = String(date.getDate()).padStart(2, '0');
let mm = String(date.getMonth() + 1).padStart(2, '0');
let yyyy = date.getFullYear()
date = yyyy + '-' + mm + '-' + dd

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'evans',
    password: 'root',
    database: 'sqlrqv'
})

connection.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('base de donné connecter')
    }
})


const accueil = (req, res)=>{
    res.render('index', {title: "Création de Déclaration de Vol"});
}

const apercu = (req, res)=>{
    let data = req.body;
    res.render('apercu', {title: "Apuçu de La Déclaration de Vol", data, date});
    console.log(data);
}

const dec_post = (req, res) => {
    connection.query('INSERT INTO eleve(id_classe, nom_prenom, id_montant, date_arriver) VALUES(?, ?, ?, ?)', [req.body.classe, req.body.nom, req.body.montant, date], (err, row, fields) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('inscription')
        }
    });
}

module.exports = {
    accueil,
    apercu,
    dec_post,
}