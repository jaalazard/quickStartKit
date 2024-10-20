import { Request, Response } from 'express';
import database from '../database';

const getExamples = async (req: Request, res: Response) => {
  try {
    const data = await database.query('SELECT * FROM example ORDER BY example_nom ASC');
    const examples = data[0];
    res.status(200).json(examples);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getExampleById = async (req: Request, res: Response) => {
  try {
    const exampleId = req.params.exampleId;
    const data = await database.query(`SELECT * FROM example WHERE id = '${exampleId}'`);
    const example = data[0];
    res.status(200).json(example);
  } catch (err) {
    res.status(500).json(err);
  }
};

export { getExamples, getExampleById };
