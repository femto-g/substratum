import { User } from "../../data/repositories/userRepository"

//allows you to access these properties in req.user in express middleware
declare namespace Express {
  export interface Request {
     user?: User,
     login?: any,
     logout?: any
  }
}

export interface Service {
  (req : Request) : any
}