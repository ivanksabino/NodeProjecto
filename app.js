const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Lar doce lar");

});
app.get('/healthCheck', (req, res) => {
    res.send(res);

});

const port = process.env.port || 8080;
app.listen(port, () => {
    console.log("Olha eu aquiiii nessa bagaça");
});

app.listen(80, () => {
    console.log("ta ok essa porta");
});

