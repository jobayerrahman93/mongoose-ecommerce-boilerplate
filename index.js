const express = require('express');
const app = express();
const cors = require('cors');
const productRouter = require('./routes/v1/product.route');
const brandRouter = require('./routes/v1/brand.route');
const storeRouter = require('./routes/v1/store.route');
const catergoryRouter = require('./routes/v1/category.route');
const supplierRouter = require('./routes/v1/supplier.route');
const stockRouter = require('./routes/v1/stock.route');
const userRouter = require('./routes/v1/user.route');



// middleware
app.use(cors());
app.use(express.json());

// router
app.use('/api/v1/product', productRouter);
app.use('/api/v1/brand', brandRouter);
app.use('/api/v1/category', catergoryRouter);
app.use('/api/v1/store', storeRouter);
app.use('/api/v1/supplier', supplierRouter);
app.use('/api/v1/stock', stockRouter);
app.use('/api/v1/user', userRouter);


app.get('/',(req,res)=>{
    res.send(`<h1>Congratulations !!! Server is running...</h1>`);
});



module.exports= app;