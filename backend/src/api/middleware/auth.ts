import { NextFunction, Request, Response } from "express";
import { routeAsyncCatch } from "../../util/helpers";
import { login, signup, logout, session} from '../../biz/services/auth';

export const loginMiddleware = routeAsyncCatch(async (req : Request, res : Response, next : NextFunction) => {
  const loginResult = login(req);
  if(!loginResult){
    //send 400 class
  }
  //send 200 class
});

export const signupMiddleware = routeAsyncCatch(async (req : Request, res : Response, next : NextFunction) => {
  const signupResult = signup(req);
  if(!signupResult){
    //send 400 class
  }
  //send 200 class
});



