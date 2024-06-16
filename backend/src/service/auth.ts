import passportLocal from "passport-local";
import passport from "passport";
import { cryptoPbkdf2 } from "../util/promisified";
import {
  UserCreate,
  UserRepositoryFunction,
  createUser,
  findUserByName,
} from "../data/repositories/userRepository";
import crypto from "crypto";
import { NextFunction, Request, Response } from "express";
import { hashPassword } from "../util/helpers";
import util from "util";

// helpful links
// http://toon.io/understanding-passportjs-authentication-flow/
// https://github.com/jwalton/passport-api-docs#functions-added-to-the-request
// https://github.com/passport/todos-express-password/blob/master/routes/auth.js

const LocalStrategy = passportLocal.Strategy;

export async function mockVerify(
  username: string,
  password: string,
  done: any,
  find: UserRepositoryFunction,
) {
  try {
    const result = await find(username);
    if (!result) {
      return done(null, false);
    }
    const hashedPassword = await hashPassword(password, result.salt);
    if (!crypto.timingSafeEqual(result.hashed_password, hashedPassword)) {
      return done(null, false);
    }
    return done(null, result);
  } catch (error) {
    return done(error);
  }
}

async function verify(username: string, password: string, done: any) {
  return await mockVerify(username, password, done, findUserByName);
}

passport.use(new LocalStrategy(verify));

passport.serializeUser((user: any, done) => {
  const serializedUser = {
    username: user.username,
    id: user.id,
  };
  done(null, serializedUser);
});

passport.deserializeUser((user: any, done) => {
  //user parameter comes from req.session.passport.user
  done(null, user);
});

//THIS MIGHT BE BROKEN, INVESTIGATE
// export function login(req: Request) {
//   const result = { login: false };
//   passport.authenticate("local", (err: any, user: Express.User, info: any) => {
//     if (err) {
//       throw err;
//     }
//     if (!user) {
//       result.login = false;
//     } else {
//       req.login(user, (err: any) => {
//         if (err) {
//           throw err;
//         }
//         //console.log(`logged in as ${user.username}`);
//         result.login = true;
//       });
//     }
//   })(req);

//   return result;
// }

export const createLoginMiddleware = (options: passport.AuthenticateOptions) =>
  passport.authenticate("local", options);

export async function logout(req: Request) {
  // req.logout((err: any) => {
  //   if (err) throw err;
  //   return true;
  // });
  await req.logoutAsync?.();
}

export async function mockSignup(req: Request, create: UserRepositoryFunction) {
  const salt = crypto.randomBytes(16);
  const username = req.body.username;
  const hashed_password = await hashPassword(req.body.password, salt);
  const user: UserCreate = {
    username,
    hashed_password,
    salt,
  };
  const result = await create(user);
  if (!result) {
    return false;
  }
  //req.loginAsync = util.promisify(req.login);

  // req.login(user, (err: any) => {
  //   if (err) {
  //     throw err;
  //   }
  //   //console.log(`logged in as ${user.username}`);
  //   return true;
  // });
  await req.loginAsync?.({ id: result.id, username: result.username });
  return true;
}

export async function signup(req: Request) {
  return mockSignup(req, createUser);
}

export function passportUser(req: Request) {
  if (req.user) {
    return req.user;
  }
  return null;
}
