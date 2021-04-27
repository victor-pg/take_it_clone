const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
var cors = require('cors');
const config = require('./config');;
const pool = require('./db');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());
app.use("/api/", require('./routes/products.routes'));
app.use("/api/", require('./routes/news.routes'));
app.use("/api/auth", require('./routes/auth.routes'));

app.post('/api/news/save', (req, res) => {

    const { title, subtitle, content } = req.body;

    if (req.files === null) {
        return res.status(400).json({ msg: 'Nu s-a incărcat fișierul' });
    }

    const file = req.files.file;

    file.mv(`${__dirname}/client/public/img/news/${file.name}`, err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }

        const addNewArticle = `INSERT INTO news(title,subtitle,text,imgurl)
      VALUES ('${title}','${subtitle}','${content}','${file.name}');
    `;

        pool.query(addNewArticle, (error, result) => {
            if (error) res.json({ message: 'Eroare, nu s-a putut adauga in baza de date' })
            else res.json({ message: 'Articol adaugat cu succes' });
        })

    });
});

app.post('/api/products/save', (req, res) => {

    const {name, shortDescription,description,type} = req.body;

    if (req.files === null) {
      return res.status(400).json({ msg: 'Nu s-a incărcat fișierul' });
    }
  
    const file = req.files.fileProducts;

    file.mv(`${__dirname}/client/public/img/products/${file.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      
    const addNewProduct = `INSERT INTO products(name,short_desc,description,imgurl,type)
      VALUES ('${name}','${shortDescription}','${description}','${file.name}','${type}');
    `;
    
      pool.query(addNewProduct,(error,result)=>{
        if(error) res.json({message:'Eroare, nu s-a putut adauga in baza de date'})
        else res.json({message:`Produs de tipul ${type} adaugat cu succes`});
      })

    });
  });

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
