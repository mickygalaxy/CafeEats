function menuController(){
    //using factory function
       return{
          index(req, res) {
            res.render('menu/menu');
        }
       }
    
    }
    
    module.exports = menuController;