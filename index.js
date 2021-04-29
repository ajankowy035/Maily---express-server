const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');
require ('./models/User');
require('./services/passport');

const PORT = process.env.PORT || 3001;
mongoose.connect(keys.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true} )

const app = express();
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.COOKIE_KEY]
    })
);
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);

app.listen(PORT, ()=>{
    console.log('Your server is running on port 3000');
})