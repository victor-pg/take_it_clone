const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const path = require('path');
var cors = require('cors');
const config = require('./config');;
const pool = require('./db');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());
app.use("/api/", require('./routes/products.routes'));
app.use("/api/", require('./routes/news.routes'));
app.use("/api/", require('./routes/product_types.routes'));
app.use("/api/auth", require('./routes/auth.routes'));

app.post('/api/news/save', (req, res) => {

  const { title, subtitle, content,titleRu,subtitleRu,contentRu } = req.body;

  if (req.files === null) {
    return res.status(400).json({ msg: 'Nu s-a incărcat fișierul' });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/build/img/news/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    const addNewArticle = `INSERT INTO news(title,subtitle,text,imgurl,title_ru,subtitle_ru,text_ru)
    VALUES ('${title}','${subtitle}','${content}','${file.name}','${titleRu}','${subtitleRu}','${contentRu}');
  `;

    pool.query(addNewArticle, (error, result) => {
      if (error) res.json({ message: 'Eroare, nu s-a putut adauga in baza de date' })
      else res.json({ message: 'Articol adaugat cu succes' });
    })

  });
});

app.put('/api/news/update/:id', (req, res) => {
  const {id}=req.params;
  const { title, subtitle, text ,titleRu,subtitleRu,textRu} = req.body;


  if (req.files === null) {
    const updateArticleWithoutImage = `UPDATE news SET title='${title}', subtitle='${subtitle}', text='${text}',title_ru='${titleRu}',subtitle_ru='${subtitleRu}',text_ru='${textRu}' WHERE id=${id}`;
    pool.query(updateArticleWithoutImage, (error, result) => {
      if (error) return res.json({ message: 'S-a produs o eroare ' + error })
      else return res.json({ message: 'Modificat cu succes' })
    })
  } else {

    const file = req.files.file;
    file.mv(`${__dirname}/client/build/img/news/${file.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      const updateArticleWithImage = `UPDATE news SET title='${title}', subtitle='${subtitle}', text='${text}', imgurl='${file.name}', title_ru='${titleRu}',subtitle_ru='${subtitleRu}',text_ru='${textRu}' WHERE id=${id}`;
      pool.query(updateArticleWithImage, (error, result) => {
        if (error) return res.json({ message: 'S-a produs o eroare ' + error })
        else return res.json({ message: 'Modificat cu succes' })
      })
    });


  }

});

app.post('/api/products/save', (req, res) => {

  const { name, shortDescription, description, type, nameRu,shortDescriptionRu,descriptionRu } = req.body;

  if (req.files === null) {
    return res.status(400).json({ msg: 'Nu s-a incărcat fișierul' });
  }

  const file = req.files.fileProducts;

  file.mv(`${__dirname}/client/build/img/products/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    const addNewProduct = `INSERT INTO products(name,short_desc,description,imgurl,type,name_ru,short_desc_ru,description_ru)
      VALUES ('${name}','${shortDescription}','${description}','${file.name}','${type}','${nameRu}','${shortDescriptionRu}','${descriptionRu}');
    `;

    pool.query(addNewProduct, (error, result) => {
      if (error) {console.log(error);res.json({ message: 'Eroare, nu s-a putut adauga in baza de date' })}
      else res.json({ message: `Produs de tipul ${type} adaugat cu succes` });
    })

  });
});

app.put('/api/products/update/:id', (req, res) => {
  const {id}=req.params;
  const { name,short_desc,description,type,nameRu,short_desc_ru,descriptionRu } = req.body;


  if (req.files === null) {
    const updateProductWithoutImage = `UPDATE products SET name='${name}', short_desc='${short_desc}', description='${description}',  type='${type}',short_desc_ru='${short_desc_ru}',name_ru='${nameRu}',description_ru='${descriptionRu}' WHERE id=${id}`;
    pool.query(updateProductWithoutImage, (error, result) => {
      if (error) return res.json({ message: 'S-a produs o eroare ' + error })
      else return res.json({ message: 'Modificat cu succes' })
    })
  } else {

    const file = req.files.file;
    file.mv(`${__dirname}/client/build/img/products/${file.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      const updateProductWithImage = `UPDATE products SET name='${name}', short_desc='${short_desc}', description='${description}', imgurl='${file.name}', type='${type}',short_desc_ru='${short_desc_ru}',name_ru='${nameRu}',description_ru='${descriptionRu}' WHERE id=${id}`;
      pool.query(updateProductWithImage, (error, result) => {
        if (error) return res.json({ message: 'S-a produs o eroare ' + error })
        else return res.json({ message: 'Modificat cu succes' })
      })
    });


  }

});



const PORT = process.env.PORT || 5000;

app.use('/',express.static(path.join(__dirname,'client','build')));

app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})

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
