const express = require('express')
require('dotenv').config()

const dbConnect = require('./config/dbconnect')

const initRoutes = require('./routes')

const app = express()

const port = process.env.PORT || 8888

// gửi theo kiểu json thì đọc được
app.use(express.json())

// gửi theo kiểu urlencoded thì đọc được
app.use(express.urlencoded({ extended: true }))
dbConnect()
initRoutes(app)

app.use('/', (req, res) => {
    res.send('SERVER ONNNN')
})


app.listen(port, () => {
    console.log('Server is running on:' + port)
})