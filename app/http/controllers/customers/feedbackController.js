function feedbackController(){
    //using factory function
       return{
          index(req, res) {
            res.render('feedback/feedback')
          }
       }
    
    }
    
    module.exports = feedbackController;