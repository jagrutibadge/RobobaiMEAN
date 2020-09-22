var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Product Model
var productSchema = new Schema({
    product_id: { type: Number },
    product_name: { type: String },
    quantity: { type: Number },
    cost_price: { type: Number },
    selling_price: { type: Number }
});
Product = mongoose.model('Product', productSchema);

module.exports = {
    Product: Product
}