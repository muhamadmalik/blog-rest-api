import { Strategy as JwtStrategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import passport from 'passport';
import dotenv from 'dotenv';
import { getAuthor } from '../Models/user';
import jwt from 'jsonwebtoken';

dotenv.config();

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET as string,
};

interface UserPayload {
  id: string;
}

export const generateToken = (user: UserPayload): string => {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: '7d' });
};

passport.use(
  new JwtStrategy(options, async (payload: UserPayload, done) => {
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
