import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import passport from 'passport';
import dotenv from 'dotenv';
import { getAuthor } from '../Models/user';
import jwt from 'jsonwebtoken';

dotenv.config();

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearberToken(),
  secretOrKey: process.env.JWT_SECRET,
};

export const generateToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

passport.use(
  new JwtStrategy(options, async (payload, done) => {
    try {
      const user = await getAuthor(payload.id);
      if (!user) {
        return done(null, false);
      }
      return done(null, user);
    } catch (error) {
      done(error, false);
    }
  })
);

export default passport;
