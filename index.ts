import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { connectDB } from './db/init';
import todoRoutes from './routes/todo';
import metricRoutes from './routes/metrics';
import { reqResTime, totalRequests } from './prometheus/init';
import responseTime from 'response-time';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { swaggerOptions } from './swagger/init';

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

connectDB();

app.use(
  responseTime((req: Request, res: Response, time: number) => {
    totalRequests.inc();
    reqResTime.labels({ method: req.method, route: req.baseUrl, code: req.statusCode }).observe(time);
  }),
);

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api/todos', todoRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/metrics', metricRoutes);
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
