const fs = require('fs');
const path = require('path');
const { Router } = require('express');
const router = Router();
const pool = require('../db');

router.get("/news", async (req, res) => {
    const getAllNews = `SELECT * FROM news`;
    pool.query(getAllNews, (error, result) => {
        if (error) {
            res.status(500).send('Database error ' + error);
        } else {
            res.status(200).json(result.rows);
        }
    })
})

router.get("/newest", async (req, res) => {
    const getAllNewest = `SELECT * FROM news ORDER BY timestamp DESC LIMIT 3`;
    pool.query(getAllNewest, (error, result) => {
        if (error) {
            res.status(500).send('Database error ' + error);

        } else {
            res.status(200).json(result.rows);
        }
    })
})

router.get("/news/:id", async (req, res) => {
    const { id } = req.params;
    const getOneItem = `SELECT * FROM news WHERE id=${id}`;
    await pool.query(getOneItem, (err, result) => {
        if (err) {
            res.status(500).send('Database error ' + error)
        } else {
            res.status(200).json(result.rows);
        }
    })
})

router.delete('/news/delete/:id',async(req,res)=>{
    const {id} = req.params;
    const candidate = `SELECT * FROM news WHERE id=${id}`;
    const deleteArticle = `DELETE FROM news WHERE id=${id}`;
    let fileName;

    await pool.query(candidate,(error,result)=>{
        if(error) res.json({message:`Articol cu id=${id} nu a fost găsit`})
        else fileName=result.rows[0].imgurl;
    })


    let fileDir = path.join(__dirname, '../client/public/img/news/');

    await pool.query(deleteArticle,(error,result)=>{
        if(error) res.json({message:'Nu s-a putut șterge articolul'})
        else {
            try {
                fs.unlinkSync(fileDir + fileName);
            } catch (error) {
                console.log('Imaginea articolului nu s-a putut șterge : '+error)
            }
            res.json({message:'Articolul a fost șters cu succes'})
        }
    })

})

module.exports = router;