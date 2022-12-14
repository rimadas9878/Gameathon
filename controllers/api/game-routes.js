const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth')

       
 router.get('/games', withAuth, (req, res) => {
     console.log("=====================")
     console.log("games-route")
     console.log(req)
     console.log("=====================")
     // If the user is already logged in, redirect the request to another route
     if (req.session.logged_in) {
       res.render('games', {
         title: "GAMEATHON", 
         user: req.session.username
       });
       return;
     }
  
     res.redirect('login');
   });

   module.exports = router

