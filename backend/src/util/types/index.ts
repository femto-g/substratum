import { Request } from "express";
import { User } from "../../data/repositories/userRepository";

//allows you to access these properties in req.user in express middleware
//doing something wrong here?

declare global {
  namespace Express {
    export interface Request {
      loginAsync?: (user: Express.User) => Promise<void>;
      logoutAsync?: () => Promise<void>;
    }
  }
}

export { Request };
