import { NextFunction, Request, Response } from "express";
import { routeAsyncCatch } from "../../util/helpers";
import { login, signup, logout, session } from "../../service/auth";
import { Service } from "../../util/types";

export async function mockLoginMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
  login: Service,
) {
  const loginResult = login(req);
  if (!loginResult) {
    return res.sendStatus(400);
  }
  return res.sendStatus(200);
}

export const loginMiddleware = routeAsyncCatch(
  (req: Request, res: Response, next: NextFunction) =>
    mockLoginMiddleware(req, res, next, login),
);

export async function mockSignupMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
  signup: Service,
) {
  const signupResult = signup(req);
  if (!signupResult) {
    return res.sendStatus(400);
  }
  return res.sendStatus(200);
}

export const signupMiddleware = routeAsyncCatch(
  (req: Request, res: Response, next: NextFunction) =>
    mockSignupMiddleware(req, res, next, signup),
);

export async function mockSessionMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
  session: Service,
) {
  const sessionResult = session(req);
  if (!sessionResult) {
    return res.sendStatus(401);
  }

  return res.status(200).json(sessionResult);
}

export const sessionMiddleware = routeAsyncCatch(
  (req: Request, res: Response, next: NextFunction) =>
    mockSessionMiddleware(req, res, next, session),
);
