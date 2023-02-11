const mongoose = require("mongoose")
// const autoIncrement = require("mongoose-auto-increment")
const schema = mongoose.Schema({
    title:{
        type  : String
    },
    image :{
        type :  String
    } ,
    price :{
        type :  Number
    } 
})


// autoIncrement.initialize(mongoose.connection)
// schema.plugin(autoIncrement.plugin, 'user')

const productModel = mongoose.model("product" , schema)
module.exports = productModel