import Router from "express-promise-router";
import {
  loginMiddleware,
  logoutMiddleware,
  protectedRoute,
  signupMiddleware,
  userMiddleware,
} from "../middleware/auth";
import { validateRequestBody } from "../middleware/validation";
import { userSchema } from "../../types/schemas";

export const router = Router();

router.post("/login", validateRequestBody(userSchema), loginMiddleware);
router.post("/signup", validateRequestBody(userSchema), signupMiddleware);
router.get("/user", userMiddleware);
router.get("/logout", protectedRoute, logoutMiddleware);
