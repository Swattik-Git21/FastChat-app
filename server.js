const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require("passport");
const session = require("express-session");
const sessionSecret = require('./config/sessionConfig').secret;
require('dotenv').config()

const users = require('./routes/api/Users');
const chats = require('./routes/api/Chats');
const messages = require('./routes/api/Messages');

const app = express();

//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Config
require('./config/passport')(passport);

//DB Congig
// const db = require('./config/dbKeys').mongoURI;
mongoose.connect('mongodb+srv://SWATTIK-GMIT_20:SWATTIK-GMIT_20@cluster0.mmemb.mongodb.net/Chatapp?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('NODEJS TO MongoDB Connection ESTABLISH.....');
  })
  .catch(err => console.log(err));
  // .catch(err => {
  //   console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
  //   process.exit();
  // });

// mongoose.set('useFindAndModify', false);

//Connect to MongoDB
// mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB Connected...'))
//     .catch(err => console.log(err));

// // Initialize sessions
app.use(session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: false },
    expires: new Date(Date.now() + 3600000)
}));

// Initialize passport
app.use(passport.initialize());
// Initialize passport session
app.use(passport.session());

//User Routes
app.use('/api/users', users);
app.use('/api/chats', chats);
app.use('/api/chats', messages);

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});

// const port = require('./config/env').serverPORT;

// app.listen(port, () => console.log(`Server started on port ${port}`));

const PORT = process.env.PORT || 5000
    app.listen(PORT, () =>{
        console.log('Express server is running on port', PORT);
        }
    )
