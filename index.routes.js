const {Router} = require('express');
const router = Router();
const pool = require('./dbConfig')

router.get('/', (req,res) => {
    pool.query('SELECT * FROM libros', (err, result) => {
        if(err) throw err
        res.json(result.rows)
    })
})

module.exports = router