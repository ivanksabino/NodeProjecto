
require('dotenv').config({ path: '.env' })
const Pool = require('pg').Pool

const pool = new Pool({
    user: "ilitch",
    host: "nodeprojecto.cjkvvca6w7zu.eu-west-2.rds.amazonaws.com",
    database: "postgres",
    password: "ilitch123",
    port: "5432",
})

const getAll = (request, response) => {
    pool.query('SELECT * FROM testando', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
module.exports = {
    getAll
}
