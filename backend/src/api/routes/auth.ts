import Router from "express-promise-router";
import {
  loginFailureMiddleware,
  loginMiddleware,
  loginSuccessMiddleware,
  logoutMiddleware,
  protectedRoute,
  signupMiddleware,
  userMiddleware,
} from "../middleware/auth";
import { validateRequestBody } from "../middleware/validation";
import { userSchema } from "../../util/types/schemas";

export const router = Router();

router.post("/login", validateRequestBody(userSchema), loginMiddleware);
// router.get("/loginSuccess", loginSuccessMiddleware);
// router.get("/loginFailure", loginFailureMiddleware);
router.post("/signup", validateRequestBody(userSchema), signupMiddleware);
router.get("/user", userMiddleware);
router.get("/logout", protectedRoute, logoutMiddleware);
