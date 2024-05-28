import { Request, Response, NextFunction } from "express";
import { cryptoPbkdf2 } from "./promisified";

export function routeAsyncCatch(fn : (req : Request, res : Response, next : NextFunction) => any) {
  return async (req : Request, res : Response, next : NextFunction) => {
    try{
      return await fn(req, res, next);
    }catch(e){
      return next(e);
    }
  }
}

export async function hashPassword(password : string, salt : Buffer) {
  return await cryptoPbkdf2(password, salt, 310000, 32, 'sha256');
}
