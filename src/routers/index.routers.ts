import { Router } from 'express';
import * as catRouter from './cat.routers';

export const router = Router();

router.use('/cats', catRouter.router);
