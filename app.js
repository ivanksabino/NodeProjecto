const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Lar doce lar");

});

const port = 8081;
app.listen(port, () => {
    console.log("Olha eu aquiiii nessa bagaça");
});


