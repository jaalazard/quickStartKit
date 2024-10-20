import express, { Router, Request, Response } from 'express';
import { getExamples, getExampleById } from '../services/example-service';

const exampleRouter: Router = express.Router();

exampleRouter.get('/', async (req: Request, res: Response) => {
  try {
    await getExamples(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

exampleRouter.get('/:exampleId', async (req: Request, res: Response) => {
  try {
    await getExampleById(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default exampleRouter;
