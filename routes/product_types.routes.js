const { Router } = require('express');
const router = Router();
const pool = require('../db');

router.get('/products/types',(req,res)=>{
    const getAllProductTypes = `SELECT * FROM product_types`;
    pool.query(getAllProductTypes,(error,result)=>{
        if (error) {
            res.status(500).send('Database error ' + error);
        } else {
            res.status(200).json(result.rows);
        }
    })
})

router.post('/products/types/save',(req,res)=>{
    const {type} = req.body;

    const addNewProductTypes = `INSERT INTO product_types(type) VALUES ('${type}')`;
    pool.query(addNewProductTypes,(error,result)=>{
        if (error) {
            res.status(500).send('Database error ' + error);
        } else {
            res.status(200).json({message:'Tip nou salvat cu succes'});
        }
    })
})


module.exports=router;