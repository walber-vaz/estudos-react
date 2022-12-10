import { Router } from 'express';

import UserController from '../controllers/UserController.mjs';

const router = Router();

router.get('/', (req, res) => res.json({ message: 'Hello World!' }));
router.get('/users', UserController.index);

router.post('/users', UserController.create);

export { router };
