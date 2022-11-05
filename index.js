const express = require('express');
const app = express();
const cors = require('cors');
const productRouter = require('./routes/v1/product.route');
const brandRouter = require('./routes/v1/brand.route');


// middleware
app.use(cors());
app.use(express.json());

// router
app.use('/api/v1/product', productRouter);
app.use('/api/v1/brand', brandRouter);


app.get('/',(req,res)=>{
    res.send(`<h1>Congratulations !!! Server is running...</h1>`);
});



module.exports= app;