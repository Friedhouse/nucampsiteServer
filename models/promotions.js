const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);

const Currency = mongoose.Types.Currency;

const Schema = mongoose.Schema;

const promotionsSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true   
    },
    image: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        required: false
    },
    cost: {
        type: Currency,
        required: true 
    },
    description: {
        type: String,
        required: true,
        min: 0
    }
}, {
    timestamps: true
})

const Promotion = mongoose.model('Promotion', promotionsSchema);

module.exports = Promotion;