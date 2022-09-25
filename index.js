const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');


// middleware
app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('This is home route');
})

module.exports= app;