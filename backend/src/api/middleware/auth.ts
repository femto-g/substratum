import { NextFunction, Request, Response } from "express";
import { routeAsyncCatch } from "../../util/helpers";
import {
  signup,
  createLoginMiddleware,
  logout,
  passportUser,
} from "../../service/auth";
import { StatusCodes } from "http-status-codes";
import util from "util";

// export async function mockLoginMiddleware(
//   req: Request,
//   res: Response,
//   next: NextFunction,
//   login: Service,
// ) {
//   const loginResult = login(req);
//   if (!loginResult) {
//     return res.sendStatus(StatusCodes.UNAUTHORIZED);
//   }
//   return res.sendStatus(StatusCodes.OK);
// }

// export const loginMiddleware = routeAsyncCatch(
//   (req: Request, res: Response, next: NextFunction) =>
//     mockLoginMiddleware(req, res, next, login),
// );

// export const loginmw = createLoginMiddleware({
//   successRedirect: '/loginSuccess',
//   failureRedirect: '/loginFailure'})

export const loginMiddleware = routeAsyncCatch(
  createLoginMiddleware({
    successRedirect: "/loginSuccess",
    failureRedirect: "/loginFailure",
  }),
);

export const loginSuccessMiddleware = routeAsyncCatch(
  (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
  },
);

export const loginFailureMiddleware = routeAsyncCatch(
  (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.UNAUTHORIZED);
  },
);

export async function mockLogoutMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
  logout: (req: Request) => Promise<any>,
) {
  // if (req.user) {
  //   await logout(req);
  // } else {
  //   res.sendStatus(StatusCodes.UNAUTHORIZED);
  // }
  await logout(req);
}

export const logoutMiddleware = routeAsyncCatch(
  (req: Request, res: Response, next: NextFunction) =>
    mockLogoutMiddleware(req, res, next, logout),
);

export async function mockSignupMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
  signup: (req: Request) => Promise<any>,
) {
  const signupResult = await signup(req);
  if (!signupResult) {
    return res.sendStatus(StatusCodes.UNAUTHORIZED);
  }
  return res.sendStatus(StatusCodes.OK);
}

export const signupMiddleware = routeAsyncCatch(
  (req: Request, res: Response, next: NextFunction) =>
    mockSignupMiddleware(req, res, next, signup),
);

export function mockUserMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
  getCurrentUser: (req: Request) => Express.User | null,
) {
  const currentUser = getCurrentUser(req);
  if (!currentUser) {
    return res.sendStatus(StatusCodes.UNAUTHORIZED);
  }

  return res.status(StatusCodes.OK).json(currentUser);
}

export function userMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  mockUserMiddleware(req, res, next, passportUser);
}

export function passportAsync(req: Request, res: Response, next: NextFunction) {
  try {
    req.loginAsync = util.promisify(req.login);
    req.logoutAsync = util.promisify(req.logOut);
  } catch (e) {
    next();
  }
}

export function protectedRoute(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (req.user) {
    return next();
  }
  return res.sendStatus(StatusCodes.UNAUTHORIZED);
}
