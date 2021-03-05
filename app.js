const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { response } = require('express');
const db = require('./queries');
const { Pool } = require('pg/lib');

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (req, res) => {
    return res.json({message: 'CHEGA JUNTO ANDORNHO'});

});
app.get('/all', db.getAll);

app.post("/add", async (req, res) =>{
    try{
        const { description } = req.body;
        const newUser = await db.pool.query(
            "INSERT INTO public.testando('userName', 'userDate') VALUES ('ïvanInserido', 'Foi um post');"
        );
        }catch(err){
            console.error(err.message)
        }
})

const port = 3333;
app.listen(port, () => {
    console.log("Olha eu aquiiii nessa bagaça");
});

    