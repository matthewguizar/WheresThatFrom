const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

const {getQuotesByMovie, quoteOfTheDay, someQuotes} = require('./quoteController')


app.use(express.static('public'))
app.use(express.json())
app.use(cors())


app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/api/quote', quoteOfTheDay)
app.get('/api/random-quotes', someQuotes)
app.post('/api/quote/answer', quoteOfTheDay)
app.get(`/api/search`, getQuotesByMovie)

const SERVER_PORT = process.env.PORT || 5050


app.listen(SERVER_PORT, () => {
console.log(`listening on ${SERVER_PORT}`);
})