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

router.post('/products/types/delete',(req,res)=>{
    const {type} = req.body;

    const deleteType = `DELETE FROM product_types WHERE type='${type}'`;
    pool.query(deleteType,(error,result)=>{
        if (error) {
            res.status(500).send('Database error ' + error);
        } else {
            res.status(200).json({message:`Tipul : ${type} șters cu succes`});
        }
    })
})


module.exports=router;