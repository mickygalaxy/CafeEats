const ColdDrink = require('../../models/coldDrink');
const mongoose = require('mongoose');


function coldDrinkController(){
    //using factory function
       return{
          async index(req, res) {
            // res.render('menu/coldDrink');

            const db = mongoose.connection.useDb('CafeEat', {
                // `useCache` tells Mongoose to cache connections by database name, so
                // `mongoose.connection.useDb('foo', { useCache: true })` returns the
                // same reference each time.
                useCache: true
              });
              // Need to register models every time a new connection is created
              if (!db.models['ColdDrink']) {
                db.model('ColdDrink', mongoose.Schema({ name:{ type: String,require:true},
                  image:{ type: String,require:true},
                  price:{type: String,require:true}}));
              }
              console.log('Find users from', db.name);
           await db.model('ColdDrink')
        .find().then((items) => {
          // Render your 'home' view with the fetched menu items
          console.log(items);
          return res.render('menu/coldDrink', { items:items });
        // res.json(items);
        }).catch((err) => {
          res.status(500).json({ message: err.message });
        });
    
        }
       }
    
    }
    
    module.exports = coldDrinkController;