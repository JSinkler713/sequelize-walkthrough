// 1 - environment
require('dotenv').config();

// 2 - imports
const express = require('express');
const axios = require('axios');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const db = require('./models')

// 3 - App set up
const app = express();
app.set('view engine', 'ejs');

// 4 - App Middleware (app.use)
app.use(ejsLayouts);
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// 5 - Routes (controllers)
app.get('/', (req, res) => {
    res.send('Welcome to my App'); // Yo, Rome: what is this doing?
});

app.get('/coders', (req, res)=> {
    // we need to get all users from database
    db.user.findAll()
    .then((users)=> {
        // we need to render the index.ejs page
        // we need to pass the users data to it
        res.render('index', { users: users })
    })

})

app.get('/coders/new', (req, res)=> {
  res.render('new')
})

app.post('/coders', (req, res)=> {
  // the whole body object, each property in the field
  const newCoder = req.body
  db.user.create(newCoder)
    .then((createdUser)=> {
      // redirect as get request to /coders
      res.redirect('/coders')
    })
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});
