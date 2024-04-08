function offerController(){
    //using factory function
       return{
          index(req, res) {
            res.render('offers/offers');
          }
       }
    
    }
    
    module.exports = offerController;