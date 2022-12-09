import express from 'express';
import { router } from './routers/routes.mjs';

const PORT = process.env.PORT || 3333;

const app = express();

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
