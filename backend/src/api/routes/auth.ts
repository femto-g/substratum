import Router from "express-promise-router";
import {
  loginMiddleware,
  sessionMiddleware,
  signupMiddleware,
} from "../middleware/auth";
import { validateRequestBody } from "../middleware/validation";
import { userSchema } from "../../util/types/schemas";

export const router = Router();

router.post("/login", validateRequestBody(userSchema), loginMiddleware);
router.post("/signup", validateRequestBody(userSchema), signupMiddleware);
router.get("/session", sessionMiddleware);
