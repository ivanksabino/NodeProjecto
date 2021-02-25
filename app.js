const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Lar doce lar");

});
app.get('/healthCheck', (req, res) => {
    res.send("Check");

});

const port = process.env.port || 8080;
app.listen(port, () => {
    console.log("Olha eu aquiiii nessa bagaça");
});

var http = require('http');

http.createServer(onRequest_a).listen(80);

function onRequest_a (req, res) {
    res.write('healthCheck');
    res.end();
  }