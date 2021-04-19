const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'take_it',
    password: 'root',
    port: 5432,
});

const createNewsTable = `CREATE TABLE IF NOT EXISTS news (
    id SERIAL PRIMARY KEY NOT NULL ,
    title varchar(450) NOT NULL,
    subtitle varchar(450) NOT NULL,
    imgUrl varchar(450) NOT NULL ,
    text varchar(450) NOT NULL,
    timestamp timestamp default current_timestamp
    )`;

pool.query(createNewsTable, (err, res) => {
    if (err) console.log("Cannot create news table " + err);
    if (res) console.log("Table news created successfully " + res);
})

module.exports = pool;