const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderBillSchema = new Schema({
    items: [{
        name: String,
        pricePerUnit: Number,
        quantity: Number,
        total: Number,
    }],
    subtotal: { type: Number, required: true },
    gstAmount: { type: Number, default: 0 },
    otherTaxAmount: { type: Number, default: 0 },
    totalAmount: { type: Number, required: true },
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
});

const OrderBill = mongoose.model('OrderBill', orderBillSchema);

module.exports = OrderBill;