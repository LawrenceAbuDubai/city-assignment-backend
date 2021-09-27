'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');

// serevr has all the properities and methods in express
const server = express();

const pokeData = require('./assets/poke.json')

const PORT = process.env.PORT;
server.use(cors());

// localhost:3001/
// https://city-explore-lsa.herokuapp.com/
server.get('/',(req,res)=>{
    res.status(200).send('home route')
})

// localhost:3001/test
// https://city-explore-lsa.herokuapp.com/test
server.get('/test',(request,response)=>{
    response.send('api server is working')
})

// localhost:3001/getPokemon?pokeName=charmander&pokeLevel=10
// https://city-explore-lsa.herokuapp.com/?pokeName=charmander&pokeLevel=10
server.get('/getPokemon',(req,res)=>{
    // res.send(pokeData);

    let pokemonName = req.query.pokeName;
    console.log(req.query);
    console.log(req.query.pokeName)
    let pokeInfo = pokeData.results.find((item)=>{
        if(item.name === pokemonName) {
            return item
        }
        
    })
    console.log('pokeInfo',pokeInfo)
    res.send(pokeInfo)

})

// localhost:3001/ANYTHING
server.get('*',(req,res)=>{
    res.status(404).send('route is not found')
})

server.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`)
})