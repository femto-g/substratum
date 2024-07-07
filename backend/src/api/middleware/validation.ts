import { Request, Response, NextFunction } from "express";
import { ZodError, ZodIssue, ZodObject } from "zod";
import { StatusCodes } from "http-status-codes";

export function formatIssuePath(path: (string | number)[]) {
  const first = path[0];
  let formattedPath = first.toString();
  const restOfPath = path.slice(1);
  for (const key of restOfPath) {
    if ((key as string).length) {
      formattedPath += "." + key;
    } else {
      formattedPath += "[" + key + "]";
    }
  }
  return formattedPath;
}

export function validateRequestBody(schema: ZodObject<any, any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue: ZodIssue) => ({
          message: `${formatIssuePath(issue.path)} : ${issue.message}`,
        }));
        res
          .status(StatusCodes.BAD_REQUEST)
          .json({ error: "Invalid data", details: errorMessages });
      } else {
        next(error);
      }
    }
  };
}
