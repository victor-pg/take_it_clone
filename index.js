const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
var multer = require('multer')
var cors = require('cors');
const config = require('./config');;
const pool = require('./db');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());
app.use("/api/", require('./routes/products.routes'));
app.use("/api/", require('./routes/news.routes'));
app.use("/api/auth",require('./routes/auth.routes'));

app.post('/api/news/save', (req, res) => {

    const {title, subtitle,content} = req.body;

    if (req.files === null) {
      return res.status(400).json({ msg: 'Nu s-a incărcat fișierul' });
    }
  
    const file = req.files.file;

    file.mv(`${__dirname}/client/public/img/news/${file.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      
      console.log(`Test upload!!! => Title : ${title}, Subtitle : ${subtitle}, Content : ${content}, ImgName : ${file.name}`);

      res.json({ fileName: file.name, filePath: `/news/${file.name}` });
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
