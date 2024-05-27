import { Request, Response, NextFunction } from "express";

export function routeAsyncCatch(fn : (req : Request, res : Response, next : NextFunction) => any) {
  return async (req : Request, res : Response, next : NextFunction) => {
    try{
      return await fn(req, res, next);
    }catch(e){
      return next(e);
    }
  }
}
