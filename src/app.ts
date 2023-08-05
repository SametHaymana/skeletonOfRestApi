import expres, { Application } from 'express';
import { handleErrors } from './middlewares/errorHandler.middleware';
import { notFoundHandler } from './middlewares/notFound.middlewares';
import { router } from './routers/index.routers';
import cors from 'cors';

export const app: Application = expres();

app.use(cors());
app.use(expres.json());

app.use(router);
app.use('*', notFoundHandler);
app.use(handleErrors);
