const { Schema, model } = require('mongoose');

const schema = new Schema({
    saleDate: {type: Date, required: true},
    
});

const Sales = new model('sales', schema, 'sales');

module.exports = { Sales };