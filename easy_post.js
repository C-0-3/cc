const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded ({extended : false}))

app.use(bodyParser.json())

app.listen(8888)

app.get('/' , (req,res) => {
  console.log(req.body)
  res.json(req.body)  
})
