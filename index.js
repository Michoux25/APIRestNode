const http = require('http');
const express = require('express');
const router = require("./routes/routes");
const bodyParser = require("body-parser");
const swagger = require('swagger-ui-express');

var port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin@localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true,  autoIndex: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur lors de la connexion'));
db.once('open', function (){
    console.log("Connexion à la base OK");
});

app.use("/todo", router);

app.listen(port, () => console.log(`App listen on port : ${port}`));