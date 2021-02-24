const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send("Lar doce lar")

});

const port = process.env.port || 3000
app.listen(3000, () => {
    console.log("Olha eu aquiiii");
});