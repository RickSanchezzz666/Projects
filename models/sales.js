const { Schema, model } = require('mongoose');

const schema = new Schema({
    
});

const Sales = new model('sales', schema, 'sales');

module.exports = { Sales };