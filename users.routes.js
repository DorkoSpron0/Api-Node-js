const {Router} = require('express')
const pool = require('./dbConfig')
const router = Router()

router.post('/register', (req,res) => {
    const { username, password} = req.body

    pool.query(`INSERT INTO users(username, password) 
        VALUES('${username}', '${password}')`, (err, results) => {
            if (err) throw err
            res.json({msg: "user saved"})
        })

})

router.post('/login', (req,res) => {
    const {username, password} = req.body

    pool.query(`SELECT * FROM users WHERE username = '${username}' AND password = '${password}';`, (err, results) => {
        if(err) throw err

        if(results.rows.length > 0)
        {
            res.json({user: {username, password}})
        } else {
            res.json({msg : "Mano eso no existe :C"})
        }
    })
})

module.exports = router