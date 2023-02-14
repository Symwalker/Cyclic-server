const productModel = require("../Models/productSchema")
const product = {
    addToCart: (req, res) => {

        console.log(req);
        productModel.create(req.body, (err, data) => {
            if (err) {
                res.send({
                    msg: "error",
                    err
                })
                // console.log(err);
            } else {
                res.json({
                    msg: 'user create',
                    data
                })
            }
        })
    },
    getCart: (req, res) => {
        productModel.find({}, (err, data) => {
            if (err) {
                res.send(err)

            } else {
                res.json({
                    data,
                    msg : "get Data"
                })
            }

        })
    }
}

module.exports = product