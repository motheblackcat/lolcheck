const express = require('express');
const axios = require('axios');
const app = express();
const key = 'RGAPI-5fec8cb3-bb79-44b7-8c5d-452153ddb8d3';

app.get('/api/summoner', (req, res) => {
    axios.get(`https://${req.query.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.query.name}?api_key=${key}`)
        .then(response => {
            res.setHeader('Content-Type', 'application/json');
            res.send(response.data);
        })
});

app.get('/api/league', (req, res) => {
    axios.get(`https://${req.query.region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${req.query.id}?api_key=${key}`)
        .then(response => {
            res.setHeader('Content-Type', 'application/json');
            res.send(response.data);
        })
});

app.get('/api/summonermasteries', (req, res) => {
    axios.get(`https://${req.query.region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${req.query.id}?api_key=${key}`)
        .then(response => {
            res.setHeader('Content-Type', 'application/json');
            res.send(response.data);
        })
});

app.listen(3001);