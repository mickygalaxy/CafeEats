function notificationController(){
    //using factory function
       return{
          index(req, res) {
            res.render('notification/notification');
        }
       }
    }
    
    module.exports = notificationController;