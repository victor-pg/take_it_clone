const { Router } = require('express');
const router = Router();
const pool = require('../db');

router.get("/products", async (req, res) => {
    const getAllProducts = `SELECT * FROM products`;
    pool.query(getAllProducts, (error, result) => {
        if (error) {
            res.status(500).send('Database error ' + error);
        } else {
            res.status(200).json(result.rows);
        }
    })
})

router.get("/details/:id", async (req, res) => {
    const getOneProduct = `SELECT * FROM products WHERE id=${req.params.id}`;
    pool.query(getOneProduct,(error,result)=>{
        if(error){
            res.status(500).send('Database error ' + error);
        }else{
            res.status(200).send(result.rows);
        }
    })
})

module.exports = router;