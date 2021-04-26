const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');;
const pool = require('./db');

const app = express();
app.use(bodyParser.json());
app.use("/api/", require('./routes/products.routes'));
app.use("/api/", require('./routes/news.routes'));
app.use("/api/auth",require('./routes/auth.routes'));

const PORT = config.PORT || 5000;

const start = async () => {
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
