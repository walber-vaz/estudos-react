import { Router } from 'express';

const home = () => {
  const router = Router();

  router.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
  });

  return router;
}

export { home };
