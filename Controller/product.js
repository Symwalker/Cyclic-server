const productModel = require("../Models/productSchema")
const product = {
    addToCart : (req ,res ) =>{

        productModel.create(req.body, (err, data) => {
            if (err) {
                res.send(err)
                // console.log(err);
            } else {
                res.json({
                    msg: 'user create',
                    data
                })
            }
        })
    },
    getCart : (req ,res) =>{
        productModel.find({}, (err, data) => {
            if (err) {
                res.send(err)
    
            } else {
                res.json(
                    data
                )
            }
    
        })
    }
}

module.exports = product