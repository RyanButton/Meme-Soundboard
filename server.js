const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(__dirname + '/public'))

app.get('/', (req,res) => {
    res.status(200)
    res.render('public/index.html')
})

app.listen(process.env.PORT || 8081)