import express, { Request, Response } from 'express';
import client from '../prometheus/init';
const router = express();

router.get('/', async (req: Request, res: Response) => {
  res.setHeader('Content-Type', client.register.contentType);
  res.send(await client.register.metrics());
});
export default router;
