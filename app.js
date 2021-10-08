const express = require("express");
const bodyParser = require("body-parser");
const decRoute = require("./Routes/decRoute");
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//systeme de template
app.set("view engine", "ejs");
app.use(express.static("Public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

//routes
app.use(decRoute);

app.listen(3000, () => {
  console.log("le server écoute sur le port 3000");
});
