const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const port = 3000

app.use(express.json())

app.use('/user', require('./routes/user'))
app.use('/todo', require('./routes/todo'))


app.listen(port, () => {    
    console.log(`started listening  ${port}`)
})