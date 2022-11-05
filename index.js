const express = require('express');
const app = express();
const cors = require('cors');
const productRouter = require('./routes/v1/product.route');
const brandRouter = require('./routes/v1/brand.route');
const categoryRouter = require('./routes/v1/category.route');


// middleware
app.use(cors());
app.use(express.json());

// router
app.use('/api/v1/product', productRouter);
app.use('/api/v1/brand', brandRouter);
app.use('/api/v1/category', categoryRouter);


app.get('/',(req,res)=>{
    res.send(`<h1>Congratulations !!! Server is running...</h1>`);
});



module.exports= app;