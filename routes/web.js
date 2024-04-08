const homeController  =  require('../app/http/controllers/homeController');
const authController = require('../app/http/controllers/authController');
const cartController = require('../app/http/controllers/customers/cartController');
const orderController = require('../app/http/controllers/customers/orderController');
const feedbackController = require('../app/http/controllers/customers/feedbackController');
const notificationController = require('../app/http/controllers/customers/notificationController');
const offersController = require('../app/http/controllers/offersController');
const menuController = require('../app/http/controllers/menuController');
const hotDrinkController = require('../app/http/controllers/hotDrinkController');
const foodmenuController = require('../app/http/controllers/foodmenuController');
const coldDrinkController = require('../app/http/controllers/coldDrinkController');
const adminController = require('../app/http/controllers/Admin/adminController');
const { authenticate } = require('passport');

const guest = require('../app/http/middleware/guest');
const auth = require('../app/http/middleware/auth');

function initRoutes(app){
    


    app.get('/', homeController().index);
    // (req,res) => {
    //     res.render('home')
    // }



    app.get('/cart',cartController().index);
    // (req,res)=>{
    //     res.render('customers/cart')
    // }
    app.post('/update-cart',cartController().update);
    // app.post('/remove-product',cartController().remove);

    // Customer routes
    app.post('/orders', auth,orderController().store);
    app.get('/customers/myOrders', auth, orderController().index);


    // Admin Order dashboard
    app.get('/admin/adminCafeEats',adminController().index);
    app.post('/admin/adminCafeEats',adminController().update);



    app.get('/login',guest,authController().login);
    // (req,res)=>{
    //     res.render('auth/login')
    // }
    app.post('/login',authController().postLogin);
    app.post('/logout',authController().logout);


    app.get('/loginByOTP',guest,authController().loginByOTP);

    

    app.get('/register',guest,authController().register);
    // (req,res)=>{
    //     res.render('auth/register')
    // }
    app.post('/register',authController().postRegister);



    app.get('/notification',notificationController().index);
    // (req,res)=>{
    //     res.render('notification/notification')
    // }


    app.get('/feedback',feedbackController().index);  
    // (req,res)=>{
    //     res.render('feedback/feedback')
    // }


    app.get('/offers',offersController().index);
    // (req,res)=>{
    //     res.render('offers/offers')
    // }


    app.get('/menu',menuController().index);
    // (req,res)=>{
    //     res.render('menu/menu')
    // }

    app.get('/hotDrink',hotDrinkController().index);
    // (req,res)=>{
    //     res.render('menu/hotDrink');
    // }

    app.get('/foodmenu',foodmenuController().index);
    // (req,res)=>{
    //     res.render('menu/foodmenu');
    // }

    app.get("/coldDrink",coldDrinkController().index);
    // (req,res)=>{
    //     res.render('menu/coldDrink');
    // }

    // app.get("/adminCafeEats", adminController().index);
    // (req,res)=>{
    //     res.render('admin/adminCafeEats');
    // }
}

module.exports = initRoutes