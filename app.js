const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { response } = require('express');
const db = require('./queries')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (req, res) => {
    return res.json({message: 'CHEGA JUNTO ANDORNHO'});

});
app.get('/all', db.getAll)

const port = 3333;
app.listen(port, () => {
    console.log("Olha eu aquiiii nessa bagaça");
});

