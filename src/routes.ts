import express from 'express';
import crawlerCtrl from './controllers/crawlerCtrl';

const routes = express.Router();
const crawlerController = new crawlerCtrl();

routes.post('/scraping/mercadolivre', crawlerController.index);

export default routes;
