const {model,Schema} = require('mongoose');

const schema = new Schema({
  name: String,
  description: String,
  imgUrl: String
})

module.exports=model("Product",schema);