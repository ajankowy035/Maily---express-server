const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('../config/keys');

// //Create a new instance of google strategy
// passport.use(new GoogleStrategy({
//     clientID: keys.GOOGLE_CLIENT_ID,
//     clientSecret: keys.GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:3000/auth/google/maily",
//     userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
//   },
//   function(accessToken, refreshToken, profile, done) {
//       console.log(profile.id);
//   }
// ));

passport.use(new GoogleStrategy({
  clientID: keys.GOOGLE_CLIENT_ID,
  clientSecret: keys.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback",
  userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"

},
function(accessToken, refreshToken, profile, cb) {
  console.log(profile.id);
}
));

  