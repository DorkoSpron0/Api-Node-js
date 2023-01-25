const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api', require('./index.routes'))
app.use('/users', require('./users.routes'))

app.listen(5050, () => {
    console.log('Server started on port 5050')
})