const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send("Lar doce lar")

});

app.listen(3000, () => {
    console.log("Olha eu aquiiii");
});