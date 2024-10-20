import express, { Router, Response } from 'express';
import exampleRouter from './exampleRouter';

const router: Router = express.Router();

router.get('/', (res: Response) => {
  res.send('Hello world!');
});

router.use('/example', exampleRouter);

export default router;
