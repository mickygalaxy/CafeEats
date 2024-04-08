const order = require('../../../models/order');
const Order = require('../../../models/order');

function isPastOrder(orderDate) {
    const currentDate = new Date();
    const orderDateTime = new Date(orderDate);

    // Compare the date without the time part
    const currentDateWithoutTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const orderDateTimeWithoutTime = new Date(orderDateTime.getFullYear(), orderDateTime.getMonth(), orderDateTime.getDate());

    return orderDateTimeWithoutTime < currentDateWithoutTime;

}

function orderController (){

    return {
        
        store(req,res){
          
            const {pickup_time} = req.body;
            if(!pickup_time){
                req.flash('🙏Sorry ,Please enter the pickup time⏳');
                return res.redirect('/cart');
            }

            const order = new Order({
               customerId: req.user._id,
               customerName: req.user.name,
               items:req.session.cart.items,
               totalPrice: req.session.cart.totalPrice,
               phone: req.user.phone_no,
               pickup_time: pickup_time,
               toDateString: Date,                
            })

          
      
            console.log(order);
            // console.log(orderBill);
            order.save().then(result => {
                req.flash('🎉success, Order placed successfully');
                delete req.session.cart;
                return res.redirect('/customers/myOrders');
            }).catch(err => {
                req.flash('🙏Sorry, Something went Wrong');
                return res.redirect('/cart');
            })
        },

        async index(req,res){
           
            const orders = await Order.find({customerId: req.user._id}).sort({ orderDate: 'desc', orderTime: 'desc' })
            .exec();
           
            

            res.render('customers/myOrders',{orders:orders,isPastOrder: isPastOrder});
            console.log(orders);

        },


      
        

      
    }
}

module.exports = orderController;