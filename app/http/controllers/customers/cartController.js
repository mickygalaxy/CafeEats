

function cartController(){
    //using factory function
       return{

          index(req, res) {
            res.render('customers/cart')
          },


          //update
          update(req,res){
             // for the first time creating cart and adding basic object structure    
             if(!req.session.cart){
                req.session.cart = {
                items: {},
                totalQty: 0,
                totalPrice: parseFloat(0)
               }
              }
             let cart = req.session.cart
             // Check if item does not exist in cart
             if(!cart.items[req.body._id]){
                cart.items[req.body._id] = {
                  item: req.body,
                  qty:1
                }
                 cart.totalQty = cart.totalQty + 1;
                     //   cart.totalPrice = parseFloat(cart.totalPrice)+req.body.price;
               cart.totalPrice = parseInt(cart.totalPrice) + parseInt(req.body.price); // Convert to float before addition


             }else{
               cart.items[req.body._id].qty = cart.items[req.body._id].qty + 1;
               cart.totalQty = cart.totalQty + 1;
            //    // cart.totalPrice = parseFloat(cart.totalPrice)+req.body.price;
               cart.totalPrice = parseInt(cart.totalPrice) + parseInt(req.body.price);       // Convert to float before addition
              
            // console.log(req.body.price,cart.totalQty);
               // console.log(cart.totalPrice);
            }

            return res.json({totalQty: req.session.cart.totalQty});
          },         


          //---------------------------------------------------------------------------------------
            //remove
            // remove(req, res) {
            //    const productIdToRemove = req.body._id;
            //    console.log(req.body._id );
            //    // Remove the product with the specified ID from the cart
            //    if (
            //      req.session.cart &&
            //      req.session.cart.items[productIdToRemove]
            //    ) {
            //      const removedProduct = cart.items[
            //        productIdToRemove
            //      ];
            //      cart.totalQty -= removedProduct.qty;
            //      cart.totalPrice -= removedProduct.qty * removedProduct.item.price;
            //      delete req.session.cart.items[productIdToRemove];
         
            //      return res.json({
            //        success: true,
            //        message: 'Product removed successfully',
            //      });
            //    } else {
            //      return res.status(404).json({
            //        success: false,
            //        message: 'Product not found in the cart',
            //      });
            //    }
            //  },
           //---------------------------------------------------------------------------------------
          
       




        
           
       
    
    }
  }
    module.exports = cartController;