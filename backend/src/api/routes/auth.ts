import Router from 'express-promise-router';
import { loginMiddleware, sessionMiddleware, signupMiddleware } from '../middleware/auth';

export const router = Router();

router.post('/login', loginMiddleware);
router.post('/signup', signupMiddleware);
router.post('/session', sessionMiddleware);



