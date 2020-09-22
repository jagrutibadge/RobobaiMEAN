var express = require('express');
var router = express.Router();
var models = require('./models');

router.post('/save_product_details', function (req, res) {
    try {
        if(req.body._id) {
            models.Product.findById(req.body._id, function(err, product_obj) {
                try {
                    product_obj.product_name = req.body.name;
                    product_obj.cost_price = req.body.cost_price;
                    product_obj.save();
                    res.json(product_obj);
                }
                catch(err) {
                    console.error(err);
                    res.send(err);
                }
            });
        }
        else {
            var new_product = new models.Product();
            new_product.product_id = req.body.product_id;
            new_product.quantity = req.body.quantity;
            new_product.product_name = req.body.product_name;
            new_product.cost_price = req.body.cost_price;
            new_product.selling_price = req.body.selling_price;
            new_product.save();
            res.json(new_product);
        }
    }
    catch(err) {
        console.error(err);
        res.send(err);
    }
});

router.get('/product_search', function(req, res) {
    try {
        var product_search_regex = ".*" + req.query.product_search + ".*";
        models.Product.find({product_name: {$regex: product_search_regex}}, function(err, product_list) {
            try {
                res.json(product_list);
            }
            catch(err) {
                console.error(err);
                res.send(err);
            }
        });
    }
    catch(err) {
        console.error(err);
        res.send(err);
    }
});

module.exports = router;