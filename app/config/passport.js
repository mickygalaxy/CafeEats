const LocalStrategy = require('passport-local').Strategy
// const passport = require('passport');
const User = require('../models/user');
const bcrypt = require('bcrypt');

function init(passport){

   passport.use(new LocalStrategy({usernameField: 'email'}, async (email,password,done) =>{
      //Login

      //check if email exists

      const user = await User.findOne({email:email})
      if(!user){
        return done(null,false, {message: "No User With This Email"})
      }
      
      bcrypt.compare(password,user.password).then(match => {
        if(match) {
            console.log("hello");
            return done(null,user, {message: "Logged in succesfully"})
        }
        return done(null,false,{message: "Wrong username or password"})
      }).catch(err => {
           return done(null,false,{ message: 'Something went wrong'}); 
      })

   }))

   passport.serializeUser((user, done) => {
        done(null,user._id)
   })

   // passport.deserializeUser((id, done) => {
   //    User.findById(id, (err, user) => {
   //        done(err,user)
   //    })

   passport.deserializeUser((id, done) => {
      User.findById(id)
        .then(user => {
          done(null, user);
        })
        .catch(err => {
         console.log(err);
          done(err, user);
        });
      });

   
    
 
   
}

module.exports = init;