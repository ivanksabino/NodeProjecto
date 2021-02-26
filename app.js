const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { response } = require('express');

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (req, res) => {
    return res.json({message: 'CHEGA JUNTO ANDORNHO'});

});

const port = 3333;
app.listen(port, () => {
    console.log("Olha eu aquiiii nessa bagaça");
});


