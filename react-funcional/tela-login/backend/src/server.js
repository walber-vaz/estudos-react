import express from 'express';
import { home } from './routers/routers.mjs';

const PORT = process.env.PORT || 3333;

const app = express();

app.use('/', home());

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});
