const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(__dirname + '/public'))

app.get('/', (req,res) => {
    res.render('public/index')
})

app.listen(process.env.PORT || 8081)