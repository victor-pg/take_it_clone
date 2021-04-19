const { Router } = require('express');
const router = Router();
const pool = require('../db');

router.get("/news", async (req, res) => {
    const getAllNews = `SELECT * FROM news`;
    pool.query(getAllNews,(error,result)=>{
        if(error){
            res.status(500).send('Database error ' + error);
            
        }else{
            res.status(200).json(result.rows);
        }
    })
})

router.get("/newest", async (req, res) => {
    const getAllNewest = `SELECT * FROM news ORDER BY timestamp DESC LIMIT 3`;
    pool.query(getAllNewest,(error,result)=>{
        if(error){
            res.status(500).send('Database error ' + error);
            
        }else{
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

module.exports = router;