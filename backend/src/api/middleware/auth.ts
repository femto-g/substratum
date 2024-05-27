import { NextFunction, Request, Response } from "express";
import { routeAsyncCatch } from "../../util/helpers";
import { login, signup, logout, session} from '../../biz/services/auth';
import { Service } from "../../util/types";


export async function mockLoginMiddleware(req : Request, res : Response, next : NextFunction, login : Service) {
  const loginResult = login(req);
  if(!loginResult){
    return res.sendStatus(400);
  }
  return res.sendStatus(200);
}

export async function rawLoginMiddleware(req : Request, res : Response, next : NextFunction) {
  return mockLoginMiddleware(req, res, next, login);
}

export const loginMiddleware = routeAsyncCatch(rawLoginMiddleware);



export async function mockSignupMiddleware(req : Request, res : Response, next : NextFunction, signup : Service) {
  const signupResult = signup(req);
  if(!signupResult){
    return res.sendStatus(400);
  }
  return res.sendStatus(200);
}

export async function rawSignupMiddleware(req : Request, res : Response, next : NextFunction) {
  return mockSignupMiddleware(req, res, next, signup);
}

export const signupMiddleware = routeAsyncCatch(rawSignupMiddleware);


export async function mockSessionMiddleware(req : Request, res : Response, next : NextFunction, session : Service) {
  const sessionResult = session(req);
  if(!sessionResult){
    return res.sendStatus(401);
  }

  return res.sendStatus(200);
}

export async function rawSessionMiddleware(req : Request, res : Response, next : NextFunction) {
  return mockSignupMiddleware(req, res, next, session);
}

export const sessionMiddleware = routeAsyncCatch(rawSessionMiddleware);


