# Backend

## Code Structure

The backend is structured in a multi-layer architecture, seperating the data, service, and api layers. The code follows a functional dependency injection pattern.

## Testing strategy

## Useful things

Error catching Higher-Order Function for async middleware

```
/backend/src/util/helpers.ts

export function routeAsyncCatch(
  fn: (req: Request, res: Response, next: NextFunction) => any,
) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await fn(req, res, next);
    } catch (e) {
      return next(e);
    }
  };
}
```

Request body validating middleware

```
/backend/src/middleware/validation.ts

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
```

Basic winston logger. Extend as needed.

```
/backend/src/core/logger.ts

export const logger = winston.createLogger({
  level: "info",
  format: combine(errors({ stack: true }), timestamp(), json()),
  transports: [new winston.transports.Console()],
  exceptionHandlers: [new winston.transports.Console()],
  rejectionHandlers: [new winston.transports.Console()],
});
```
