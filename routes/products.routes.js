const {Router} = require ('express');
const router = Router();
const Product = require('../models/Product');

router.get("/products", async (req,res)=>{
    const data = await Product.find({});
    if(!data){
        res.status(500).json({message:"Nu se pot extrage produsele"});
    }
    res.status(200).json(data);
})

router.get("/details/:id",async (req,res)=>{
    const data = await Product.findOne({_id:req.params.id});
    if(!data){
        res.status(500).json({message:`Nu s-a putut extrage produsul cu id : ${req.params.id}`});
    }
    res.status(200).json(data);
})

module.exports=router;