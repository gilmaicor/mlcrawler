import express, { Request, Response, NextFunction } from 'express';
import timeout from 'connect-timeout';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();

app.use(timeout('30s'));
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
app.use(routes);
app.use(haltOnTimedout);

// Tratando rota não encontrada
app.use((req, res, next) => {
  const err = new Error('Rota não encontrada');
  res.status(404).send(err.message);
  next(err);
});

function haltOnTimedout(req: Request, res: Response, next: NextFunction) {
  if (!req.timedout) next();
}

const server = app.listen(process.env.PORT || 4000, () => {
  console.log(`Web server listening on: ${process.env.PORT || 4000}`);
});

export default server;
