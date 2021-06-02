const fs = require('fs');
const path = require('path');
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

router.delete('/products/delete/:id',async(req,res)=>{
    const {id} = req.params;
    const candidate = `SELECT * FROM products WHERE id=${id}`;
    const deleteProduct = `DELETE FROM products WHERE id=${id}`;
    let fileName;
    

    await pool.query(candidate,(error,result)=>{
        if(error) res.json({message:`Produsul cu id=${id} nu a fost găsit`})
        else fileName=result.rows[0].imgurl;
    })

    let fileDir = path.join(__dirname, '../client/build/img/products/');

    await pool.query(deleteProduct,(error,result)=>{
        if(error) res.json({message:'Nu s-a putut șterge produsul'})
        else {
            try {
                fs.unlinkSync(fileDir + fileName);
            } catch (error) {
                console.log('Imaginea produsului nu s-a putut șterge : ' + error)
            }
            res.json({message:'Produsul a fost șters cu succes'})
        }
    })

})

module.exports = router;