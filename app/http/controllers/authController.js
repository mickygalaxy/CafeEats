const User = require('../../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { authenticate } = require('passport');
const passport = require('passport');
function authController(){
    //using factory function
       return{
          login(req, res) {
            res.render('auth/login');
          },
           
          postLogin(req, res, next){
              passport.authenticate('local', (err,user, info)=>{ //local
                if(err){
                  req.flash('error',info.messsage);
                  return next(err);
                }
                if(!user){
                  req.flash('error',info.messsage);
                  return res.redirect('/login');
                }
                
                req.logIn(user, (err)=> {
                   if(err){
                    req.flash('error',info.messsage);
                    return next(err);
                   }

                   return res.redirect('/')
                })

              })(req,res,next)
          },
          
          loginByOTP(req,res){
            res.render('auth/loginbyOTP');
          },


          register(req,res){
            res.render('auth/register');
          },

          

          async postRegister(req,res){
            const { name, email, mobile_no, password } = req.body;
            
            // Validate request
            if(!name || !email || !password || !mobile_no){
              req.flash('error','All fields are required');  
              req.flash('name',name);
              req.flash('email',email);
              req.flash('mobile_no',mobile_no);
              return res.redirect('/register');
            }
            

            // Check if email exists

            // User.exists({email:email}, (err,result) => {
            //    if(result){
            //      req.flash('error','Email already taken');  
            //      req.flash('name',name);
            //      req.flash('email',email);
            //      return res.redirect('/register');
            //    }  
            // })
           // Check if email exists
           User.exists({ email: email })
          .then((user) => {
          if (user) {
          // Email already exists
          req.flash('error', 'Email already taken');
          req.flash('name', name);
          req.flash('email', email);
          return res.redirect('/register');
          }

          // Continue with the rest of your code if the email is not taken
          // For example, you might want to save the new user here
          })
          .catch((err) => {
           // Handle the error
           console.error(err);
           return res.status(500).json({ error: 'Internal Server Error' });
          });






            // Hash password
            const hashedPassword = await bcrypt.hash(password,10);

            // Create a User 
            const user = new User({
              name:name,
              email:email,
              phone_no:mobile_no,
              password:hashedPassword,
              Wallet:25
            })

            user.save().then((user)=>{

               // successfull message notification
                // new Noty({
                //   type:'success',
                //   timeout:1000,
                //   progressBar:false,
                //   text:'Registration Successfull 😀'
                //  }).show();

                 //Login

                return res.redirect('/');
            }).catch(err => {
              req.flash('error','Something went wrong');  
              return res.redirect('/register');
            })
            // console.log(req.body); 
          },

          logout(req, res) {
            req.logout((err) => {
              if (err) {
                return res.status(500).send(err);
              }
              return res.redirect('/login');
            });
          }

       }
    
    }
    
    module.exports = authController