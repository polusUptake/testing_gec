import jwt from 'jsonwebtoken';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User.js';  // Assuming you have the User model

// Passport.js Google OAuth configuration
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,  // You need to set this in your .env file
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,  // You need to set this in your .env file
  callbackURL: 'http://localhost:5000/auth/google/callback',  // Your callback URL
}, async (token, tokenSecret, profile, done) => {
  try {
    const { id, emails, displayName } = profile;
    let user = await User.findOne({ email: emails[0].value });

    if (!user) {
      user = new User({
        email: emails[0].value,
        password: 'oauth_user',  // No password for OAuth users
        name: displayName,
      });
      await user.save();
    }

    // If user exists or is newly created, send back the user object
    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

// Single Sign-On routes

// Google authentication
export const googleAuth = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

// Google callback
export const googleCallback = passport.authenticate('google', {
  failureRedirect: '/login',
}, (req, res) => {
  // Successful authentication, redirect home.
  res.redirect('/');
});

// Middleware for verifying JWT Token
const protect = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

export default protect;