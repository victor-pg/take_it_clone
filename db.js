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

const createProductsTable = `CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY NOT NULL ,
    name varchar(450) NOT NULL,
    description text NOT NULL,
    imgUrl varchar(450) NOT NULL ,
    type varchar(450) NOT NULL,
    short_desc varchar(250),
    name_ru varchar(450) NOT NULL,
    description_ru text NOT NULL,
    short_desc_ru varchar(250)
    )`;


pool.query(createProductsTable, (err, res) => {
    if (err) console.log("Cannot create products table " + err);
    if (res) console.log("Table products created successfully " + res);
})

const createUsersTable = ` CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY NOT NULL,
    username varchar(100) NOT NULL,
    password varchar(450) NOT NULL
)`;

pool.query(createUsersTable, (err, res) => {
    if (err) console.log("Cannot create users table " + err);
    if (res) console.log("Table users created successfully " + res);
})


module.exports = pool;