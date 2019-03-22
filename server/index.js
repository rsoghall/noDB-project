const express = require('express')

const ResultsCtrl = require('./controllers/Results.js')

const app = express();
const port = 4429

app.use(express.json())

const url = `/api/blood/`
app.get(url, ResultsCtrl.get)
app.post(url, ResultsCtrl.create)
app.put(`${url}:id`, ResultsCtrl.update)
app.delete(`${url}:id`, ResultsCtrl.delete)

app.listen(port,() => console.log(`Running on ${port}`))