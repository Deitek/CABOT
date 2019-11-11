var express = require('express');
var app = express();
var cabotScrapper = require ('./services/cabotscrapper.js');
var bodyParser = require('body-parser');

app.use(express.static("public"));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Servidor de procesos en ejecucion');
});

app.post('/scrapping', function(req, res) {
  console.log("Ejecute el servicio", req.body.url);
  var response = cabotScrapper.scrapePage(req.body.url, req.body.question);
  res.send({ data: response});
});

app.listen(3000, function () {
  console.log('localhost:3000');
});