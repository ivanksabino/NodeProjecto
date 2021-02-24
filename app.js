const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send("Lar doce lar")

});

const port = process.env.port || 8080
app.listen(port, () => {
    console.log("Olha eu aquiiii nessa bagaça");
});