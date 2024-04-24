import passportLocal from 'passport-local';
import passport from 'passport';
import { cryptoPbkdf2 } from '../../util/promisified';
import { createUser, findUserByName } from '../../data/crud/users';
import { User } from '../../data/repositories/userRepository';
import crypto from 'crypto';

// helpful links 
// http://toon.io/understanding-passportjs-authentication-flow/
// https://github.com/jwalton/passport-api-docs#functions-added-to-the-request
// https://github.com/passport/todos-express-password/blob/master/routes/auth.js

const LocalStrategy = passportLocal.Strategy;

passport.use(new LocalStrategy(async function verify(username, password, done) {
  //done() is the function passed to passport.authenticate()
  try {
    const result : User = await findUserByName(username);
    const hashedPassword = await cryptoPbkdf2(password, result.salt, 310000, 32, 'sha256');
    if (!crypto.timingSafeEqual(result.hashed_password, hashedPassword)) {
      return done(null, false, { message: 'Incorrect username or password.' });
    }
    return done(null, result);

  } catch (error) {
    return done(error);
  }

}));

passport.serializeUser((user : any, done) => {
  const serializedUser = {
    username: user.username,
    user_id: user.user_id
  }
  done(null, serializedUser);
});

passport.deserializeUser((user : any, done) => {
  //user parameter comes from req.session.passport.user
  done(null, user);
});


export function login(req : Express.Request){
  let result = false;
  passport.authenticate('local', (err: any, user: Express.User, info: any) => {
    if(err){
      throw err;
    }
    if(!user){
      result = false;
    }
    else{
      req.login(user, (err : any) => {
        if (err) {
          throw err;
        }
        //console.log(`logged in as ${user.username}`);
        result = true;
      });
    }
  })(req);

  return result;
}

export function logout(req : any){
  req.logout((err : any) => {
    if(err) throw err;
    return true;
  });

}

export async function signup(req : any) {
  const salt = crypto.randomBytes(16);
  const username = req.body.username;
  const hashed_password = await cryptoPbkdf2(req.body.password, salt, 310000, 32, 'sha256');
  const user : User = {
    username,
    hashed_password,
    salt
  }
  const result = await createUser(user);
  if(!result){
    return false;
  }
  req.login(user, (err : any) => {
    if (err) {
      throw err;
    }
    //console.log(`logged in as ${user.username}`);
    return true;
  });
}

export function session(req : any){
  if(req.user){
    return true;
  }
  return false;
}
