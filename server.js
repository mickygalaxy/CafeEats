require('dotenv').config();
const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const expressLayout = require('express-ejs-layouts');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const { error } = require('console');
const session = require('express-session');
const flash = require('express-flash');
const MongoDbStore = require('connect-mongo');
const passport = require('passport');
const bodyParser = require('body-parser');
// Database connection
const url = 'mongodb+srv://CafeEats1:CafeEats123@cafeeats.h1emken.mongodb.net/?retryWrites=true&w=majority';

// mongoose.connect('mongodb+srv://CafeEats1:CafeEats123@cafeeats.h1emken.mongodb.net/?retryWrites=true&w=majority');
 mongoose.set('debug', true);

// const url = 'mongodb://localhost:27017/CafeEats'
async function connectToMongoDB() {
  try {
    const connect = await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: true
    });
    console.log(`MongoDB connected: true , ${connect}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

// Call the async function
connectToMongoDB();

// mongoose.connect(url,{
//   useUnifiedTopology: true,
//       useNewUrlParser: true,
// });
// const connection = mongoose.connection;
// connection.once('open',() => {
//   console.log("database connected...");
// })

// mongoose.connect('mongodb://127.0.0.1:27017/CafeEats');

//-----------------
// Session store
//-----------------
// const  mongoStore = new MongoDbStore({
//   // mongooseConnection: mongoose.connection,
//   mongoUrl: url,
//   collection: 'sessions'
//   })


// Catch errors
// mongoStore.on('error', function(error) {
//   console.log(error);
// });                     
// console.log(mongoStore);






//------------
//Session Config
//------------
app.use(session({
  secret: process.env.COOKIE_SECRAT,
  resave:false,
  // store:mongoStore,
  store: MongoDbStore.create({mongoUrl: 'mongodb+srv://CafeEats1:CafeEats123@cafeeats.h1emken.mongodb.net/?retryWrites=true&w=majority',
    collection: 'sessions'}),
  saveUninitialized:true,
  cookie:{maxAge :1000*60*60*24}  
}));


// passport config 
const passportInit = require('./app/config/passport');
passportInit(passport);
app.use(passport.initialize());
app.use(passport.session());



app.use(flash());

// Assets
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


//Global middleware
app.use((req,res,next) => {
  res.locals.session = req.session;
  res.locals.user = req.user;
  next();
})
// app.get('/',(req,res) => {

//     res.render('home')

// });

// app.get('/cart',(req,res)=>{
//     res.render('customers/cart')
// })



// set Template engine
app.use(expressLayout);
app.set('views',path.join(__dirname,'/resources/views'));
app.set('view engine','ejs');

// app.get('/',(req,res) => {

//     res.render('home')

// });

// app.get('/cart',(req,res)=>{
//     res.render('customers/cart')
// });

// app.get('/login',(req,res)=>{
//     res.render('auth/login')
// });

// app.get('/register',(req,res)=>{
//     res.render('auth/register')
// });

// app.get('/notification',(req,res)=>{
//     res.render('notification/notification')
// });

// app.get('/feedback',(req,res)=>{
//     res.render('feedback/feedback')
// });

// app.get('/offers',(req,res)=>{
//     res.render('offers/offers')
// });

// app.get('/menu',(req,res)=>{
//     res.render('menu/menu')
// });

require('./routes/web')(app);

app.listen(PORT,() => {
    console.log(`Listening on port ${PORT}`);
});
