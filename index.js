const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');;

const app = express();
app.use("/api/",require('./routes/products.routes'));

const PORT = config.PORT || 5000;

const start = async()=>{
    try{
        await mongoose.connect(config.mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
          });
        app.listen(PORT,()=>console.log(`Server started on ${PORT} `));
    }catch(e){
        throw new Error(e.message);
    }
}

start();
