import Router from 'express-promise-router';
import { login, signup, logout, session} from '../../biz/services/auth';
import { loginMiddleware, signupMiddleware } from '../middleware/auth';

const router = Router();

router.post('/login', loginMiddleware);
router.post('/signup', signupMiddleware);

