const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');;
const pool = require('./db');

const app = express();
app.use("/api/", require('./routes/products.routes'));
app.use("/api/", require('./routes/news.routes'));

const PORT = config.PORT || 5000;

const start = async () => {
    // try{
    //     await mongoose.connect(config.mongoURL, {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //         useFindAndModify: false,
    //         useCreateIndex: true
    //       });
    //     app.listen(PORT,()=>console.log(`Server started on ${PORT} `));
    // }catch(e){
    //     throw new Error(e.message);
    // }
    try {
        await pool.query('SELECT NOW()', (err, res) => {
            res ? console.log('Connect to DB') : console.log(`Unable to connect to DB ${err}`);
        })
        await app.listen(PORT, () => console.log(`Server started on ${PORT}`))
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

start();
