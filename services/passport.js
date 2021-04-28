const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const User = require('../models/User');
const keys = require('../config/keys');


passport.use(new GoogleStrategy({
  clientID: keys.GOOGLE_CLIENT_ID,
  clientSecret: keys.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback",
  userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"

},
function(accessToken, refreshToken, profile, done) {
  User.findOne({ googleId: profile.id })
    .then((existingUser) => {
      if(!existingUser){
        new User ({
          googleId: profile.id,
          name: profile.name.givenName,
          photo: profile._json.picture
        }).save()
        .then(user => done(null, user));
        // console.log(profile);
        
      }else{
        done(null, existingUser);
      }
    })
  
}
));

  