const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { response } = require('express');
const db = require('./queries');
const { Pool } = require('pg/lib');

app.use(express.json());


app.get('/', (req, res) => {
    return res.json({message: 'CHEGA JUNTO ANDORNHO'});

});
app.get('/all', db.getAll);

app.post("/add",  async (req, res) => {
    try{
        const  newData  = req.body ;
        console.log(newData['username'])
        const newUser = await db.pool.query(
            'INSERT INTO testando (username, userdate)  VALUES ($1 , $2) RETURNING *', [newData['username'], newData['userdate']]
        );

        res.json(req.body);
        // res.json({message: 'CHEGA JUNTO ANDORNHO'});
        }catch(err){
            console.error(err.message)
        } 
})

const port = 3333;
app.listen(port, () => { 
    console.log("Olha eu aquiiii nessa bagaça");
});

