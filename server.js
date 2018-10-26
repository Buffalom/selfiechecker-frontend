var shell = require('shelljs')
var express = require('express')
var app = express()

shell.exec('npm run build')

app.use(express.static('dist'))

let port = process.env.PORT || 8080
app.listen(port, function () {
  console.log(`App listening on port ${port}!`)
})
