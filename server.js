const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = require('./index');
const port = process.env.PORT || 5000;



mongoose.connect(process.env.LOCAL_HOST).then(()=>{
    console.log('Mongoose is connected')
})

app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`)
})

