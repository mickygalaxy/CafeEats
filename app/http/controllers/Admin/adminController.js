const Order = require('../../../models/order');

function isPastOrder(orderDate) {
   const currentDate = new Date();
   const orderDateTime = new Date(orderDate);

   // Compare the date without the time part
   const currentDateWithoutTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
   const orderDateTimeWithoutTime = new Date(orderDateTime.getFullYear(), orderDateTime.getMonth(), orderDateTime.getDate());

   return orderDateTimeWithoutTime < currentDateWithoutTime;

}


 function adminController(){
    //using factory function
       return{
          async index(req, res) {

         
         //   const order = await  Order.find({status:{ $ne: 'completed'}},null,{sort:{'createdAt':-1}}).populate('customerId','-password').exec((err,orders)=>{
                    // res.render('admin/adminCafeEats',{order:orders});

         //     });



            try {
               const orders = await Order.find({ status: { $ne: 'completed' } }).sort({ createdAt: -1 }).populate('customerId', '-password');
               //  console.log(orders);
                res.render('admin/adminCafeEats', { orders});
           } catch (error) {
               console.error(error);
               res.status(500).send('Internal Server Error');
           }

        },
         async update(req,res){
            try {
               const orderId = req.orders.orderId;
               // Update the order status in the database (e.g., using Mongoose)
               await Order.findByIdAndUpdate(orderId, { status: 'completed' });
               res.status(200).send('Order approved successfully');
             } catch (error) {
               console.error('Error:', error);
               res.status(500).send('Internal Server Error');
             }
         }

      
        
       }
    
    }
    
    module.exports = adminController;