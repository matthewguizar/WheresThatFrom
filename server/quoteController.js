require("dotenv").config();
const movieQuote = require('popular-movie-quotes');


module.exports = {
    quoteOfTheDay: (req, res) => {
        const data  = (movieQuote.getQuotesByMovie('Scarface'))
        res.status(200).send(data[1])
        ;
    },

    someQuotes: (req, res) => {
        const data = movieQuote.getSomeRandom(1)
        console.log(data)
        // console.log(data[1].quote)
        res.status(200).send(data)
        
        
        
        
        
    },

    getQuotesByMovie: (req, res) => {
     const {search } = req.query 
        const data  = (movieQuote.getQuotesByMovie(search))
        res.status(200).send(data[0])
        
        ;
    }
   
}
