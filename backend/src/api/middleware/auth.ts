import { NextFunction, Request, Response } from "express";
import { routeAsyncCatch } from "../../util/helpers";
import { login, signup, logout, session} from '../../biz/services/auth';

export const loginMiddleware = routeAsyncCatch(async (req : Request, res : Response, next : NextFunction) => {
  const loginResult = login(req);
  if(!loginResult){
    return res.sendStatus(400);
  }
  return res.sendStatus(200);
});

export const signupMiddleware = routeAsyncCatch(async (req : Request, res : Response, next : NextFunction) => {
  const signupResult = signup(req);
  if(!signupResult){
    return res.sendStatus(400);
  }
  return res.sendStatus(200);
});

export const sessionMiddleware = routeAsyncCatch(async (req : Request, res : Response, next : NextFunction) => {
  const sessionResult = session(req);
  if(!sessionResult){
    return res.sendStatus(401);
  }

  return res.sendStatus(200);
})


