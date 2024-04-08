const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    customerId:   {type:mongoose.Schema.Types.ObjectId,
                   ref: 'User',
                   required: true
                  },
    customerName: {type: String,
                   ref:'User',
                   required: true 
                  },
    items :       {type: Object,required: true},
    totalPrice : {type: Number,required: true},
    phone :       {type: String,
                   ref:'User',
                   required: true
                  },
    pickup_time : {
                   type: String, required:true
                  },
    payment_Type: {
                   type:String, default: 'COD'
                  },
    status      : {
                   type: String, default:'order_placed'
                  }              
},{timestamps:true})

module.exports = mongoose.model('Order',userSchema);