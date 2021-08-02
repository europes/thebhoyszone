const path = require('path')
const express = require('express')
const ejs = require('ejs')
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 3000 

const public = path.join(__dirname, '../public')
const views = path.join(__dirname, '../templates/views')
const partials = path.join(__dirname, '../templates/partials')

app.set('view engine', 'ejs')
app.set('views', views) 

app.use(bodyParser.json())
app.use(express.static(public))
app.use(bodyParser.urlencoded({ extended: true}))





app.get('', (req, res) => {
    res.render('index')
  })
  

  app.get('/squad', (req, res) => {
    res.render('squad')
  })

  app.get('/fixtures', (req, res) => {
    res.render('fixtures')
  })



  app.listen(port, () => {
    console.log('Server is up on port ' + port)
  })
  
  