const data = require('./data.json');
const about = require('./about.json');
const express = require('express');
const app = express();

app.get('/api/products', (req,res) =>{
    res.status(200).json(data);
});

app.get('/info', (req,res) =>{
    res.status(200).send(`
    <h1>Our store has info for ${data.length} products</h1>
    <h1>${Date()}</h1>
    `);
});

app.get('/about', (req,res) =>{
    res.status(200).json(about);
});

app.listen(8080);