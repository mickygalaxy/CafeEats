
const Menu = require('../../models/menu');
const mongoose = require('mongoose');
function homeController(){
//using factory function
   return{
     async index(req, res) {
         // Menu.find().then(function(products){
         //    console.log(products);
         //       return res.render('home',{ product : products });

         const db = mongoose.connection.useDb('CafeEat', {
            // `useCache` tells Mongoose to cache connections by database name, so
            // `mongoose.connection.useDb('foo', { useCache: true })` returns the
            // same reference each time.
            useCache: true
          });
          // Need to register models every time a new connection is created
          if (!db.models['Menu']) {
            db.model('Menu',mongoose.Schema({ name:{ type: String,require:true},
              image:{ type: String,require:true},
              price:{type: String,require:true}}));
          }
          console.log('Find users from', db.name);
        await db.model('Menu')
    .find().then((menuItems) => {
      // Render your 'home' view with the fetched menu items
      console.log(menuItems);
      return res.render('home', { menuItems:menuItems });
    }).catch((err) => {
      res.status(500).json({ message: err.message });
    });

         // })
         // res.render('home');
      }
   }

}

module.exports = homeController;