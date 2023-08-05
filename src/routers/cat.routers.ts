import { catController } from '../controllers/cat.controller';
import { Router } from 'express';

export const router = Router();

router.get('/', catController.getAll);
router.get('/:id', catController.getById);
router.post('/', catController.update);
router.put('/:id', catController.update);
router.delete('/:id', catController.delete);
